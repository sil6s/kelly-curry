'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import Turnstile from 'react-turnstile';
import ConsultationModal from '../components/ConsultationModal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LogoMark from '../components/LogoMark';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  OFFICE_ADDRESS_LINE_1,
  OFFICE_ADDRESS_LINE_2,
} from '../utils/contact';
import { breadcrumbSchema, contactFaq, faqSchema, SITE_URL } from '../data/seo';
import styles from '../styles/Website.module.css';

const CONTACT_REASONS = [
  'I have a general question',
  'I am a current client with an office question',
  'I need help with billing or payment',
  'I am a new client and want to start services',
  'Other',
];

const NEW_CLIENT_REASON = 'I am a new client and want to start services';
const GENERAL_REASON = 'I have a general question';
const CONTACT_METHODS = ['Email', 'Phone', 'Text'];
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

const FINDING_THE_OFFICE = [
  'Located at Watch Point in Fort Thomas',
  'After entering Watch Point, pass the speed bump',
  'Take the first driveway immediately after the speed bump',
  'Follow the long driveway up to the house at the top',
];

const PARKING = [
  'Drive up the long driveway to the house at the top',
  'Park at the house at the top of the driveway',
  'Text upon arrival',
];

type GeneralContactForm = {
  reason: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  message: string;
  communicationAcknowledgment: boolean;
  companyWebsite: string;
};

const initialGeneralContactForm: GeneralContactForm = {
  reason: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredContactMethod: '',
  message: '',
  communicationAcknowledgment: false,
  companyWebsite: '',
};

