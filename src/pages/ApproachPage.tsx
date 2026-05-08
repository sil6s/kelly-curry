'use client';

import { useState } from 'react';
import Image from 'next/image';
import therapyStock from '../assets/images/therapy-stock.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

const METHODS = [
  {
    title: 'Cognitive Behavioral Therapy (CBT)',
    body: 'CBT helps identify the connection between thoughts, feelings, and behaviors. It offers practical tools to interrupt unhelpful patterns and build new ways of responding to difficulty.',
  },
  {
    title: 'Acceptance and Commitment Therapy (ACT)',
    body: 'ACT focuses on building psychological flexibility — learning to hold difficult thoughts and feelings with more ease, while moving toward what matters most in your life.',
  },
  {
    title: 'Emotionally Focused Therapy (EFT)',
    body: 'EFT focuses on the emotional bonds in relationships — especially for couples and families. It helps identify attachment patterns and create more secure, connected ways of relating.',
  },
  {
    title: 'Relational and Integrative Practice',
    body: 'Kelly draws on multiple evidence-based approaches based on what each person or relationship needs. The therapeutic relationship itself is a core part of how change happens.',
  },
];

const FORMAT_SECTIONS = [
  {
    heading: 'With individuals',
    body: 'Individual sessions focus on understanding how past experiences, relationships, and patterns show up in your current life. The work is collaborative, grounded in curiosity and respect for your pace. Sessions are typically weekly.',
  },
  {
    heading: 'With couples',
    body: 'Couples sessions are held with both partners present. The focus is on the relationship — not taking sides. Kelly works to create a space where both people feel heard and where the conversation can go somewhere new.',
  },
  {
    heading: 'With families',
    body: 'Family sessions adapt to who is in the room and what is needed. Configurations vary — parents together, a parent and child, or the whole family. Structure and expectations are set at the start and revisited as the work evolves.',
  },
];

export default function ApproachPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-page']}>

        {/* Hero */}
        <section className={styles['kbc-page-hero']}>
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

        {/* Photo band */}
        <div className={styles['kbc-page-photo-band']}>
          <Image
            src={therapyStock}
            alt="A calm therapy setting"
            className={styles['kbc-page-photo-band-img']}
            placeholder="blur"
            sizes="100vw"
          />
        </div>

        {/* What sessions feel like */}
        <div className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>The Experience</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>What sessions feel like.</h2>
            <p className={styles['kbc-body']} style={{ marginTop: '20px' }}>
              Sessions are conversational, honest, and held at a pace that feels
              safe. There is no checklist or script. The work develops around
              your story, your patterns, and what you are ready to explore.
            </p>
            <p className={styles['kbc-body']}>
              Kelly brings warmth and directness into the room. She will ask
              questions, reflect patterns back, and offer perspective — not to
              give advice, but to help you see more clearly. Silence is
              welcomed. So is not knowing where to start.
            </p>
          </div>
        </div>

        {/* How Kelly works */}
        <div>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>How Kelly Works</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>Tailored to who is in the room.</h2>
            <div className={styles['kbc-approach-format-list']}>
              {FORMAT_SECTIONS.map((s) => (
                <div key={s.heading} className={styles['kbc-approach-format-item']}>
                  <h3 className={styles['kbc-approach-subhead']}>{s.heading}</h3>
                  <p className={styles['kbc-body']}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Core Principles</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>What guides the work.</h2>
            <div className={styles['kbc-approach-cards']}>
              <div className={styles['kbc-approach-card']}>
                <div className={styles['kbc-approach-card-title']}>Relationship-centered care</div>
                <div className={styles['kbc-approach-card-body']}>Sessions are grounded in the therapeutic relationship. Safety and trust come before anything else.</div>
              </div>
              <div className={styles['kbc-approach-card']}>
                <div className={styles['kbc-approach-card-title']}>Honest, compassionate conversations</div>
                <div className={styles['kbc-approach-card-body']}>Direct, warm dialogue that meets you where you are — without judgment, without a script.</div>
              </div>
              <div className={styles['kbc-approach-card']}>
                <div className={styles['kbc-approach-card-title']}>Practical support for change</div>
                <div className={styles['kbc-approach-card-body']}>Real tools alongside deeper insight, building healthier ways of relating and responding.</div>
              </div>
              <div className={styles['kbc-approach-card']}>
                <div className={styles['kbc-approach-card-title']}>A pace that respects your story</div>
                <div className={styles['kbc-approach-card-body']}>No predetermined timeline. The work moves at a pace that feels safe and meaningful to you.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Methods — 4 cards, even grid */}
        <div className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Methods</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>Therapeutic approaches used.</h2>
            <div className={styles['kbc-approach-method-grid']}>
              {METHODS.map((m) => (
                <div key={m.title} className={styles['kbc-approach-method-card']}>
                  <div className={styles['kbc-approach-method-title']}>{m.title}</div>
                  <p className={styles['kbc-approach-method-body']}>{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles['kbc-page-cta-section']}>
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>Ready to take the first step?</h2>
          <p className={styles['kbc-body']}>
            You do not need to have it all figured out. Reach out and Kelly
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
