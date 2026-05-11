'use client';

import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import {
  CalendarClock,
  CreditCard,
  GitBranch,
  HeartHandshake,
  ShieldCheck,
  UserRound,
  UsersRound,
} from 'lucide-react';
import Turnstile from 'react-turnstile';
import LogoMark from './LogoMark';
import styles from '../styles/Website.module.css';

const SERVICE_OPTIONS = [
  {
    value: 'individual',
    label: 'Individual therapy',
    price: '$150',
    note: 'Insurance may be available',
    Icon: UserRound,
  },
  {
    value: 'couples',
    label: 'Couples therapy',
    price: '$175',
    note: 'Private pay only',
    Icon: HeartHandshake,
  },
  {
    value: 'family',
    label: 'Family therapy',
    price: '$200',
    note: 'Private pay only',
    Icon: UsersRound,
  },
  {
    value: 'coparenting',
    label: 'Coparenting therapy',
    price: '$225',
    note: 'Private pay only',
    Icon: GitBranch,
  },
] as const;

const INSURANCE_OPTIONS = [
  'Aetna',
  'Cigna',
  'BCBS',
  'UnitedHealthcare',
  'MedBen',
  'Custom Design Benefits',
  'Lyra',
  'Not sure',
];

const INDIVIDUAL_PAYMENT_OPTIONS = ['Use insurance', 'Self-pay / Cash pay'];

const SUPPORT_AREAS = [
  'Anxiety or stress',
  'Relationship concerns',
  'Family communication',
  'Parenting or coparenting support',
  'Life transitions',
  'Grief or loss',
  'Self-esteem or personal growth',
  'Other',
  'Prefer to discuss privately',
];

const STEP_LABELS = [
  'Service',
  'Contact',
  'Payment',
  'Preferences',
  'People',
  'Review',
];

export type AppointmentServiceType = (typeof SERVICE_OPTIONS)[number]['value'];
type ServiceType = AppointmentServiceType | '';
type AdditionalPerson = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  relationship: string;
};

type FormData = {
  service: ServiceType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  bestTimeToReach: string;
  individualPaymentType: string;
  insuranceSelection: string;
  privatePayAcknowledgment: boolean;
  clientStatus: string;
  appointmentFormat: string;
  preferredDays: string[];
  preferredTimes: string[];
  supportAreas: string[];
  individualAdditionalContactNeeded: string;
  additionalPeople: AdditionalPerson[];
  briefMessage: string;
  intakeAcknowledgment: boolean;
  relationshipAcknowledgment: boolean;
  companyWebsite: string;
};

const initialForm: FormData = {
  service: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredContactMethod: '',
  bestTimeToReach: '',
  individualPaymentType: '',
  insuranceSelection: '',
  privatePayAcknowledgment: false,
  clientStatus: '',
  appointmentFormat: '',
  preferredDays: [],
  preferredTimes: [],
  supportAreas: [],
  individualAdditionalContactNeeded: 'No',
  additionalPeople: [],
  briefMessage: '',
  intakeAcknowledgment: false,
  relationshipAcknowledgment: false,
  companyWebsite: '',
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

function createInitialForm(defaultService?: AppointmentServiceType): FormData {
  return {
    ...initialForm,
    service: defaultService ?? '',
  };
}

function createPerson(): AdditionalPerson {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    fullName: '',
    email: '',
    phone: '',
    relationship: '',
  };
}

function getServiceLabel(value: ServiceType) {
  return SERVICE_OPTIONS.find((service) => service.value === value)?.label ?? '';
}

function getServicePrice(value: ServiceType) {
  const service = SERVICE_OPTIONS.find((item) => item.value === value);
  return service?.price ? `${service.price} per 50-minute session` : '';
}

function isPrivatePayService(service: ServiceType) {
  return ['couples', 'family', 'coparenting'].includes(service);
}

function needsAdditionalPeopleSection(form: FormData) {
  if (form.service === 'individual') {
    return form.individualAdditionalContactNeeded === 'Yes';
  }
  return form.service !== '';
}

