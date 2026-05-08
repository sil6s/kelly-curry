'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

const THEMES = [
  'Anxiety & stress',
  'Life transitions',
  'Relationship patterns',
  'Communication',
  'Grief and loss',
  'Burnout',
  'Self-worth & identity',
  'Emotional regulation',
  'Family dynamics',
  'Boundaries',
  'Depression',
  'Identity & purpose',
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
              change is possible.
            </p>
          </div>
        </section>

        {/* What Sessions Feel Like */}
        <div className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>The Experience</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>What sessions feel like.</h2>
            <p className={styles['kbc-body']} style={{ marginTop: '20px' }}>
              Sessions are conversational, honest, and held at a pace that
              feels safe. There is no checklist or script. The work develops
              around your story, your patterns, and what you are ready to
              explore.
            </p>
            <p className={styles['kbc-body']}>
              Kelly brings warmth and directness into the room. She will ask
              questions, reflect patterns back, and offer perspective — not to
              give advice, but to help you see more clearly. Silence is
              welcomed. So is not knowing where to start.
            </p>
          </div>
        </div>

        {/* How Kelly Works */}
        <div>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>How Kelly Works</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Tailored to who is in the room.
            </h2>

            <div style={{ marginTop: '36px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--charcoal)',
                  marginBottom: '12px',
                }}
              >
                With individuals
              </h3>
              <p className={styles['kbc-body']}>
                Individual sessions focus on understanding how past experiences,
                relationships, and patterns show up in your current life. The
                work is collaborative, grounded in curiosity and respect for
                your pace. Sessions are typically weekly.
              </p>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--charcoal)',
                  marginBottom: '12px',
                }}
              >
                With couples
              </h3>
              <p className={styles['kbc-body']}>
                Couples sessions are held with both partners present. The focus
                is on the relationship — not taking sides. Kelly works to create
                a space where both people feel heard and where the conversation
                can go somewhere new.
              </p>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--charcoal)',
                  marginBottom: '12px',
                }}
              >
                With families
              </h3>
              <p className={styles['kbc-body']}>
                Family sessions adapt to who is in the room and what is needed.
                Configurations vary — parents together, a parent and child, or
                the whole family. Structure and expectations are set at the
                start and revisited as the work evolves.
              </p>
            </div>
          </div>
        </div>

        {/* Therapeutic Approaches */}
        <div className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Methods</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Therapeutic approaches used.
            </h2>
            <div className={styles['kbc-approach-method-grid']}>
              <div className={styles['kbc-approach-method-card']}>
                <div className={styles['kbc-approach-method-title']}>
                  Cognitive Behavioral Therapy (CBT)
                </div>
                <p className={styles['kbc-approach-method-body']}>
                  CBT helps identify the connection between thoughts, feelings,
                  and behaviors. It offers practical tools to interrupt unhelpful
                  patterns and build new ways of responding to difficulty.
                </p>
              </div>
              <div className={styles['kbc-approach-method-card']}>
                <div className={styles['kbc-approach-method-title']}>
                  Acceptance and Commitment Therapy (ACT)
                </div>
                <p className={styles['kbc-approach-method-body']}>
                  ACT focuses on building psychological flexibility — learning
                  to hold difficult thoughts and feelings with more ease, while
                  moving toward what matters most in your life.
                </p>
              </div>
              <div className={styles['kbc-approach-method-card']}>
                <div className={styles['kbc-approach-method-title']}>
                  Emotionally Focused Therapy (EFT)
                </div>
                <p className={styles['kbc-approach-method-body']}>
                  EFT focuses on the emotional bonds in relationships —
                  especially for couples and families. It helps identify
                  attachment patterns and create more secure, connected ways
                  of relating.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Themes */}
        <div>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Common Themes</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Topics that often come up in therapy.
            </h2>
            <div
              className={styles['kbc-helpwith-chips']}
              style={{ marginTop: '28px' }}
            >
              {THEMES.map((theme) => (
                <span key={theme} className={styles['kbc-chip']}>
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
            <a href="/contact" className={styles['kbc-link-quiet']} style={{ color: 'rgba(245,240,232,0.78)' }}>
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
