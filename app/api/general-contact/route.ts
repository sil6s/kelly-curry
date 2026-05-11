import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type GeneralContactBody = {
  reason?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  preferredContactMethod?: unknown;
  message?: unknown;
  communicationAcknowledgment?: unknown;
  companyWebsite?: unknown;
  turnstileToken?: unknown;
};

const CONTACT_REASONS = new Set([
  'I have a general question',
  'I am a current client with an office question',
  'I need help with billing or payment',
  'Other',
]);

const CONTACT_METHODS = new Set(['Email', 'Phone', 'Text']);
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function genericError(status = 400) {
  return NextResponse.json(
    { error: 'We could not send your message. Please call the office directly.' },
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

function bool(value: unknown) {
  return value === true;
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

function row(label: string, value?: string) {
  if (!value) return '';
  return `<tr><td style="padding:8px 0;color:#7a7570;font-size:13px;width:210px;vertical-align:top;">${escapeHtml(
    label,
  )}</td><td style="padding:8px 0;color:#2e2b26;font-size:14px;line-height:1.6;">${escapeHtml(
    value,
  )}</td></tr>`;
}

function buildEmail(data: {
  reason: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  message: string;
  timestamp: string;
}) {
  const rows =
    row('Reason for contact', data.reason) +
    row('First name', data.firstName) +
    row('Last name', data.lastName) +
    row('Email', data.email) +
    row('Phone', data.phone) +
    row('Preferred contact method', data.preferredContactMethod) +
    row('Message', data.message) +
    row('Timestamp', data.timestamp);

  const html = `
    <div style="background:#f5f0e8;padding:28px;font-family:Arial,sans-serif;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #ded6c9;border-radius:8px;padding:34px;">
        <div style="width:64px;height:64px;border:1px solid #8f7458;background:#f5eeee;color:#2e2b26;font-family:Georgia,serif;font-size:24px;line-height:64px;text-align:center;margin-bottom:22px;">KBC</div>
        <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#735a43;margin-bottom:8px;">Kelly Baker Curry, MSW, MEd, LCSW</div>
        <h1 style="font-family:Georgia,serif;font-weight:500;font-size:30px;line-height:1.2;color:#2e2b26;margin:0 0 22px;">New General Contact Message</h1>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${rows}</table>
        <p style="border-top:1px solid #ede8df;margin:34px 0 0;padding-top:18px;color:#7a7570;font-size:12px;line-height:1.6;">This form is intended for general office communication only. Do not use standard email for urgent or sensitive clinical communication.</p>
      </div>
    </div>`;

  const plainText = [
    'New General Contact Message',
    'Kelly Baker Curry, MSW, MEd, LCSW',
    '',
    `Reason for contact: ${data.reason}`,
    `First name: ${data.firstName}`,
    `Last name: ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Preferred contact method: ${data.preferredContactMethod}`,
    `Message: ${data.message}`,
    `Timestamp: ${data.timestamp}`,
    '',
    'This form is intended for general office communication only. Do not use standard email for urgent or sensitive clinical communication.',
  ].join('\n');

  return { html, text: plainText };
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  if (!checkRateLimit(ip)) return genericError(429);

  let body: GeneralContactBody;
  try {
    body = (await req.json()) as GeneralContactBody;
  } catch {
    return genericError();
  }

  if (text(body.companyWebsite, 200)) return genericError();

  const reason = text(body.reason, 120);
  const firstName = text(body.firstName, 80);
  const lastName = text(body.lastName, 80);
  const email = text(body.email, 160);
  const phone = text(body.phone, 40);
  const preferredContactMethod = text(body.preferredContactMethod, 40);
  const message = text(body.message, 750);
  const communicationAcknowledgment = bool(body.communicationAcknowledgment);
  const turnstileToken = text(body.turnstileToken, 2048);

  if (
    !CONTACT_REASONS.has(reason) ||
    !firstName ||
    !lastName ||
    !email ||
    !isEmail(email) ||
    !CONTACT_METHODS.has(preferredContactMethod) ||
    !message ||
    !communicationAcknowledgment
  ) {
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

  const emailContent = buildEmail({
    reason,
    firstName,
    lastName,
    email,
    phone,
    preferredContactMethod,
    message,
    timestamp: new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  });

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: 'New general contact message',
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return genericError(500);
  }
}