export default function ConsultationFlow({
  titleId,
  defaultService,
}: {
  titleId?: string;
  defaultService?: AppointmentServiceType;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(() =>
    createInitialForm(defaultService),
  );
  const [turnstileToken, setTurnstileToken] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const selectedService = useMemo(
    () => SERVICE_OPTIONS.find((service) => service.value === form.service),
    [form.service],
  );

  function set<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'service') {
        next.individualPaymentType = '';
        next.insuranceSelection = '';
        next.privatePayAcknowledgment = false;
        next.individualAdditionalContactNeeded = 'No';
        next.additionalPeople = [];
      }
      if (field === 'individualPaymentType') {
        next.insuranceSelection = '';
      }
      if (
        field === 'individualAdditionalContactNeeded' &&
        value === 'No'
      ) {
        next.additionalPeople = [];
      }
      return next;
    });
  }

  function toggleArray(field: 'preferredDays' | 'preferredTimes' | 'supportAreas', value: string) {
    setForm((prev) => {
      const current = prev[field];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  }

  function updatePerson(
    id: string,
    field: keyof Omit<AdditionalPerson, 'id'>,
    value: string,
  ) {
    setForm((prev) => ({
      ...prev,
      additionalPeople: prev.additionalPeople.map((person) =>
        person.id === id ? { ...person, [field]: value } : person,
      ),
    }));
  }

  function addPerson() {
    setForm((prev) => ({
      ...prev,
      additionalPeople: [...prev.additionalPeople, createPerson()],
    }));
  }

  function removePerson(id: string) {
    setForm((prev) => ({
      ...prev,
      additionalPeople: prev.additionalPeople.filter((person) => person.id !== id),
    }));
  }

  function canAdvance() {
    if (step === 1) return form.service !== '';
    if (step === 2) {
      return (
        form.firstName.trim() !== '' &&
        form.lastName.trim() !== '' &&
        form.email.trim() !== '' &&
        form.phone.trim() !== '' &&
        form.preferredContactMethod !== ''
      );
    }
    if (step === 3) {
      if (form.service === 'individual') {
        return (
          form.individualPaymentType === 'Self-pay / Cash pay' ||
          (form.individualPaymentType === 'Use insurance' &&
            form.insuranceSelection !== '')
        );
      }
      if (isPrivatePayService(form.service)) return form.privatePayAcknowledgment;
    }
    if (step === 4) {
      return form.clientStatus !== '' && form.appointmentFormat !== '';
    }
    return true;
  }

  function canSubmit() {
    return (
      canAdvance() &&
      form.intakeAcknowledgment &&
      form.relationshipAcknowledgment &&
      (!isPrivatePayService(form.service) || form.privatePayAcknowledgment) &&
      turnstileToken !== '' &&
      !submitting
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit()) return;

    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      if (!res.ok) throw new Error('Request failed');

      setForm(createInitialForm(defaultService));
      setTurnstileToken('');
      setStep(1);
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className={styles['kbc-contact-confirm']}>
        <LogoMark className={styles['kbc-intake-logo']} />
        <div className={styles['kbc-eyebrow']}>Appointment Request</div>
        <h2
          className={`${styles['kbc-h2']} ${styles['kbc-contact-confirm-h2']}`}
        >
          Thank you. Your appointment request has been received.
        </h2>
        <p className={styles['kbc-body']}>
          The office will follow up using your preferred contact method.
        </p>
      </div>
    );
  }

  const showAdditionalPeople = needsAdditionalPeopleSection(form);

  return (
    <div className={styles['kbc-contact-form-wrap']}>
      <div className={styles['kbc-intake-form-head']}>
        <LogoMark className={styles['kbc-intake-logo']} />
        <div>
          <div className={styles['kbc-eyebrow']}>Appointment Request</div>
          <h2 className={styles['kbc-step-heading']} id={titleId}>
            General Intake Request
          </h2>
        </div>
      </div>

      <p className={styles['kbc-form-availability']}>
        Please do not include detailed medical history, diagnoses, medications,
        insurance ID numbers, Social Security numbers, or urgent safety concerns
        in this form. This form is for general intake and appointment requests
        only.
      </p>

      <div className={styles['kbc-steps-bar']}>
        {STEP_LABELS.map((label, i) => {
          const n = i + 1;
          const isDone = n < step;
          const isActive = n === step;
          return (
            <div
              key={label}
              className={[
                styles['kbc-step-item'],
                isActive ? styles['kbc-step-item-active'] : '',
                isDone ? styles['kbc-step-item-done'] : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className={styles['kbc-step-num']}>{isDone ? '✓' : n}</div>
              <span className={styles['kbc-step-label']}>{label}</span>
            </div>
          );
        })}
      </div>

      <form className={styles['kbc-contact-form']} onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyWebsite"
          value={form.companyWebsite}
          onChange={(e) => set('companyWebsite', e.target.value)}
          className={styles['kbc-honeypot']}
          tabIndex={-1}
          autoComplete="off"
        />

        {step === 1 && (
          <section className={styles['kbc-form-step-section']}>
            <h3 className={styles['kbc-step-heading']}>
              Which service are you requesting?
            </h3>
            <div className={styles['kbc-service-choice-grid']}>
              {SERVICE_OPTIONS.map((service) => (
                <label
                  key={service.value}
                  className={[
                    styles['kbc-service-choice-card'],
                    form.service === service.value
                      ? styles['kbc-service-choice-card-selected']
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <input
                    type="radio"
                    name="service"
                    value={service.value}
                    checked={form.service === service.value}
                    onChange={() => set('service', service.value)}
                    required
                  />
                  <span className={styles['kbc-service-choice-icon']}>
                    <service.Icon aria-hidden="true" />
                  </span>
                  <span className={styles['kbc-service-choice-title']}>
                    {service.label}
                  </span>
                  {service.price ? (
                    <span className={styles['kbc-service-choice-price']}>
                      {service.price}
                    </span>
                  ) : null}
                  <span className={styles['kbc-service-choice-meta']}>
                    50-minute session
                  </span>
                  <span className={styles['kbc-service-choice-note']}>
                    {service.note}
                  </span>
                </label>
              ))}
            </div>
          </section>
        )}

        {step === 2 && (
          <section className={styles['kbc-form-step-section']}>
            <h3 className={styles['kbc-step-heading']}>
              Primary Contact Information
            </h3>
            <div className={styles['kbc-field-grid']}>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>First name</span>
                <input
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  maxLength={80}
                  onChange={(e) => set('firstName', e.target.value)}
                  required
                />
              </label>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>Last name</span>
                <input
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  maxLength={80}
                  onChange={(e) => set('lastName', e.target.value)}
                  required
                />
              </label>
            </div>
            <label className={styles['kbc-field']}>
              <span className={styles['kbc-field-label']}>Email</span>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                maxLength={160}
                onChange={(e) => set('email', e.target.value)}
                required
              />
            </label>
            <label className={styles['kbc-field']}>
              <span className={styles['kbc-field-label']}>Phone</span>
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                maxLength={40}
                onChange={(e) => set('phone', e.target.value)}
                required
              />
            </label>
            <ChoiceGroup
              label="Preferred contact method"
              name="preferredContactMethod"
              value={form.preferredContactMethod}
              options={['Phone', 'Email', 'Text']}
              onChange={(value) => set('preferredContactMethod', value)}
              required
            />
            <ChoiceGroup
              label="Best time to reach you"
              name="bestTimeToReach"
              value={form.bestTimeToReach}
              options={['Morning', 'Afternoon', 'Evening', 'No preference']}
              onChange={(value) => set('bestTimeToReach', value)}
            />
          </section>
        )}

        {step === 3 && (
          <section className={styles['kbc-form-step-section']}>
            <h3 className={styles['kbc-step-heading']}>
              Insurance or Payment Details
            </h3>
            {form.service === 'individual' ? (
              <>
                <p className={styles['kbc-step-note']}>
                  Insurance options are available for individual therapy only.
                  Benefits and eligibility may need to be verified before an
                  appointment is confirmed.
                </p>
                <div className={styles['kbc-payment-summary']}>
                  <CreditCard aria-hidden="true" />
                  <span>
                    Cash-pay price for individual therapy is{' '}
                    <strong>{getServicePrice(form.service)}</strong>.
                  </span>
                </div>
                <ChoiceGroup
                  label="How would you like to pay for individual therapy?"
                  name="individualPaymentType"
                  value={form.individualPaymentType}
                  options={INDIVIDUAL_PAYMENT_OPTIONS}
                  onChange={(value) => set('individualPaymentType', value)}
                  required
                />
                {form.individualPaymentType === 'Use insurance' ? (
                  <div className={styles['kbc-form-note']}>
                    <ShieldCheck aria-hidden="true" />
                    <div>
                      <strong>Insurance plan</strong>
                      <p>
                        Select the plan you hope to use. Benefits and
                        eligibility may need to be verified before an
                        appointment is confirmed.
                      </p>
                    </div>
                    <ChoiceGroup
                      label="Which insurance plan would you like to use?"
                      name="insuranceSelection"
                      value={form.insuranceSelection}
                      options={INSURANCE_OPTIONS}
                      onChange={(value) => set('insuranceSelection', value)}
                      required
                    />
                  </div>
                ) : null}
                {form.individualPaymentType === 'Self-pay / Cash pay' ? (
                  <div className={styles['kbc-form-note']}>
                    <CreditCard aria-hidden="true" />
                  <div>
                      <strong>
                        Individual therapy: {getServicePrice(form.service)}.
                      </strong>
                      <p>
                        You selected self-pay for individual therapy. Insurance
                        will not be billed for this request.
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            ) : null}

            {isPrivatePayService(form.service) && selectedService ? (
              <div className={styles['kbc-form-note']}>
                <CreditCard aria-hidden="true" />
                <div>
                  <strong>
                    {selectedService.label}: {selectedService.price} per
                    50-minute session.
                  </strong>
                </div>
                <label className={styles['kbc-check-choice']}>
                  <input
                    type="checkbox"
                    checked={form.privatePayAcknowledgment}
                    onChange={(e) =>
                      set('privatePayAcknowledgment', e.target.checked)
                    }
                    required
                  />
                  <span>
                    I understand that couples, family, and coparenting sessions
                    are private-pay services and are not billed through
                    insurance.
                  </span>
                </label>
              </div>
            ) : null}

          </section>
        )}

        {step === 4 && (
          <section className={styles['kbc-form-step-section']}>
            <h3 className={styles['kbc-step-heading']}>
              Appointment Preferences
            </h3>
            <ChoiceGroup
              label="Are you a new or returning client?"
              name="clientStatus"
              value={form.clientStatus}
              options={['New client', 'Returning client']}
              onChange={(value) => set('clientStatus', value)}
              required
            />
            <ChoiceGroup
              label="Preferred appointment format"
              name="appointmentFormat"
              value={form.appointmentFormat}
              options={['In person', 'Telehealth', 'No preference']}
              onChange={(value) => set('appointmentFormat', value)}
              required
            />
            <div className={styles['kbc-scheduling-tip']}>
              <CalendarClock aria-hidden="true" />
              <span>
                If your schedule is flexible, choosing open availability can
                help the office offer the soonest available appointment.
              </span>
            </div>
            <CheckboxGroup
              label="Preferred days"
              values={form.preferredDays}
              options={[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Weekend if available',
              ]}
              onToggle={(value) => toggleArray('preferredDays', value)}
            />
            <CheckboxGroup
              label="Preferred time of day"
              values={form.preferredTimes}
              options={[
                'Morning',
                'Afternoon',
                'Evening',
                'Open availability / soonest available',
              ]}
              onToggle={(value) => toggleArray('preferredTimes', value)}
            />
          </section>
        )}

        {step === 5 && (
          <section className={styles['kbc-form-step-section']}>
            <h3 className={styles['kbc-step-heading']}>
              General Support Areas
            </h3>
            <CheckboxGroup
              label="What are you hoping to get support with?"
              values={form.supportAreas}
              options={SUPPORT_AREAS}
              onToggle={(value) => toggleArray('supportAreas', value)}
            />

            {form.service === 'individual' ? (
              <ChoiceGroup
                label="Is there someone else we should contact about scheduling, such as a parent or guardian?"
                name="individualAdditionalContactNeeded"
                value={form.individualAdditionalContactNeeded}
                options={['No', 'Yes']}
                onChange={(value) =>
                  set('individualAdditionalContactNeeded', value)
                }
              />
            ) : null}

            {showAdditionalPeople ? (
              <AdditionalPeopleSection
                people={form.additionalPeople}
                onAdd={addPerson}
                onRemove={removePerson}
                onUpdate={updatePerson}
              />
            ) : null}

            <label className={styles['kbc-field']}>
              <span className={styles['kbc-field-label']}>Brief message</span>
              <span className={styles['kbc-step-note']}>
                Please keep this brief and avoid sharing detailed medical
                history, diagnoses, medications, insurance ID numbers, Social
                Security numbers, or emergency information.
              </span>
              <textarea
                rows={5}
                maxLength={750}
                value={form.briefMessage}
                onChange={(e) => set('briefMessage', e.target.value)}
                placeholder="Example: I am interested in scheduling a couples session and would prefer weekday afternoons."
              />
              <span className={styles['kbc-char-count']}>
                {form.briefMessage.length}/750
              </span>
            </label>
          </section>
        )}

        {step === 6 && (
          <section className={styles['kbc-form-step-section']}>
            <h3 className={styles['kbc-step-heading']}>
              Review and Submit
            </h3>
            <div className={styles['kbc-review']}>
              <ReviewRow label="Service" value={getServiceLabel(form.service)} />
              <ReviewRow
                label="Session price"
                value={getServicePrice(form.service) || 'To be discussed'}
              />
              <ReviewRow
                label="Primary contact"
                value={`${form.firstName} ${form.lastName}`}
              />
              <ReviewRow label="Email" value={form.email} />
              <ReviewRow label="Phone" value={form.phone} />
              <ReviewRow
                label="Contact preference"
                value={form.preferredContactMethod}
              />
              <ReviewRow
                label="Appointment format"
                value={form.appointmentFormat}
              />
              <ReviewRow
                label="Payment"
                value={
                  form.insuranceSelection ||
                  (isPrivatePayService(form.service)
                    ? 'Private pay acknowledged'
                    : '')
                }
              />
            </div>

            <div className={styles['kbc-required-acks']}>
              <label className={styles['kbc-check-choice']}>
                <input
                  type="checkbox"
                  checked={form.intakeAcknowledgment}
                  onChange={(e) =>
                    set('intakeAcknowledgment', e.target.checked)
                  }
                  required
                />
                <span>
                  I understand this form is for general intake and appointment
                  requests only and should not be used for emergencies or
                  detailed medical information.
                </span>
              </label>
              <label className={styles['kbc-check-choice']}>
                <input
                  type="checkbox"
                  checked={form.relationshipAcknowledgment}
                  onChange={(e) =>
                    set('relationshipAcknowledgment', e.target.checked)
                  }
                  required
                />
                <span>
                  I understand that submitting this form does not create a
                  therapist-client relationship and does not guarantee an
                  appointment.
                </span>
              </label>
              {isPrivatePayService(form.service) ? (
                <label className={styles['kbc-check-choice']}>
                  <input
                    type="checkbox"
                    checked={form.privatePayAcknowledgment}
                    onChange={(e) =>
                      set('privatePayAcknowledgment', e.target.checked)
                    }
                    required
                  />
                  <span>
                    I understand this selected service is private-pay and is not
                    billed through insurance.
                  </span>
                </label>
              ) : null}
            </div>

            {siteKey ? (
              <div className={styles['kbc-turnstile-wrap']}>
                <Turnstile
                  sitekey={siteKey}
                  theme="light"
                  onVerify={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken('')}
                  onError={() => setTurnstileToken('')}
                />
              </div>
            ) : (
              <p className={styles['kbc-step-note']}>
                Appointment request verification is not configured.
              </p>
            )}

            {submitStatus === 'error' ? (
              <div className={styles['kbc-form-error']} role="alert">
                We could not send your request. Please call the office directly.
              </div>
            ) : null}

            <div className={styles['kbc-crisis-note']}>
              If this is an emergency or crisis, call 911 or go to the nearest
              emergency room. This form is not monitored for urgent needs.
            </div>
          </section>
        )}

        <div className={styles['kbc-step-nav']}>
          {step > 1 && (
            <button
              type="button"
              className={styles['kbc-step-back-btn']}
              onClick={() => setStep((s) => s - 1)}
              disabled={submitting}
            >
              Back
            </button>
          )}
          {step < STEP_LABELS.length ? (
            <button
              type="button"
              className={[
                styles['kbc-pill'],
                !canAdvance() ? styles['kbc-pill-disabled'] : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => {
                if (canAdvance()) setStep((s) => s + 1);
              }}
              disabled={!canAdvance()}
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className={[
                styles['kbc-pill'],
                !canSubmit() ? styles['kbc-pill-disabled'] : '',
              ]
                .filter(Boolean)
                .join(' ')}
              disabled={!canSubmit()}
            >
              {submitting ? 'Submitting...' : 'Submit Appointment Request'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function ChoiceGroup({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <fieldset className={styles['kbc-choice-fieldset']}>
      <legend className={styles['kbc-field-label']}>{label}</legend>
      <div className={styles['kbc-choice-group']}>
        {options.map((option) => (
          <label
            key={option}
            className={[
              styles['kbc-choice'],
              value === option ? styles['kbc-choice-selected'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              required={required}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({
  label,
  values,
  options,
  onToggle,
}: {
  label: string;
  values: string[];
  options: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset className={styles['kbc-choice-fieldset']}>
      <legend className={styles['kbc-field-label']}>{label}</legend>
      <div className={styles['kbc-checkbox-grid']}>
        {options.map((option) => (
          <label
            key={option}
            className={[
              styles['kbc-choice'],
              values.includes(option) ? styles['kbc-choice-selected'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <input
              type="checkbox"
              checked={values.includes(option)}
              onChange={() => onToggle(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function AdditionalPeopleSection({
  people,
  onAdd,
  onRemove,
  onUpdate,
}: {
  people: AdditionalPerson[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (
    id: string,
    field: keyof Omit<AdditionalPerson, 'id'>,
    value: string,
  ) => void;
}) {
  return (
    <section className={styles['kbc-additional-people']}>
      <div>
        <h3 className={styles['kbc-step-heading']}>
          Additional people to include
        </h3>
        <p className={styles['kbc-step-note']}>
          Add anyone who should receive scheduling communication for this
          request. Only include people who should be contacted about appointment
          coordination.
        </p>
      </div>
      {people.map((person, index) => (
        <div key={person.id} className={styles['kbc-additional-person-card']}>
          <div className={styles['kbc-additional-person-head']}>
            <h4>Additional person {index + 1}</h4>
            <button
              type="button"
              className={styles['kbc-step-back-btn']}
              onClick={() => onRemove(person.id)}
            >
              Remove
            </button>
          </div>
          <label className={styles['kbc-field']}>
            <span className={styles['kbc-field-label']}>Full name</span>
            <input
              type="text"
              autoComplete="name"
              value={person.fullName}
              maxLength={120}
              onChange={(e) => onUpdate(person.id, 'fullName', e.target.value)}
            />
          </label>
          <label className={styles['kbc-field']}>
            <span className={styles['kbc-field-label']}>Email</span>
            <input
              type="email"
              autoComplete="email"
              value={person.email}
              maxLength={160}
              onChange={(e) => onUpdate(person.id, 'email', e.target.value)}
            />
          </label>
          <label className={styles['kbc-field']}>
            <span className={styles['kbc-field-label']}>Phone, optional</span>
            <input
              type="tel"
              autoComplete="tel"
              value={person.phone}
              maxLength={40}
              onChange={(e) => onUpdate(person.id, 'phone', e.target.value)}
            />
          </label>
          <label className={styles['kbc-field']}>
            <span className={styles['kbc-field-label']}>
              Relationship to request
            </span>
            <select
              value={person.relationship}
              onChange={(e) =>
                onUpdate(person.id, 'relationship', e.target.value)
              }
            >
              <option value="">Select one</option>
              <option>Partner</option>
              <option>Coparent</option>
              <option>Family member</option>
              <option>Parent/guardian</option>
              <option>Other</option>
            </select>
          </label>
        </div>
      ))}
      <button type="button" className={styles['kbc-pill']} onClick={onAdd}>
        Add another person
      </button>
    </section>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className={styles['kbc-review-row']}>
      <span className={styles['kbc-review-label']}>{label}</span>
      <span className={styles['kbc-review-value']}>{value}</span>
    </div>
  );
}
