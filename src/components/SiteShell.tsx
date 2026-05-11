'use client';

import { useState } from 'react';
import Approach from './Approach';
import ConsultationModal from './ConsultationModal';
import Contact from './Contact';
import CouchBand from './CouchBand';
import Fees from './Fees';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HelpWith from './HelpWith';
import LocationArrival from './LocationArrival';
import MeetKelly from './MeetKelly';
import Office from './Office';
import PatientResourcesPreview from './PatientResourcesPreview';
import ProcessSteps from './ProcessSteps';
import Services from './Services';
import { homeFaq, faqSchema, breadcrumbSchema, SITE_URL } from '../data/seo';
import styles from '../styles/Website.module.css';

export default function SiteShell() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              faqSchema(homeFaq),
              breadcrumbSchema([{ name: 'Home', url: SITE_URL }]),
            ]).replace(/</g, '\\u003c'),
          }}
        />
        <Hero onRequestConsultation={() => setIsConsultationOpen(true)} />
        <MeetKelly />
        <Approach />
        <Services />
        <HelpWith />
        <CouchBand />
        <ProcessSteps
          onRequestConsultation={() => setIsConsultationOpen(true)}
        />
        <PatientResourcesPreview />
        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-inner']}>
            <div className={styles['kbc-eyebrow']}>Questions</div>
            <h2 className={styles['kbc-page-h2']}>
              Questions about beginning therapy.
            </h2>
            <div className={styles['kbc-faq-list']}>
              {homeFaq.map((faq) => (
                <details key={faq.question} className={styles['kbc-faq-item']}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className={styles['kbc-section-link-row']}>
              <a href="/services" className={styles['kbc-pill']}>
                Explore Services
              </a>
              <a href="/contact" className={styles['kbc-link-quiet']}>
                Ask a General Question
              </a>
            </div>
          </div>
        </section>
        <Contact />
        <Fees />
        <Office />
        <LocationArrival
          onRequestConsultation={() => setIsConsultationOpen(true)}
        />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
