'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const INSURANCE_OPTIONS = [
  'Aetna',
  'United Healthcare',
  'UMR',
  'Custom Design Benefits',
  'MedBen',
  'Anthem / BCBS',
];

const STEP_LABELS = [
  'Contact',
  'Preferences',
  'Payment',
  'Your Message',
  'Review',
];

type FormData = {
  name: string;
  email: string;
  format: '' | 'in-person' | 'virtual' | 'either';
  payment: '' | 'self-pay' | 'insurance';
  insurancePlan: string;
  briefReason: string;
  additionalNotes: string;
};

const FORMAT_LABELS: Record<string, string> = {
  'in-person': 'In-person',
  virtual: 'Virtual',
  either: 'Open to either',
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    format: '',
    payment: '',
    insurancePlan: '',
    briefReason: '',
    additionalNotes: '',
  });

  function set<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 1) return form.name.trim() !== '' && form.email.trim() !== '';
    if (step === 2) return form.format !== '';
    if (step === 3)
      return (
        form.payment !== '' &&
        (form.payment !== 'insurance' || form.insurancePlan !== '')
      );
    if (step === 4) return form.briefReason.trim() !== '';
    return true;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className={styles['kbc-contact']} id="contact">
        <div className={styles['kbc-contact-grid']}>
          <div />
          <div className={styles['kbc-contact-confirm']}>
            <div className={styles['kbc-eyebrow']}>Thank You</div>
            <h2
              className={`${styles['kbc-h2']} ${styles['kbc-contact-confirm-h2']}`}
            >
              Your message is on its way.
            </h2>
            <p className={styles['kbc-body']}>
              Kelly will follow up about availability, fit, and next steps. As a
              solo provider, she will respond as soon as she is able — typically
              within two business days.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const reviewRows = [
    { label: 'Name', value: form.name },
    { label: 'Email', value: form.email },
    { label: 'Format', value: FORMAT_LABELS[form.format] ?? form.format },
    {
      label: 'Payment',
      value:
        form.payment === 'self-pay'
          ? 'Self-pay'
          : `Insurance — ${form.insurancePlan}`,
    },
    { label: 'What brings you here', value: form.briefReason },
    ...(form.additionalNotes
      ? [{ label: 'Additional notes', value: form.additionalNotes }]
      : []),
  ];

  return (
    <section className={styles['kbc-contact']} id="contact">
      <div className={styles['kbc-contact-stacked']}>
        <div className={styles['kbc-contact-text']}>
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Reach out for a brief, <em>free</em> consultation.
          </h2>
          <p className={styles['kbc-body']}>
            Reaching out can feel like a big step, and you do not need to have
            everything figured out. Share a little about what you are looking
            for, and Kelly will follow up to talk through fit, availability, and
            next steps.
          </p>
        </div>

        <div className={styles['kbc-contact-form-wrap']}>
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
                  <div className={styles['kbc-step-num']}>
                    {isDone ? (
                      <svg
                        viewBox="0 0 16 16"
                        width="11"
                        height="11"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="2,8 6,12 14,4" />
                      </svg>
                    ) : (
                      n
                    )}
                  </div>
                  <span className={styles['kbc-step-label']}>{label}</span>
                </div>
              );
            })}
          </div>

          <form className={styles['kbc-contact-form']} onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h3 className={styles['kbc-step-heading']}>
                  Basic Information
                </h3>
                <label className={styles['kbc-field']}>
                  <span className={styles['kbc-field-label']}>Name</span>
                  <input
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                  />
                </label>
                <label className={styles['kbc-field']}>
                  <span className={styles['kbc-field-label']}>Email</span>
                  <input
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                </label>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className={styles['kbc-step-heading']}>
                  How would you prefer to meet?
                </h3>
                <p className={styles['kbc-step-note']}>
                  Kelly&rsquo;s office is located in Fort Thomas, Kentucky.
                </p>
                <div className={styles['kbc-choice-group']}>
                  {(
                    [
                      { value: 'in-person', label: 'In-person' },
                      { value: 'virtual', label: 'Virtual' },
                      { value: 'either', label: 'Open to either' },
                    ] as const
                  ).map(({ value, label }) => (
                    <label
                      key={value}
                      className={[
                        styles['kbc-choice'],
                        form.format === value
                          ? styles['kbc-choice-selected']
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <input
                        type="radio"
                        name="format"
                        value={value}
                        checked={form.format === value}
                        onChange={() => set('format', value)}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className={styles['kbc-step-heading']}>
                  How will you be paying?
                </h3>
                <div className={styles['kbc-choice-group']}>
                  {(
                    [
                      { value: 'self-pay', label: 'Self-pay' },
                      { value: 'insurance', label: 'Insurance' },
                    ] as const
                  ).map(({ value, label }) => (
                    <label
                      key={value}
                      className={[
                        styles['kbc-choice'],
                        form.payment === value
                          ? styles['kbc-choice-selected']
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={value}
                        checked={form.payment === value}
                        onChange={() => set('payment', value)}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {form.payment === 'insurance' && (
                  <div className={styles['kbc-insurance-select']}>
                    <div className={styles['kbc-field-label']}>
                      Select your insurance plan
                    </div>
                    <div className={styles['kbc-choice-group']}>
                      {INSURANCE_OPTIONS.map((ins) => (
                        <label
                          key={ins}
                          className={[
                            styles['kbc-choice'],
                            form.insurancePlan === ins
                              ? styles['kbc-choice-selected']
                              : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          <input
                            type="radio"
                            name="insurancePlan"
                            value={ins}
                            checked={form.insurancePlan === ins}
                            onChange={() => set('insurancePlan', ins)}
                          />
                          <span>{ins}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {step === 4 && (
              <>
                <h3 className={styles['kbc-step-heading']}>Your message</h3>
                <label className={styles['kbc-field']}>
                  <span className={styles['kbc-field-label']}>
                    What would you like to reach out about?
                  </span>
                  <input
                    type="text"
                    value={form.briefReason}
                    onChange={(e) => set('briefReason', e.target.value)}
                    placeholder="e.g. anxiety, relationship stress, life transition"
                  />
                </label>
                <label className={styles['kbc-field']}>
                  <span className={styles['kbc-field-label']}>
                    Anything else you would like Kelly to know (optional)
                  </span>
                  <textarea
                    rows={4}
                    value={form.additionalNotes}
                    onChange={(e) => set('additionalNotes', e.target.value)}
                  />
                </label>
              </>
            )}

            {step === 5 && (
              <>
                <h3 className={styles['kbc-step-heading']}>
                  Review your information
                </h3>
                <div className={styles['kbc-review']}>
                  {reviewRows.map(({ label, value }) => (
                    <div key={label} className={styles['kbc-review-row']}>
                      <span className={styles['kbc-review-label']}>
                        {label}
                      </span>
                      <span className={styles['kbc-review-value']}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className={styles['kbc-step-nav']}>
              {step > 1 && (
                <button
                  type="button"
                  className={styles['kbc-step-back-btn']}
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </button>
              )}
              {step < 5 ? (
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
                >
                  Continue
                </button>
              ) : (
                <button type="submit" className={styles['kbc-pill']}>
                  Send Message
                </button>
              )}
            </div>
          </form>
        </div>
        <div className={styles['kbc-contact-alt']}>
          <span>Not ready to book a consultation?</span>
          <a href="/contact" className={styles['kbc-link-quiet']}>
            Reach out here
          </a>
          <a href="/fees-insurance" className={styles['kbc-link-quiet']}>
            View fees &amp; insurance
          </a>
        </div>
      </div>
    </section>
  );
}
