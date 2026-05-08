'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

const SERVICES = [
  {
    num: '01',
    title: 'Individual Therapy',
    overview:
      'Individual therapy provides a private, confidential space to explore what is happening in your life, your relationships, and your inner world. Sessions are typically weekly and draw on approaches rooted in CBT, ACT, and relational therapy.',
    who: 'Individual therapy may be helpful for adults navigating anxiety, stress, life transitions, grief, burnout, relationship patterns, or questions of identity and purpose.',
    concerns: [
      'Anxiety & stress',
      'Burnout',
      'Grief and loss',
      'Life transitions',
      'Relationship patterns',
      'Self-worth',
      'Emotional regulation',
      'Depression',
      'Identity & purpose',
    ],
  },
  {
    num: '02',
    title: 'Couples Therapy',
    overview:
      'Couples therapy focuses on the relationship between two people — the patterns, the communication, the connection, and the conflict. Sessions are held with both partners and use emotionally focused approaches to strengthen the relationship.',
    who: 'Couples therapy may be helpful for partners experiencing communication breakdown, recurring conflict, disconnection, trust concerns, or difficulty navigating a significant life change together.',
    concerns: [
      'Communication patterns',
      'Recurring conflict',
      'Trust and intimacy',
      'Disconnection',
      'Navigating transitions',
      'Premarital support',
    ],
  },
  {
    num: '03',
    title: 'Family Therapy',
    overview:
      'Family therapy sessions can include parents and children, siblings, or any family configuration that is relevant. Structure and pace adapt to who is in the room and what the family needs.',
    who: 'Family therapy may be helpful for families navigating conflict, communication difficulties, parenting challenges, life transitions, or relational ruptures.',
    concerns: [
      'Family conflict',
      'Parenting dynamics',
      'Communication',
      'Boundaries',
      'Life transitions',
      'Sibling dynamics',
    ],
  },
];

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-page']}>
        {/* Hero */}
        <section className={styles['kbc-page-hero']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Services</SectionEyebrow>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '20ch' }}>
              Therapy for individuals, couples, and families.
            </h1>
            <p className={styles['kbc-body']}>
              Kelly Baker Curry offers individual, couples, and family therapy
              in Fort Thomas, Kentucky, and via telehealth throughout Kentucky
              and Ohio.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        {SERVICES.map((service) => (
          <div key={service.num} className={styles['kbc-service-section']}>
            <div className={styles['kbc-service-section-inner']}>
              <SectionEyebrow>{service.num}</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>{service.title}</h2>
              <p className={styles['kbc-body']} style={{ marginTop: '20px' }}>
                {service.overview}
              </p>
              <p className={styles['kbc-body']}>{service.who}</p>
              <div style={{ marginTop: '24px' }}>
                <div className={styles['kbc-service-reasons-label']}>
                  Common concerns
                </div>
                <div className={styles['kbc-helpwith-chips']} style={{ marginTop: '12px' }}>
                  {service.concerns.map((c) => (
                    <span key={c} className={styles['kbc-chip']}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: '32px' }}>
                <button
                  type="button"
                  className={styles['kbc-pill']}
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
