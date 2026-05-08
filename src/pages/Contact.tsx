'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import Contact from '../components/Contact';
import {
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  OFFICE_ADDRESS_LINE_1,
  OFFICE_ADDRESS_LINE_2,
} from '../utils/contact';
import styles from '../styles/Website.module.css';

const FINDING_THE_OFFICE = [
  'Located in Watch Point in Fort Thomas',
  'After entering, pass the speed bump',
  'Take the first driveway immediately after the speed bump',
  'Long driveway leading up to the house at the top',
];

const PARKING = [
  'Park at the bottom of the driveway',
  'Do not drive to the top',
  'Text upon arrival',
];

export default function ContactPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-contact-page']}>

        {/* Hero */}
        <section className={styles['kbc-contact-page-hero']}>
          <div className={styles['kbc-contact-page-inner']}>
            <div className={styles['kbc-eyebrow']}>Contact</div>
            <h1 className={styles['kbc-h1']}>Get in Touch</h1>
            <p className={styles['kbc-body']}>
              Reaching out can feel like a big step, and you do not need to
              have everything figured out. Whether you have a question or are
              ready to get started, you are welcome to reach out.
            </p>
          </div>
        </section>

        {/* Multi-step contact form */}
        <Contact />

        {/* Office location */}
        <section className={styles['kbc-contact-page-section']}>
          <div className={styles['kbc-contact-page-grid']}>
            <div>
              <h2 className={styles['kbc-h2']}>Office Location</h2>
              <p className={styles['kbc-location-address']} style={{ marginTop: '16px' }}>
                {OFFICE_ADDRESS_LINE_1}
                <br />
                {OFFICE_ADDRESS_LINE_2}
              </p>
              <div style={{ marginTop: '12px' }}>
                <div className={styles['kbc-location-label']}>Hours</div>
                <p className={styles['kbc-location-address']}>
                  Mon – Thu, 9am – 6pm (in-person)
                  <br />
                  Friday (virtual sessions)
                </p>
              </div>
              <div className={styles['kbc-contact-page-actions']}>
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
        </section>

        {/* Directions — collapsible */}
        <section className={styles['kbc-contact-page-section']} style={{ paddingTop: '0' }}>
          <details className={styles['kbc-contact-directions-details']}>
            <summary className={styles['kbc-contact-directions-summary']}>
              Directions &amp; Parking
            </summary>
            <div className={styles['kbc-contact-page-grid']} style={{ marginTop: '28px' }}>
              <div>
                <div className={styles['kbc-location-label']}>Finding the Office</div>
                <ul className={styles['kbc-location-list']}>
                  {FINDING_THE_OFFICE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className={styles['kbc-location-label']}>Parking</div>
                <ul className={styles['kbc-location-list']}>
                  {PARKING.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
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
