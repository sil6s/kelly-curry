'use client';

import { useRef, useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  OFFICE_ADDRESS_LINE_1,
  OFFICE_ADDRESS_LINE_2,
} from '../utils/contact';
import styles from '../styles/Website.module.css';

const FINDING_THE_OFFICE = [
  'Located in Watch Point',
  'Pass the speed bump',
  'First driveway immediately after the speed bump',
  'Long driveway leading up to the house',
];

const PARKING = [
  'Park at the bottom of the driveway',
  'Do not drive to the top',
  'Text upon arrival',
];

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formVisible, setFormVisible] = useState(false);

  function scrollToForm() {
    setFormVisible(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  return (
    <>
      <Header />
      <main className={styles['kbc-contact-page']}>
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
            <div
              className={styles['kbc-crisis-note']}
              style={{ marginTop: '36px' }}
            >
              If this is an emergency, please call 911 or 988 (Crisis Lifeline).
            </div>
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
                onClick={scrollToForm}
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
                  Request a Consultation
                </div>
                <div className={styles['kbc-contact-option-value']}>
                  Fill out a short form
                </div>
                <div className={styles['kbc-contact-option-desc']}>
                  Share a bit about what you&rsquo;re looking for. Kelly will
                  follow up to discuss fit and availability.
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

        {/* Consultation form */}
        <section
          ref={formRef}
          className={`${styles['kbc-contact-form-section']} ${formVisible ? styles['kbc-contact-form-section-visible'] : ''}`}
          id="consultation-form"
        >
          <div className={styles['kbc-contact-form-inner']}>
            <div className={styles['kbc-eyebrow']}>Request a Consultation</div>
            <h2 className={styles['kbc-h2']} style={{ marginBottom: '16px' }}>
              Tell Kelly a little <em>about yourself.</em>
            </h2>
            <p className={styles['kbc-body']}>
              Use the form for consultation requests. Kelly will personally
              follow up about fit, availability, and next steps.
            </p>
            <ConsultationForm successMessage="Thank you for reaching out. Kelly will personally follow up to discuss fit, availability, and next steps." />
            <div className={styles['kbc-contact-alt']}>
              <span>Prefer not to fill out a form?</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={styles['kbc-link-quiet']}
              >
                Email Kelly
              </a>
              <a href="/fees-insurance" className={styles['kbc-link-quiet']}>
                Questions about fees or insurance? View details here.
              </a>
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
    </>
  );
}
