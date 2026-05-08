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
    price: '$165',
    duration: '50 minutes',
    overview:
      'Individual therapy provides a private, confidential space to explore what is happening in your life, your relationships, and your inner world. Sessions are typically weekly and draw on approaches rooted in CBT, ACT, and relational therapy.',
    whoFor:
      'Individual therapy may be helpful for adults navigating anxiety, stress, life transitions, grief, burnout, relationship patterns, or questions of identity and purpose.',
    whatToExpect:
      'Sessions are conversational and held at your pace. Kelly will ask questions, reflect patterns back, and offer perspective — not to give advice, but to help you see more clearly.',
    concerns: [
      'Anxiety & stress',
      'Burnout',
      'Grief and loss',
      'Life transitions',
      'Relationship patterns',
      'Self-worth & identity',
      'Emotional regulation',
      'Depression',
    ],
  },
  {
    num: '02',
    title: 'Couples Therapy',
    price: '$195',
    duration: '50 minutes',
    overview:
      'Couples therapy focuses on the relationship between two people — the patterns, the communication, the connection, and the conflict. Sessions are held with both partners and use emotionally focused approaches to strengthen the relationship.',
    whoFor:
      'Couples therapy may be helpful for partners experiencing communication breakdown, recurring conflict, disconnection, trust concerns, or difficulty navigating a significant life change together.',
    whatToExpect:
      'Both partners are present in every session. Kelly works to create a space where both people feel heard, and where the conversation can go somewhere new.',
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
    price: '$210',
    duration: '60 minutes',
    overview:
      'Family therapy sessions can include parents and children, siblings, or any family configuration that is relevant. Structure and pace adapt to who is in the room and what the family needs.',
    whoFor:
      'Family therapy may be helpful for families navigating conflict, communication difficulties, parenting challenges, life transitions, or relational ruptures.',
    whatToExpect:
      'Sessions are adapted to who attends and what is most pressing. Expectations are set at the start and revisited as the work evolves.',
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
        <section className={styles['kbc-page-hero']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Services</SectionEyebrow>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '20ch' }}>
              Therapy for individuals, couples, and families.
            </h1>
            <p className={styles['kbc-body']}>
              Kelly Baker Curry, MSW, MEd, LCSW offers individual, couples,
              and family therapy in Fort Thomas, Kentucky, and via telehealth
              throughout Kentucky and Ohio.
            </p>
          </div>
        </section>

        {SERVICES.map((service, i) => (
          <div
            key={service.num}
            className={`${styles['kbc-service-section']} ${i % 2 === 1 ? styles['kbc-service-section-alt'] : ''}`}
          >
            <div className={styles['kbc-service-section-inner']}>
              <SectionEyebrow>{service.num}</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>{service.title}</h2>
              <div className={styles['kbc-service-section-price']}>
                {service.price} &mdash; {service.duration}
              </div>
              <p className={styles['kbc-body']} style={{ marginTop: '20px' }}>
                {service.overview}
              </p>

              <div className={styles['kbc-service-section-grid']}>
                <div>
                  <div className={styles['kbc-service-reasons-label']} style={{ marginBottom: '10px' }}>
                    Who it&rsquo;s for
                  </div>
                  <p className={styles['kbc-service-section-sub']}>{service.whoFor}</p>

                  <div className={styles['kbc-service-reasons-label']} style={{ marginTop: '24px', marginBottom: '10px' }}>
                    What to expect
                  </div>
                  <p className={styles['kbc-service-section-sub']}>{service.whatToExpect}</p>
                </div>
                <div>
                  <div className={styles['kbc-service-reasons-label']} style={{ marginBottom: '10px' }}>
                    Common concerns
                  </div>
                  <ul className={styles['kbc-service-concerns-list']}>
                    {service.concerns.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
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
