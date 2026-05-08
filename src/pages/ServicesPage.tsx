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
    billingNote: 'per session',
    overview:
      'Individual therapy provides a private, confidential space to explore what is happening in your life, your relationships, and your inner world. Sessions are typically weekly and draw on approaches rooted in CBT, ACT, and relational therapy.',
    whoFor: [
      'Adults navigating anxiety, grief, stress, burnout, or major life transitions.',
      'People noticing repeating relationship patterns or wanting deeper self-understanding.',
      'Clients who want a steady, honest space to reflect and make meaningful change.',
    ],
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
    whatToExpect: [
      'A conversational pace that begins with what feels most important now.',
      'Reflection on patterns, emotions, relationships, and choices without judgment.',
      'Practical support alongside deeper insight when tools or next steps are helpful.',
    ],
    approach: [
      'Grounded in CBT, ACT, and relational therapy.',
      'Collaborative goal-setting that can evolve as the work deepens.',
      'Attention to both immediate relief and long-term self-understanding.',
    ],
  },
  {
    num: '02',
    title: 'Couples Therapy',
    price: '$195',
    duration: '50 minutes',
    billingNote: 'per session',
    payOnly: 'Cash pay only',
    overview:
      'Couples therapy focuses on the relationship between two people — the patterns, the communication, the connection, and the conflict. Sessions are held with both partners and use emotionally focused approaches to strengthen the relationship.',
    whoFor: [
      'Partners feeling stuck in recurring conflict or emotional distance.',
      'Couples navigating a transition, repair after hurt, or questions about commitment.',
      'Partners who want help slowing the conversation down enough to hear each other.',
    ],
    concerns: [
      'Communication patterns',
      'Recurring conflict',
      'Trust and intimacy',
      'Disconnection',
      'Navigating transitions',
      'Premarital support',
    ],
    whatToExpect: [
      'Both partners are present and supported in naming their experience clearly.',
      'Sessions look for the cycle underneath conflict, not a person to blame.',
      'The work focuses on creating conversations that can move somewhere new.',
    ],
    approach: [
      'Emotionally focused, attachment-informed relationship work.',
      'Attention to communication, repair, boundaries, and emotional safety.',
      'A balanced structure where both voices matter and both people are invited in.',
    ],
  },
  {
    num: '03',
    title: 'Family Therapy',
    price: '$210',
    duration: '60 minutes',
    billingNote: 'per session',
    payOnly: 'Cash pay only',
    overview:
      'Family therapy sessions can include parents and children, siblings, or any family configuration that is relevant. Structure and pace adapt to who is in the room and what the family needs.',
    whoFor: [
      'Families navigating conflict, communication difficulty, or relational rupture.',
      'Parents and children needing support around transitions, boundaries, or expectations.',
      'Family members who want help understanding patterns without escalating blame.',
    ],
    concerns: [
      'Family conflict',
      'Parenting dynamics',
      'Communication',
      'Boundaries',
      'Life transitions',
      'Sibling dynamics',
    ],
    whatToExpect: [
      'Sessions begin by clarifying who needs to be involved and what feels most pressing.',
      'Expectations are set early and revisited as the work evolves.',
      'The pace is structured enough to feel contained while allowing honest conversation.',
    ],
    approach: [
      'Systems-informed work that looks at patterns across the family, not one problem person.',
      'Practical support for communication, boundaries, repair, and shared expectations.',
      'Flexible session structure based on age, family configuration, and goals.',
    ],
  },
];

type Service = (typeof SERVICES)[number];

type ServiceCardProps = {
  title: string;
  items: string[];
};

function ServiceContentCard({ title, items }: ServiceCardProps) {
  return (
    <div className={styles['kbc-service-content-card']}>
      <h3 className={styles['kbc-service-content-title']}>{title}</h3>
      <ul className={styles['kbc-service-card-list']}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ServicePricingCard({ service }: { service: Service }) {
  return (
    <div className={styles['kbc-service-pricing-card']}>
      <div className={styles['kbc-service-pricing-amount']}>
        {service.price}
      </div>
      <div className={styles['kbc-service-pricing-meta']}>
        <span>{service.duration}</span>
        <span>{service.billingNote}</span>
      </div>
      {service.payOnly ? (
        <div className={styles['kbc-service-pay-label']}>{service.payOnly}</div>
      ) : null}
    </div>
  );
}

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
              Kelly Baker Curry, MSW, MEd, LCSW offers individual, couples, and
              family therapy in Fort Thomas, Kentucky, and via telehealth
              throughout Kentucky and Ohio.
            </p>
          </div>
        </section>

        {SERVICES.map((service, i) => (
          <section
            key={service.num}
            className={`${styles['kbc-service-section']} ${i % 2 === 1 ? styles['kbc-service-section-alt'] : ''}`}
          >
            <div className={styles['kbc-service-section-inner']}>
              <div className={styles['kbc-service-section-head']}>
                <div>
                  <SectionEyebrow>{service.num}</SectionEyebrow>
                  <h2 className={styles['kbc-page-h2']}>{service.title}</h2>
                  <p
                    className={styles['kbc-body']}
                    style={{ marginTop: '20px' }}
                  >
                    {service.overview}
                  </p>
                </div>
                <ServicePricingCard service={service} />
              </div>

              <div className={styles['kbc-service-card-grid']}>
                <ServiceContentCard
                  title="Who this is for"
                  items={service.whoFor}
                />
                <ServiceContentCard
                  title="Common concerns"
                  items={service.concerns}
                />
                <ServiceContentCard
                  title="What to expect"
                  items={service.whatToExpect}
                />
                <ServiceContentCard title="Approach" items={service.approach} />
              </div>

              <div className={styles['kbc-service-actions']}>
                <button
                  type="button"
                  className={styles['kbc-pill']}
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Schedule a Consultation
                </button>
                <a href="/contact" className={styles['kbc-link-quiet']}>
                  Reach out here
                </a>
                <a
                  href="/patient-resources#fees-payment"
                  className={styles['kbc-link-quiet']}
                >
                  View fees &amp; insurance
                </a>
              </div>
            </div>
          </section>
        ))}
        <div className={styles['kbc-page-cta-section']}>
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>Ready to take the first step?</h2>
          <p className={styles['kbc-body']}>
            You do not need to have everything figured out. Reach out and Kelly
            will follow up about fit, availability, and next steps.
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
