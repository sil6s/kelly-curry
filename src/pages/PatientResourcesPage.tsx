'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

const FORMS = [
  {
    title: 'New Client Intake Form',
    description:
      'Share basic history, contact information, and what brings you to therapy.',
    type: 'PDF',
    href: '/forms/new-client-intake-form.pdf',
  },
  {
    title: 'Consent for Treatment',
    description:
      'Review practice expectations, informed consent, and client rights.',
    type: 'PDF',
    href: '/forms/consent-for-treatment.pdf',
  },
  {
    title: 'Privacy Practices (HIPAA)',
    description: 'Learn how your health information is protected and used.',
    type: 'PDF',
    href: '/forms/privacy-practices-hipaa.pdf',
  },
  {
    title: 'Telehealth Consent',
    description:
      'Complete this if you plan to meet virtually from Kentucky or Ohio.',
    type: 'PDF',
    href: '/forms/telehealth-consent.pdf',
  },
];

const PRICING = [
  {
    title: 'Individual Therapy',
    price: '$165',
    duration: '50 minutes',
    note: 'per session',
  },
  {
    title: 'Couples Therapy',
    price: '$195',
    duration: '50 minutes',
    note: 'per session',
    payOnly: 'Cash pay only',
  },
  {
    title: 'Family Therapy',
    price: '$210',
    duration: '60 minutes',
    note: 'per session',
    payOnly: 'Cash pay only',
  },
];

const EXPECTATIONS = [
  'Complete requested forms before your first appointment when possible.',
  'If you are unsure what applies to you, bring questions to the consultation or first session.',
  'Kelly will review fit, scheduling, fees, and next steps before ongoing work begins.',
];

export default function PatientResourcesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-page']}>
        <section className={styles['kbc-page-hero']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Patient Resources</SectionEyebrow>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '18ch' }}>
              Patient Resources
            </h1>
            <p className={styles['kbc-body']}>
              Find intake forms, fees, payment information, and simple guidance
              for preparing for your first session. Forms can be completed
              before your appointment so the first meeting can feel more settled
              and focused.
            </p>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Forms</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Intake forms and documents.
            </h2>
            <p className={styles['kbc-body']}>
              These documents help Kelly understand your needs and explain the
              practice policies before care begins. If a form is not yet
              available to download, reach out and Kelly will send the right
              paperwork directly.
            </p>
            <div className={styles['kbc-resources-form-grid']}>
              {FORMS.map((form) => (
                <div
                  key={form.title}
                  className={styles['kbc-resources-form-card']}
                >
                  <div
                    className={styles['kbc-resource-card-icon']}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 40 40" fill="none">
                      <path
                        d="M12 6H24L30 12V34H12V6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M24 6V13H30"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 20H26M16 25H26M16 30H22"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className={styles['kbc-resources-form-card-title']}>
                    {form.title}
                  </div>
                  <p className={styles['kbc-resources-form-card-body']}>
                    {form.description}
                  </p>
                  <div className={styles['kbc-resource-file-type']}>
                    {form.type}
                  </div>
                  <a href={form.href} download className={styles['kbc-pill']}>
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>What to Expect</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Before your first session.
            </h2>
            <div className={styles['kbc-resources-two-column']}>
              <p className={styles['kbc-body']}>
                Intake paperwork gives Kelly the basic information needed to
                begin thoughtfully. You do not need to have everything figured
                out before you arrive — the first conversation will help clarify
                what support should look like.
              </p>
              <div className={styles['kbc-resource-info-card']}>
                <ul className={styles['kbc-service-card-list']}>
                  {EXPECTATIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']} id="fees-payment">
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Fees &amp; Payment</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Clear rates, simple billing.
            </h2>
            <p className={styles['kbc-body']}>
              Most clients begin with weekly sessions. Payment is typically due
              at the time of service unless another arrangement has been made.
            </p>
            <div className={styles['kbc-resource-pricing-grid']}>
              {PRICING.map((item) => (
                <div
                  key={item.title}
                  className={styles['kbc-service-pricing-card']}
                >
                  <div className={styles['kbc-fee-label']}>{item.title}</div>
                  <div className={styles['kbc-service-pricing-amount']}>
                    {item.price}
                  </div>
                  <div className={styles['kbc-service-pricing-meta']}>
                    <span>{item.duration}</span>
                    <span>{item.note}</span>
                  </div>
                  {item.payOnly ? (
                    <div className={styles['kbc-service-pay-label']}>
                      {item.payOnly}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className={styles['kbc-resource-payment-grid']}>
              <div className={styles['kbc-resource-info-card']}>
                <h3 className={styles['kbc-service-content-title']}>
                  Payment information
                </h3>
                <p className={styles['kbc-service-section-sub']}>
                  Credit/debit cards, HSA/FSA cards, ACH bank transfer, cash,
                  and check are accepted. Kelly is in network with select plans,
                  and can provide superbills when appropriate.
                </p>
              </div>
              <div className={styles['kbc-resource-info-card']}>
                <h3 className={styles['kbc-service-content-title']}>
                  Policies
                </h3>
                <p className={styles['kbc-service-section-sub']}>
                  Please provide at least 24 hours notice for cancellations when
                  possible. Late cancellations and missed sessions may be billed
                  according to practice policy and your signed consent forms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section']}>
          <div className={styles['kbc-crisis-note']}>
            This practice contact form and email are not monitored for
            emergencies. If you are in immediate danger or experiencing a
            crisis, please call 911, go to the nearest emergency room, or
            contact 988 (Suicide and Crisis Lifeline) for immediate support.
          </div>
        </section>

        <div className={styles['kbc-page-cta-section']}>
          <SectionEyebrow>Ready to get started?</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>Ready to get started?</h2>
          <p className={styles['kbc-body']}>
            Use the same consultation flow to share what you are looking for, or
            contact Kelly directly with questions about forms, fees, or fit.
          </p>
          <div className={styles['kbc-page-cta-actions']}>
            <button
              type="button"
              className={styles['kbc-pill']}
              onClick={() => setIsConsultationOpen(true)}
            >
              Schedule a Consultation
            </button>
            <a
              href="/contact"
              className={styles['kbc-link-quiet']}
              style={{ color: 'rgba(245,240,232,0.78)' }}
            >
              Contact Kelly
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