export default function ContactPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [generalForm, setGeneralForm] = useState<GeneralContactForm>(
    initialGeneralContactForm,
  );
  const [turnstileToken, setTurnstileToken] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const showGeneralForm =
    generalForm.reason !== '' && generalForm.reason !== NEW_CLIENT_REASON;
  const showNewClientRoute = generalForm.reason === NEW_CLIENT_REASON;

  function setField<K extends keyof GeneralContactForm>(
    field: K,
    value: GeneralContactForm[K],
  ) {
    setGeneralForm((prev) => ({ ...prev, [field]: value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  }

  function canSubmitGeneralContact() {
    return (
      showGeneralForm &&
      generalForm.firstName.trim() !== '' &&
      generalForm.lastName.trim() !== '' &&
      generalForm.email.trim() !== '' &&
      generalForm.preferredContactMethod !== '' &&
      generalForm.message.trim() !== '' &&
      generalForm.communicationAcknowledgment &&
      turnstileToken !== '' &&
      !submitting
    );
  }

  async function handleGeneralContactSubmit(event: FormEvent) {
    event.preventDefault();
    if (!canSubmitGeneralContact()) return;

    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/general-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...generalForm, turnstileToken }),
      });

      if (!res.ok) throw new Error('Request failed');

      setGeneralForm(initialGeneralContactForm);
      setTurnstileToken('');
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-contact-page']}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                name: 'Contact Kelly Baker Curry, LCSW',
                url: `${SITE_URL}/contact`,
                description:
                  'Contact Kelly Baker Curry, MSW, MEd, LCSW, a therapist in Fort Thomas, KY, for general office questions or appointment request next steps.',
                about: {
                  '@id': `${SITE_URL}/#business`,
                },
              },
              faqSchema(contactFaq),
              breadcrumbSchema([
                { name: 'Home', url: SITE_URL },
                { name: 'Contact', url: `${SITE_URL}/contact` },
              ]),
            ]).replace(/</g, '\\u003c'),
          }}
        />
        {/* Hero */}
        <section className={styles['kbc-contact-page-hero']}>
          <div className={styles['kbc-contact-page-inner']}>
            <div className={styles['kbc-eyebrow']}>Contact</div>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '20ch' }}>
              Reach out — <em>we&rsquo;ll take it from here.</em>
            </h1>
            <p className={styles['kbc-body']}>
              Choose the option that feels most comfortable. Kelly personally
              responds to all inquiries and will follow up about fit,
              availability, and next steps.
            </p>
          </div>
        </section>

        {/* Contact option cards */}
        <section className={styles['kbc-contact-options-section']}>
          <div className={styles['kbc-contact-options-inner']}>
            <div className={styles['kbc-eyebrow']}>Other ways to reach out</div>
            <div className={styles['kbc-contact-options-grid']}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={styles['kbc-contact-option-card']}
              >
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <rect
                      x="4"
                      y="10"
                      width="32"
                      height="22"
                      rx="3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M5 12 L20 22 L35 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>
                  Send an Email
                </div>
                <div className={styles['kbc-contact-option-value']}>
                  {CONTACT_EMAIL}
                </div>
                <div className={styles['kbc-contact-option-desc']}>
                  Best for non-urgent questions or if you&rsquo;d like time to
                  think about what to say.
                </div>
                <span className={styles['kbc-contact-option-cta']}>
                  Open email →
                </span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE.replace(/\D/g, '').replace(/^/, '+1')}`}
                className={styles['kbc-contact-option-card']}
              >
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path
                      d="M13 6 L17 6 L19.5 13 L16.5 16.5 C18.2 20, 20.5 22.5, 24 24 L27.5 21 L34 23.5 L34 28 C34 29.8, 32.5 31, 30.5 31 C18.5 31, 9 21.5, 9 9.5 C9 7.5, 11 6, 13 6 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>
                  Call or Text
                </div>
                <div className={styles['kbc-contact-option-value']}>
                  {CONTACT_PHONE}
                </div>
                <div className={styles['kbc-contact-option-desc']}>
                  Prefer to talk it through? Call or send a text during business
                  hours.
                </div>
                <span className={styles['kbc-contact-option-cta']}>
                  Call now →
                </span>
              </a>

              <button
                type="button"
                className={styles['kbc-contact-option-card']}
                onClick={() => setIsConsultationOpen(true)}
              >
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <rect
                      x="6"
                      y="6"
                      width="28"
                      height="28"
                      rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M12 14 H28 M12 20 H22 M12 26 H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>
                  Appointment Request
                </div>
                <div className={styles['kbc-contact-option-value']}>
                  Fill out a short form
                </div>
                <div className={styles['kbc-contact-option-desc']}>
                  Share the service, payment details, and scheduling
                  preferences Kelly needs to follow up.
                </div>
                <span className={styles['kbc-contact-option-cta']}>
                  Get started →
                </span>
              </button>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className={styles['kbc-contact-option-card']}
              >
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path
                      d="M20 5 C13 5, 8 11, 8 17 C8 26, 20 35, 20 35 C20 35, 32 26, 32 17 C32 11, 27 5, 20 5 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="20"
                      cy="17"
                      r="4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>
                  Get Directions
                </div>
                <div className={styles['kbc-contact-option-value']}>
                  {OFFICE_ADDRESS_LINE_1}
                  <br />
                  {OFFICE_ADDRESS_LINE_2}
                </div>
                <div className={styles['kbc-contact-option-desc']}>
                  In-person sessions available Monday through Thursday in Fort
                  Thomas.
                </div>
                <span className={styles['kbc-contact-option-cta']}>
                  Open in Maps →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* General contact form */}
        <section
          className={styles['kbc-contact-form-section']}
          id="general-contact-form"
        >
          <div className={styles['kbc-contact-form-inner']}>
            <div className={styles['kbc-general-contact-head']}>
              <LogoMark className={styles['kbc-intake-logo']} />
              <div>
                <div className={styles['kbc-eyebrow']}>General Contact</div>
                <h2
                  className={styles['kbc-h2']}
                  style={{ marginBottom: '16px' }}
                >
                  Send a brief message to the office.
                </h2>
                <p className={styles['kbc-body']}>
                  Have a general question for the office? Send a brief message
                  and the office will follow up during business hours.
                </p>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <div className={styles['kbc-contact-confirm']} role="status">
                <div className={styles['kbc-eyebrow']}>Message Received</div>
                <h3 className={styles['kbc-step-heading']}>
                  Thank you. Your message has been received.
                </h3>
                <p className={styles['kbc-body']}>
                  The office will follow up using your preferred contact
                  method.
                </p>
              </div>
            ) : (
              <form
                className={styles['kbc-general-contact-form']}
                onSubmit={handleGeneralContactSubmit}
              >
                <input
                  type="text"
                  name="companyWebsite"
                  value={generalForm.companyWebsite}
                  onChange={(e) => setField('companyWebsite', e.target.value)}
                  className={styles['kbc-honeypot']}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <fieldset className={styles['kbc-choice-fieldset']}>
                  <legend className={styles['kbc-field-label']}>
                    What can we help you with?
                  </legend>
                  <div className={styles['kbc-choice-group']}>
                    {CONTACT_REASONS.map((reason) => (
                      <label
                        key={reason}
                        className={[
                          styles['kbc-choice'],
                          generalForm.reason === reason
                            ? styles['kbc-choice-selected']
                            : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <input
                          type="radio"
                          name="reason"
                          value={reason}
                          checked={generalForm.reason === reason}
                          onChange={() => setField('reason', reason)}
                          required
                        />
                        <span>{reason}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {showNewClientRoute ? (
                  <div className={styles['kbc-new-client-route-card']}>
                    <h3 className={styles['kbc-step-heading']}>
                      Looking to begin therapy services?
                    </h3>
                    <p className={styles['kbc-body']}>
                      The Appointment Request form is the best next step because
                      it asks the right questions about service type, scheduling
                      preferences, and payment options.
                    </p>
                    <p className={styles['kbc-body']}>
                      To request services as a new client, please complete the
                      Appointment Request form so the office can collect the
                      right scheduling, service, and payment information.
                    </p>
                    <div className={styles['kbc-contact-page-cta-row']}>
                      <a
                        href="/#contact"
                        className={styles['kbc-pill']}
                      >
                        Continue to Appointment Request
                      </a>
                      <button
                        type="button"
                        className={styles['kbc-step-back-btn']}
                        onClick={() => setField('reason', GENERAL_REASON)}
                      >
                        I only have a general question
                      </button>
                    </div>
                  </div>
                ) : null}

                {showGeneralForm ? (
                  <div className={styles['kbc-general-contact-fields']}>
                    <div className={styles['kbc-field-grid']}>
                      <label className={styles['kbc-field']}>
                        <span className={styles['kbc-field-label']}>
                          First name
                        </span>
                        <input
                          type="text"
                          autoComplete="given-name"
                          value={generalForm.firstName}
                          maxLength={80}
                          onChange={(e) =>
                            setField('firstName', e.target.value)
                          }
                          required
                        />
                      </label>
                      <label className={styles['kbc-field']}>
                        <span className={styles['kbc-field-label']}>
                          Last name
                        </span>
                        <input
                          type="text"
                          autoComplete="family-name"
                          value={generalForm.lastName}
                          maxLength={80}
                          onChange={(e) =>
                            setField('lastName', e.target.value)
                          }
                          required
                        />
                      </label>
                    </div>
                    <div className={styles['kbc-field-grid']}>
                      <label className={styles['kbc-field']}>
                        <span className={styles['kbc-field-label']}>
                          Email
                        </span>
                        <input
                          type="email"
                          autoComplete="email"
                          value={generalForm.email}
                          maxLength={160}
                          onChange={(e) => setField('email', e.target.value)}
                          required
                        />
                      </label>
                      <label className={styles['kbc-field']}>
                        <span className={styles['kbc-field-label']}>
                          Phone, optional
                        </span>
                        <input
                          type="tel"
                          autoComplete="tel"
                          value={generalForm.phone}
                          maxLength={40}
                          onChange={(e) => setField('phone', e.target.value)}
                        />
                      </label>
                    </div>

                    <fieldset className={styles['kbc-choice-fieldset']}>
                      <legend className={styles['kbc-field-label']}>
                        Preferred contact method
                      </legend>
                      <div className={styles['kbc-choice-group']}>
                        {CONTACT_METHODS.map((method) => (
                          <label
                            key={method}
                            className={[
                              styles['kbc-choice'],
                              generalForm.preferredContactMethod === method
                                ? styles['kbc-choice-selected']
                                : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            <input
                              type="radio"
                              name="preferredContactMethod"
                              value={method}
                              checked={
                                generalForm.preferredContactMethod === method
                              }
                              onChange={() =>
                                setField('preferredContactMethod', method)
                              }
                              required
                            />
                            <span>{method}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <label className={styles['kbc-field']}>
                      <span className={styles['kbc-field-label']}>Message</span>
                      <span className={styles['kbc-step-note']}>
                        Please keep your message brief and avoid sharing
                        sensitive clinical or emergency information.
                      </span>
                      <textarea
                        rows={5}
                        maxLength={750}
                        value={generalForm.message}
                        onChange={(e) => setField('message', e.target.value)}
                        required
                      />
                      <span className={styles['kbc-char-count']}>
                        {generalForm.message.length}/750
                      </span>
                    </label>

                    <div className={styles['kbc-required-acks']}>
                      <p className={styles['kbc-form-availability']}>
                        If this is an emergency or crisis, call 911 or go to the
                        nearest emergency room. This form is not monitored for
                        urgent needs.
                      </p>
                      <p className={styles['kbc-form-availability']}>
                        Please do not include detailed medical history,
                        diagnoses, medications, insurance ID numbers, Social
                        Security numbers, or urgent safety concerns in this
                        form. This form is for general office communication
                        only.
                      </p>
                      <label className={styles['kbc-check-choice']}>
                        <input
                          type="checkbox"
                          checked={generalForm.communicationAcknowledgment}
                          onChange={(e) =>
                            setField(
                              'communicationAcknowledgment',
                              e.target.checked,
                            )
                          }
                          required
                        />
                        <span>
                          I have reviewed this notice and understand this form
                          is for general office communication only.
                        </span>
                      </label>
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
                        Contact form verification is not configured.
                      </p>
                    )}

                    {submitStatus === 'error' ? (
                      <div className={styles['kbc-form-error']} role="alert">
                        We could not send your message. Please call the office
                        directly.
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      className={[
                        styles['kbc-pill'],
                        !canSubmitGeneralContact()
                          ? styles['kbc-pill-disabled']
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      disabled={!canSubmitGeneralContact()}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                ) : null}
              </form>
            )}
          </div>
        </section>

        <section className={styles['kbc-contact-page-section']}>
          <div className={styles['kbc-contact-page-grid']}>
            <div>
              <div className={styles['kbc-eyebrow']}>Questions</div>
              <h2 className={styles['kbc-page-h2']}>
                Contact and scheduling FAQ.
              </h2>
              <p className={styles['kbc-body']} style={{ marginTop: '20px' }}>
                Kelly&rsquo;s Fort Thomas therapy office serves clients through
                in-person and virtual options depending on service type,
                availability, and location. These quick answers can help you
                decide whether to send a general question or complete the
                appointment request form.
              </p>
            </div>
            <div className={styles['kbc-faq-list']}>
              {contactFaq.map((faq) => (
                <details key={faq.question} className={styles['kbc-faq-item']}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Office & Map */}
        <section className={styles['kbc-contact-page-section']}>
          <div className={styles['kbc-contact-page-grid']}>
            <div>
              <div className={styles['kbc-eyebrow']}>Office Location</div>
              <h2 className={styles['kbc-page-h2']}>
                {OFFICE_ADDRESS_LINE_1}
                <br />
                {OFFICE_ADDRESS_LINE_2}
              </h2>
              <p className={styles['kbc-body']}>
                In-person sessions are held in a calm Fort Thomas office at
                Watch Point. Use the directions link for parking and arrival
                details before your first visit.
              </p>
              <a
                className={styles['kbc-pill']}
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: '28px' }}
              >
                Directions &amp; parking
              </a>
              <details
                className={styles['kbc-contact-directions-details']}
                style={{ marginTop: '28px' }}
              >
                <summary className={styles['kbc-contact-directions-summary']}>
                  Directions &amp; Parking
                </summary>
                <div style={{ marginTop: '20px' }}>
                  <div className={styles['kbc-location-label']}>
                    Finding the Office
                  </div>
                  <ul className={styles['kbc-location-list']}>
                    {FINDING_THE_OFFICE.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div
                    className={styles['kbc-location-label']}
                    style={{ marginTop: '20px' }}
                  >
                    Parking
                  </div>
                  <ul className={styles['kbc-location-list']}>
                    {PARKING.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
            <div className={styles['kbc-map-embed-wrap']}>
              <iframe
                className={styles['kbc-map-embed']}
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to 337 Tower Hill Road, Fort Thomas, KY 41075"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
