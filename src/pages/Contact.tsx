'use client';

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
  return (
    <>
      <Header />
      <main className={styles['kbc-contact-page']}>

        {/* Hero */}
        <section className={styles['kbc-contact-page-hero']}>
          <div className={styles['kbc-contact-page-hero-inner']}>
            <div className={styles['kbc-eyebrow']}>Contact</div>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '22ch' }}>
              Reach out — <em>we&rsquo;ll take it from here.</em>
            </h1>
            <p className={styles['kbc-body']} style={{ maxWidth: '56ch' }}>
              Kelly personally responds to all inquiries and will follow up
              about fit, availability, and next steps. Choose whatever feels
              most comfortable.
            </p>
            <div className={styles['kbc-contact-crisis-alert']}>
              If this is an emergency, please call 911 or 988 (Crisis Lifeline).
            </div>
          </div>
        </section>

        {/* Primary form */}
        <section className={styles['kbc-contact-form-primary-section']}>
          <div className={styles['kbc-contact-form-primary-inner']}>
            <div className={styles['kbc-eyebrow']}>Request a Consultation</div>
            <h2 className={styles['kbc-h2']} style={{ marginBottom: '32px' }}>
              Tell Kelly a little <em>about yourself.</em>
            </h2>
            <div className={styles['kbc-contact-form-primary-card']}>
              <ConsultationForm successMessage="Thank you for reaching out. Kelly will personally follow up to discuss fit, availability, and next steps." />
            </div>
            <div className={styles['kbc-contact-form-primary-alt']}>
              Prefer not to fill out a form?{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles['kbc-link-quiet']}>
                Email Kelly directly
              </a>
              {' '}or{' '}
              <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '').replace(/^/, '+1')}`} className={styles['kbc-link-quiet']}>
                call or text
              </a>.
            </div>
            <div className={styles['kbc-contact-form-primary-fees-ref']}>
              Questions about fees or insurance?{' '}
              <a href="/#fees" className={styles['kbc-link-quiet']}>
                View billing details
              </a>.
            </div>
          </div>
        </section>

        {/* Other ways to reach out */}
        <section className={styles['kbc-contact-alt-section']}>
          <div className={styles['kbc-contact-alt-inner']}>
            <div className={styles['kbc-eyebrow']} style={{ marginBottom: '32px' }}>
              Other ways to reach out
            </div>
            <div className={styles['kbc-contact-alt-grid']}>

              <a href={`mailto:${CONTACT_EMAIL}`} className={styles['kbc-contact-alt-card']}>
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <rect x="4" y="10" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M5 12 L20 22 L35 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>Send an Email</div>
                <div className={styles['kbc-contact-option-value']}>{CONTACT_EMAIL}</div>
                <div className={styles['kbc-contact-option-desc']}>
                  Best for non-urgent questions or if you&rsquo;d like time to think about what to say.
                </div>
                <span className={styles['kbc-contact-option-cta']}>Open email →</span>
              </a>

              <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '').replace(/^/, '+1')}`} className={styles['kbc-contact-alt-card']}>
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path d="M13 6 L17 6 L19.5 13 L16.5 16.5 C18.2 20, 20.5 22.5, 24 24 L27.5 21 L34 23.5 L34 28 C34 29.8, 32.5 31, 30.5 31 C18.5 31, 9 21.5, 9 9.5 C9 7.5, 11 6, 13 6 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>Call or Text</div>
                <div className={styles['kbc-contact-option-value']}>{CONTACT_PHONE}</div>
                <div className={styles['kbc-contact-option-desc']}>
                  Prefer to talk it through? Call or send a text during business hours.
                </div>
                <span className={styles['kbc-contact-option-cta']}>Call now →</span>
              </a>

              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={styles['kbc-contact-alt-card']}>
                <div className={styles['kbc-contact-option-icon']}>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path d="M20 5 C13 5, 8 11, 8 17 C8 26, 20 35, 20 35 C20 35, 32 26, 32 17 C32 11, 27 5, 20 5 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <circle cx="20" cy="17" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className={styles['kbc-contact-option-label']}>Get Directions</div>
                <div className={styles['kbc-contact-option-value']}>
                  {OFFICE_ADDRESS_LINE_1}<br />{OFFICE_ADDRESS_LINE_2}
                </div>
                <div className={styles['kbc-contact-option-desc']}>
                  In-person sessions available Monday through Thursday in Fort Thomas.
                </div>
                <span className={styles['kbc-contact-option-cta']}>Open in Maps →</span>
              </a>

            </div>
          </div>
        </section>

        {/* Office & Map */}
        <section className={styles['kbc-contact-location-section']}>
          <div className={styles['kbc-contact-location-inner']}>
            <div className={styles['kbc-contact-location-grid']}>
              <div>
                <div className={styles['kbc-eyebrow']}>Office Location</div>
                <h2 className={styles['kbc-page-h2']}>
                  {OFFICE_ADDRESS_LINE_1}<br />{OFFICE_ADDRESS_LINE_2}
                </h2>
                <p className={styles['kbc-body']}>
                  In-person sessions available Monday through Thursday.
                  Telehealth available throughout Kentucky and Ohio.
                </p>
                <details className={styles['kbc-contact-directions-details']} style={{ marginTop: '28px' }}>
                  <summary className={styles['kbc-contact-directions-summary']}>
                    Directions &amp; Parking
                  </summary>
                  <div style={{ marginTop: '20px' }}>
                    <div className={styles['kbc-location-label']}>Finding the Office</div>
                    <ul className={styles['kbc-location-list']}>
                      {FINDING_THE_OFFICE.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className={styles['kbc-location-label']} style={{ marginTop: '20px' }}>Parking</div>
                    <ul className={styles['kbc-location-list']}>
                      {PARKING.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </details>
                <div style={{ marginTop: '28px' }}>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={styles['kbc-pill']}
                  >
                    Get Directions
                  </a>
                </div>
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
