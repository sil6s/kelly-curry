'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

const FORMATS = [
  {
    title: 'Individuals',
    items: [
      'Explore anxiety, grief, stress, identity, and relationship patterns.',
      'Connect present-day reactions with the experiences that shaped them.',
      'Build practical tools while making room for deeper understanding.',
    ],
  },
  {
    title: 'Couples',
    items: [
      'Slow down recurring conflict enough to understand the cycle underneath.',
      'Create space where both partners can speak and be heard.',
      'Work toward repair, trust, communication, and emotional connection.',
    ],
  },
  {
    title: 'Families',
    items: [
      'Clarify roles, boundaries, communication patterns, and expectations.',
      'Adapt the structure based on who is in the room and what is needed.',
      'Support repair without making one person the problem.',
    ],
  },
];

const PRINCIPLES = [
  {
    title: 'Relationship-centered',
    body: 'The therapeutic relationship matters. Safety, trust, and consistency create the conditions for honest work.',
  },
  {
    title: 'Honest, compassionate conversation',
    body: 'Sessions are warm and direct. Kelly helps name what is happening without judgment or a script.',
  },
  {
    title: 'Practical support for change',
    body: 'Insight is paired with concrete tools for communication, emotion regulation, boundaries, and daily life.',
  },
  {
    title: 'Respect for your pace',
    body: 'There is no predetermined timeline. The work moves at a pace that feels safe, useful, and meaningful.',
  },
];

const METHODS = [
  {
    title: 'Cognitive Behavioral Therapy (CBT)',
    body: 'CBT looks at the connection between thoughts, feelings, and behaviors, and offers tools for interrupting unhelpful patterns.',
  },
  {
    title: 'Acceptance and Commitment Therapy (ACT)',
    body: 'ACT builds psychological flexibility — making room for difficult thoughts and feelings while moving toward what matters.',
  },
  {
    title: 'Emotionally Focused Therapy (EFT)',
    body: 'EFT supports couples and families by identifying emotional and attachment patterns that shape connection and conflict.',
  },
  {
    title: 'Relational and Integrative Practice',
    body: 'Kelly draws from evidence-based methods while tailoring the work to the person, relationship, and goals in front of her.',
  },
];

const EARLY_EXPECTATIONS = [
  {
    title: 'First session',
    body: 'The first meeting focuses on what brings you in, what you hope will change, and what support may fit best.',
  },
  {
    title: 'Ongoing sessions',
    body: 'Sessions build on what emerges over time — patterns, relationships, emotions, choices, and practical next steps.',
  },
  {
    title: 'Pace and flexibility',
    body: 'The work can slow down or become more structured depending on what feels useful and safe.',
  },
  {
    title: 'Collaboration',
    body: 'You and Kelly will continue checking in about goals, fit, and whether therapy is moving in a helpful direction.',
  },
];

export default function ApproachPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-page']}>
        <section
          className={`${styles['kbc-page-hero']} ${styles['kbc-approach-hero-clean']}`}
        >
          <div className={styles['kbc-subtle-pattern']} aria-hidden="true">
            <svg viewBox="0 0 420 300" fill="none">
              <path
                d="M28 230C92 176 98 110 166 78C232 46 286 84 360 34"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M74 264C132 216 150 148 208 118C270 86 316 118 392 70"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle
                cx="314"
                cy="198"
                r="56"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>
          </div>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Approach</SectionEyebrow>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '18ch' }}>
              Therapy rooted in relationship.
            </h1>
            <p className={styles['kbc-body']}>
              Kelly&apos;s approach is warm, direct, and relationship-centered.
              The work is grounded in honesty, trust, and a genuine belief that
              understanding your own patterns is the foundation of meaningful
              change.
            </p>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-split-section']}>
            <div>
              <SectionEyebrow>The Experience</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                What sessions feel like.
              </h2>
            </div>
            <div className={styles['kbc-page-copy-stack']}>
              <p className={styles['kbc-body']}>
                Sessions are conversational, honest, and held at a pace that
                feels safe. There is no checklist or script. The work develops
                around your story, your patterns, and what you are ready to
                explore.
              </p>
              <p className={styles['kbc-body']}>
                Kelly brings warmth and directness into the room. She will ask
                questions, reflect patterns back, and offer perspective — not to
                give advice, but to help you see more clearly.
              </p>
              <ul className={styles['kbc-service-card-list']}>
                <li>Conversational and grounded</li>
                <li>Collaborative rather than prescriptive</li>
                <li>Paced to you and what feels workable</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>How Kelly Works</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Tailored to who is in the room.
            </h2>
            <div className={styles['kbc-approach-three-grid']}>
              {FORMATS.map((format) => (
                <div key={format.title} className={styles['kbc-approach-card']}>
                  <div className={styles['kbc-approach-card-title']}>
                    {format.title}
                  </div>
                  <ul className={styles['kbc-service-card-list']}>
                    {format.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Core Principles</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>What guides the work.</h2>
            <div className={styles['kbc-approach-cards']}>
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className={styles['kbc-approach-card']}
                >
                  <div className={styles['kbc-approach-card-title']}>
                    {principle.title}
                  </div>
                  <div className={styles['kbc-approach-card-body']}>
                    {principle.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Methods</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Therapeutic approaches used.
            </h2>
            <div className={styles['kbc-approach-method-grid']}>
              {METHODS.map((method) => (
                <div
                  key={method.title}
                  className={styles['kbc-approach-method-card']}
                >
                  <div className={styles['kbc-approach-method-title']}>
                    {method.title}
                  </div>
                  <p className={styles['kbc-approach-method-body']}>
                    {method.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-split-section']}>
            <div>
              <SectionEyebrow>Research Support</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                What research supports this work.
              </h2>
            </div>
            <div className={styles['kbc-page-copy-stack']}>
              <p className={styles['kbc-body']}>
                Kelly draws from evidence-based approaches including CBT, ACT,
                and EFT. These methods can support change in anxiety, emotional
                patterns, communication, and relationship distress.
              </p>
              <p className={styles['kbc-body']}>
                Research also consistently points to the therapeutic
                relationship itself — trust, collaboration, and fit — as a key
                part of meaningful therapy.
              </p>
              <div className={styles['kbc-approach-research-links']}>
                <a
                  href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['kbc-link-quiet']}
                >
                  Learn more about CBT
                </a>
                <a
                  href="https://contextualscience.org/act"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['kbc-link-quiet']}
                >
                  Learn more about ACT
                </a>
                <a
                  href="https://iceeft.com/what-is-eft/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['kbc-link-quiet']}
                >
                  Learn more about EFT
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Starting Therapy</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>What to expect early on.</h2>
            <div className={styles['kbc-approach-cards']}>
              {EARLY_EXPECTATIONS.map((item) => (
                <div key={item.title} className={styles['kbc-approach-card']}>
                  <div className={styles['kbc-approach-card-title']}>
                    {item.title}
                  </div>
                  <div className={styles['kbc-approach-card-body']}>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles['kbc-page-cta-section']}>
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>Ready to take the first step?</h2>
          <p className={styles['kbc-body']}>
            You do not need to have it all figured out. Reach out and Kelly will
            follow up about fit, availability, and next steps.
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
