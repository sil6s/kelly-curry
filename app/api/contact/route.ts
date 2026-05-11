import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type AdditionalPerson = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  relationship?: unknown;
};

type IntakeBody = {
  service?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  preferredContactMethod?: unknown;
  bestTimeToReach?: unknown;
  individualPaymentType?: unknown;
  insuranceSelection?: unknown;
  privatePayAcknowledgment?: unknown;
  clientStatus?: unknown;
  appointmentFormat?: unknown;
  preferredDays?: unknown;
  preferredTimes?: unknown;
  supportAreas?: unknown;
  individualAdditionalContactNeeded?: unknown;
  additionalPeople?: unknown;
  briefMessage?: unknown;
  intakeAcknowledgment?: unknown;
  relationshipAcknowledgment?: unknown;
  companyWebsite?: unknown;
  turnstileToken?: unknown;
};

const SERVICES: Record<
  string,
  { label: string; price: string; privatePay: boolean }
> = {
  individual: {
    label: 'Individual therapy',
    price: '$150 per 50-minute session',
    privatePay: false,
  },
  couples: {
    label: 'Couples therapy',
    price: '$175 per 50-minute session',
    privatePay: true,
  },
  family: {
    label: 'Family therapy',
    price: '$200 per 50-minute session',
    privatePay: true,
  },
  coparenting: {
    label: 'Coparenting therapy',
    price: '$225 per 50-minute session',
    privatePay: true,
  },
};

const INSURANCE_OPTIONS = new Set([
  'Aetna',
  'Cigna',
  'BCBS',
  'UnitedHealthcare',
  'MedBen',
  'Custom Design Benefits',
  'Lyra',
  'Not sure',
]);

const INDIVIDUAL_PAYMENT_OPTIONS = new Set([
  'Use insurance',
  'Self-pay / Cash pay',
]);

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function genericError(status = 400) {
  return NextResponse.json(
    { error: 'We could not send your request. Please call the office directly.' },
    { status },
  );
}

function text(value: unknown, max = 300) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

function textArray(value: unknown, maxItems = 12, maxLength = 80) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => text(item, maxLength))
    .filter(Boolean)
    .slice(0, maxItems);
}

function bool(value: unknown) {
  return value === true;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getIp(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return (
    req.headers.get('cf-connecting-ip') ||
    forwarded ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 5;
  const current = rateLimit.get(ip);

  if (!current || current.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= max) return false;
  current.count += 1;
  return true;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (ip !== 'unknown') body.set('remoteip', ip);

  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body,
    },
  );

  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

function sanitizeAdditionalPeople(value: unknown) {
  if (!Array.isArray(value)) return [];

  return value
    .slice(0, 6)
    .map((person: AdditionalPerson) => ({
      fullName: text(person.fullName, 120),
      email: text(person.email, 160),
      phone: text(person.phone, 40),
      relationship: text(person.relationship, 80),
    }))
    .filter(
      (person) =>
        person.fullName || person.email || person.phone || person.relationship,
    );
}

function row(label: string, value?: string | string[]) {
  const normalized = Array.isArray(value) ? value.join(', ') : value;
  if (!normalized) return '';
  return `<tr><td style="padding:8px 0;color:#7a7570;font-size:13px;width:210px;vertical-align:top;">${escapeHtml(
    label,
  )}</td><td style="padding:8px 0;color:#2e2b26;font-size:14px;line-height:1.6;">${escapeHtml(
    normalized,
  )}</td></tr>`;
}

function section(title: string, rows: string) {
  if (!rows) return '';
  return `<h2 style="font-family:Georgia,serif;font-weight:500;font-size:20px;color:#2e2b26;margin:30px 0 10px;">${escapeHtml(
    title,
  )}</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${rows}</table>`;
}

function buildEmail(data: {
  service: string;
  servicePrice: string;
  payment: string;
  privatePayAcknowledgment: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  bestTimeToReach: string;
  clientStatus: string;
  appointmentFormat: string;
  preferredDays: string[];
  preferredTimes: string[];
  supportAreas: string[];
  additionalPeople: ReturnType<typeof sanitizeAdditionalPeople>;
  briefMessage: string;
  intakeAcknowledgment: boolean;
  relationshipAcknowledgment: boolean;
}) {
  const primaryRows =
    row('Name', `${data.firstName} ${data.lastName}`) +
    row('Email', data.email) +
    row('Phone', data.phone) +
    row('Preferred contact method', data.preferredContactMethod) +
    row('Best time to reach them', data.bestTimeToReach);

  const requestRows =
    row('Selected service', data.service) +
    row('Session price', data.servicePrice) +
    row('Payment / insurance selection', data.payment) +
    row(
      'Private-pay acknowledgment',
      data.privatePayAcknowledgment ? 'Yes' : 'Not applicable',
    );

  const preferenceRows =
    row('New or returning client', data.clientStatus) +
    row('Appointment format preference', data.appointmentFormat) +
    row('Preferred days', data.preferredDays) +
    row('Preferred times', data.preferredTimes) +
    row('General support areas', data.supportAreas);

  const peopleRows = data.additionalPeople
    .map(
      (person, index) =>
        row(`Person ${index + 1}`, person.fullName) +
        row('Email', person.email) +
        row('Phone', person.phone) +
        row('Relationship', person.relationship),
    )
    .join('');

  const acknowledgmentRows =
    row(
      'General intake only',
      data.intakeAcknowledgment ? 'Acknowledged' : '',
    ) +
    row(
      'No therapist-client relationship / no appointment guarantee',
      data.relationshipAcknowledgment ? 'Acknowledged' : '',
    );

  const html = `
    <div style="background:#f5f0e8;padding:28px;font-family:Arial,sans-serif;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #ded6c9;border-radius:8px;padding:34px;">
        <div style="width:64px;height:64px;border:1px solid #8f7458;background:#f5eeee;color:#2e2b26;font-family:Georgia,serif;font-size:24px;line-height:64px;text-align:center;margin-bottom:22px;">KBC</div>
        <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#735a43;margin-bottom:8px;">Kelly Baker Curry, MSW, MEd, LCSW</div>
        <h1 style="font-family:Georgia,serif;font-weight:500;font-size:30px;line-height:1.2;color:#2e2b26;margin:0 0 22px;">New Appointment Request</h1>
        ${section('Request Details', requestRows)}
        ${section('Primary Contact Information', primaryRows)}
        ${section('Appointment Preferences', preferenceRows)}
        ${section('Additional People to Include', peopleRows)}
        ${section('Brief Message', row('Message', data.briefMessage))}
        ${section('Required Acknowledgments', acknowledgmentRows)}
        <p style="border-top:1px solid #ede8df;margin:34px 0 0;padding-top:18px;color:#7a7570;font-size:12px;line-height:1.6;">This form is intended for general intake and appointment requests only. Do not use standard email for urgent or sensitive clinical communication.</p>
      </div>
    </div>`;

  const textLines = [
    'New Appointment Request',
    'Kelly Baker Curry, MSW, MEd, LCSW',
    '',
    `Selected service: ${data.service}`,
    `Session price: ${data.servicePrice}`,
    `Payment / insurance selection: ${data.payment}`,
    `Private-pay acknowledgment: ${
      data.privatePayAcknowledgment ? 'Yes' : 'Not applicable'
    }`,
    '',
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Preferred contact method: ${data.preferredContactMethod}`,
    `Best time to reach them: ${data.bestTimeToReach || 'Not provided'}`,
    '',
    `New or returning client: ${data.clientStatus}`,
    `Appointment format preference: ${data.appointmentFormat}`,
    `Preferred days: ${data.preferredDays.join(', ') || 'Not provided'}`,
    `Preferred times: ${data.preferredTimes.join(', ') || 'Not provided'}`,
    `General support areas: ${data.supportAreas.join(', ') || 'Not provided'}`,
    '',
    'Additional people:',
    data.additionalPeople.length
      ? data.additionalPeople
          .map(
            (person, index) =>
              `${index + 1}. ${person.fullName || 'No name'} | ${
                person.email || 'No email'
              } | ${person.phone || 'No phone'} | ${
                person.relationship || 'No relationship'
              }`,
          )
          .join('\n')
      : 'None provided',
    '',
    `Brief message: ${data.briefMessage || 'Not provided'}`,
    '',
    'Required acknowledgments: acknowledged',
    '',
    'This form is intended for general intake and appointment requests only. Do not use standard email for urgent or sensitive clinical communication.',
  ].join('\n');

  return { html, text: textLines };
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  if (!checkRateLimit(ip)) return genericError(429);

  let body: IntakeBody;
  try {
    body = (await req.json()) as IntakeBody;
  } catch {
    return genericError();
  }

  if (text(body.companyWebsite, 200)) return genericError();

  const serviceKey = text(body.service, 40);
  const service = SERVICES[serviceKey];
  const firstName = text(body.firstName, 80);
  const lastName = text(body.lastName, 80);
  const email = text(body.email, 160);
  const phone = text(body.phone, 40);
  const preferredContactMethod = text(body.preferredContactMethod, 40);
  const bestTimeToReach = text(body.bestTimeToReach, 40);
  const individualPaymentType = text(body.individualPaymentType, 80);
  const insuranceSelection = text(body.insuranceSelection, 80);
  const privatePayAcknowledgment = bool(body.privatePayAcknowledgment);
  const clientStatus = text(body.clientStatus, 40);
  const appointmentFormat = text(body.appointmentFormat, 40);
  const preferredDays = textArray(body.preferredDays);
  const preferredTimes = textArray(body.preferredTimes);
  const supportAreas = textArray(body.supportAreas);
  const additionalPeople = sanitizeAdditionalPeople(body.additionalPeople);
  const briefMessage = text(body.briefMessage, 750);
  const intakeAcknowledgment = bool(body.intakeAcknowledgment);
  const relationshipAcknowledgment = bool(body.relationshipAcknowledgment);
  const turnstileToken = text(body.turnstileToken, 2048);

  if (
    !service ||
    !firstName ||
    !lastName ||
    !email ||
    !isEmail(email) ||
    !phone ||
    !preferredContactMethod ||
    !clientStatus ||
    !appointmentFormat ||
    !intakeAcknowledgment ||
    !relationshipAcknowledgment
  ) {
    return genericError();
  }

  if (serviceKey === 'individual') {
    if (
      !individualPaymentType ||
      !INDIVIDUAL_PAYMENT_OPTIONS.has(individualPaymentType)
    ) {
      return genericError();
    }

    if (
      individualPaymentType === 'Use insurance' &&
      (!insuranceSelection || !INSURANCE_OPTIONS.has(insuranceSelection))
    ) {
      return genericError();
    }
  }

  if (service.privatePay && !privatePayAcknowledgment) {
    return genericError();
  }

  const verified = await verifyTurnstile(turnstileToken, ip);
  if (!verified) return genericError();

  const smtpUser = process.env.GOOGLE_WORKSPACE_SMTP_USER;
  const smtpPassword = process.env.GOOGLE_WORKSPACE_SMTP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || smtpUser;

  if (!smtpUser || !smtpPassword || !to || !from) {
    return genericError(500);
  }

  const payment =
    (individualPaymentType === 'Use insurance'
      ? insuranceSelection
      : individualPaymentType) ||
    (service.privatePay ? 'Private pay' : 'Not provided');

  const emailContent = buildEmail({
    service: service.label,
    servicePrice: service.price,
    payment,
    privatePayAcknowledgment,
    firstName,
    lastName,
    email,
    phone,
    preferredContactMethod,
    bestTimeToReach,
    clientStatus,
    appointmentFormat,
    preferredDays,
    preferredTimes,
    supportAreas,
    additionalPeople,
    briefMessage,
    intakeAcknowledgment,
    relationshipAcknowledgment,
  });

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: 'New appointment request',
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return genericError(500);
  }
}
