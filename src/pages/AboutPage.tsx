'use client';

import { useState } from 'react';
import Image from 'next/image';
import headshot from '../assets/images/kelly-baker-curry-headshot.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

const APPROACH_CARDS = [
  {
    title: 'Collaborative',
    body: 'Therapy is a shared process. Kelly works with you to understand what matters, what feels stuck, and what kind of support would actually help.',
  },
  {
    title: 'Practical',
    body: 'Sessions can include concrete tools for communication, emotional regulation, and decision-making alongside deeper reflection.',
  },
  {
    title: 'Thoughtful',
    body: 'The work moves with care. Kelly pays attention to patterns, context, and timing so change feels honest rather than forced.',
  },
];

const HERE_BECAUSE = [
  'You feel anxious, overwhelmed, or stuck in your own thoughts.',
  'You are grieving a loss or adjusting to a major life change.',
  'You and your partner keep having the same conversation without resolution.',
  'Your family is navigating conflict, transition, or disconnection.',
  'You want therapy that is honest, grounded, and practical.',
  'You are looking for a therapist in Fort Thomas KY who is licensed in Kentucky and Ohio.',
];

const FOCUS_AREAS = [
  'Anxiety, depression, trauma, and grief',
  'Couples therapy and communication repair',
  'Family conflict, transitions, and reconnection',
  'Relationship stress and trust-building',
  'Therapy for people who appreciate honesty and directness',
];

const SUPPORT_AREAS = [
  {
    title: 'Individual Therapy',
    body: 'Support for anxiety, grief, trauma, depression, self-understanding, and life transitions.',
    href: '/services#individual-therapy',
    cta: 'Learn about individual therapy',
  },
  {
    title: 'Couples Therapy',
    body: 'A space to work through communication patterns, trust, conflict, disconnection, and repair.',
    href: '/services#couples-therapy',
    cta: 'Learn about couples therapy',
  },
  {
    title: 'Family Therapy',
    body: 'Support for families navigating conflict, transition, parenting stress, or relationship strain.',
    href: '/services#family-therapy',
    cta: 'Learn about family therapy',
  },
  {
    title: 'Co-parenting Therapy',
    body: 'Focused support for co-parents who need clearer communication, boundaries, and steadier shared decisions.',
    href: '/services#co-parenting-therapy',
    cta: 'Learn about co-parenting therapy',
  },
];

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-page']}>
        <section
          className={`${styles['kbc-page-hero']} ${styles['kbc-about-hero-clean']}`}
        >
          <div className={styles['kbc-subtle-pattern']} aria-hidden="true">
            <svg viewBox="0 0 420 300" fill="none">
              <path
                d="M36 226C96 176 98 104 166 78C236 52 286 86 364 32"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M76 260C138 208 146 142 204 116C262 90 314 116 390 68"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle
                cx="316"
                cy="196"
                r="58"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>
          </div>
          <div className={styles['kbc-about-hero-inner']}>
            <div className={styles['kbc-about-hero-text']}>
              <SectionEyebrow>About Kelly</SectionEyebrow>
              <h1 className={styles['kbc-h1']} style={{ maxWidth: '18ch' }}>
                Kelly Baker Curry, <em>MSW, MEd, LCSW</em>
              </h1>
              <p className={styles['kbc-body']}>
                Therapy for individuals, couples, families, and co-parents who
                want a calm, honest place to work through anxiety, grief,
                relationship stress, trauma, and life transitions.
              </p>
              <div className={styles['kbc-hero-actions']}>
                <button
                  type="button"
                  className={styles['kbc-pill']}
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Schedule a Consultation
                </button>
                <a href="/services" className={styles['kbc-link-quiet']}>
                  Explore Services
                </a>
              </div>
            </div>
            <div className={styles['kbc-about-hero-portrait']}>
              <div className={styles['kbc-about-hero-avatar']}>
                <Image
                  src={headshot}
                  alt="Kelly Baker Curry, LCSW, therapist serving clients in Kentucky and Ohio"
                  className={styles['kbc-about-hero-avatar-img']}
                  placeholder="blur"
                  sizes="180px"
                  priority
                />
              </div>
              <p className={styles['kbc-about-hero-quote']}>
                &ldquo;My goal is to help you feel understood, not
                judged.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-split-section']}>
            <div>
              <SectionEyebrow>Introduction</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                A calm, honest place to do real work.
              </h2>
            </div>
            <div className={styles['kbc-page-copy-stack']}>
              <p className={styles['kbc-body']}>
                Kelly&rsquo;s approach is grounded in honesty, curiosity, and
                deep respect for the complexity of people&rsquo;s lives.
                Sessions are conversational, direct when helpful, and focused
                on what is actually happening in your relationships, patterns,
                and day-to-day life.
              </p>
              <p className={styles['kbc-body']}>
                Direct does not mean harsh. It means Kelly will help name what
                may be difficult to see alone, slow down repeated patterns, and
                keep the work connected to your real life instead of staying
                vague or overly clinical.
              </p>
              <p className={styles['kbc-body']}>
                Her practice is intentionally small. Every client works directly
                with Kelly — there is no hand-off, no rotating staff. That
                consistency matters to her, and it tends to matter to the people
                she works with too.
              </p>
              <div className={styles['kbc-inline-links']}>
                <a href="/approach" className={styles['kbc-link-quiet']}>
                  Read about Kelly&apos;s approach
                </a>
                <a href="/patient-resources" className={styles['kbc-link-quiet']}>
                  Review patient resources
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Emotional Fit</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              You may be here because...
            </h2>
            <div className={styles['kbc-soft-check-grid']}>
              {HERE_BECAUSE.map((item) => (
                <div key={item} className={styles['kbc-soft-check-item']}>
                  <span aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className={styles['kbc-quiet-cta-card']}>
              <p>
                Not sure where to start? A consultation can help you decide
                whether therapy with Kelly feels like the right fit.
              </p>
              <button
                type="button"
                className={styles['kbc-pill']}
                onClick={() => setIsConsultationOpen(true)}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>My Approach</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              What it&rsquo;s like to work together.
            </h2>
            <p className={styles['kbc-body']}>
              Kelly&rsquo;s style is warm, direct, and attentive. The work is
              structured enough to feel grounded, while leaving room for the
              complexity of real life.
            </p>
            <div className={styles['kbc-about-approach-grid']}>
              {APPROACH_CARDS.map((card) => (
                <div key={card.title} className={styles['kbc-approach-card']}>
                  <h3 className={styles['kbc-approach-card-title']}>
                    {card.title}
                  </h3>
                  <div className={styles['kbc-approach-card-body']}>
                    {card.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-split-section']}>
            <div>
              <SectionEyebrow>Experience</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                A background built in the field.
              </h2>
            </div>
            <div className={styles['kbc-page-copy-stack']}>
              <p className={styles['kbc-body']}>
                Before opening her private practice, Kelly worked in Mental
                Health Court, a setting that required careful attention to
                trauma, accountability, crisis, systemic stress, and the real
                conditions of people&rsquo;s lives.
              </p>
              <p className={styles['kbc-body']}>
                That work deepened her understanding of how meaningful change
                happens when people feel safe enough to be honest. It also
                shaped the grounded, practical way she works with anxiety,
                grief, trauma, relationship stress, and family conflict today.
              </p>
              <ul className={styles['kbc-service-card-list']}>
                {FOCUS_AREAS.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Areas of Support</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Therapy in Kentucky and Ohio.
            </h2>
            <p className={styles['kbc-body']}>
              The About page is often a starting point. These service pages
              explain how Kelly works with individuals, couples, families, and
              co-parents in more detail.
            </p>
            <div className={styles['kbc-support-card-grid']}>
              {SUPPORT_AREAS.map((area) => (
                <a
                  key={area.title}
                  href={area.href}
                  className={styles['kbc-support-card']}
                >
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                  <span>{area.cta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Credentials</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>Licensure &amp; Education</h2>

            <div className={styles['kbc-about-cred-grid']}>
              <div className={styles['kbc-about-cred-card']}>
                <div
                  className={styles['kbc-about-cred-card-icon']}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 8h10M7 12h6" />
                    <circle cx="17" cy="15" r="3" />
                    <path d="M19.5 17.5L22 20" />
                  </svg>
                </div>
                <div className={styles['kbc-about-cred-card-label']}>
                  Licensure
                </div>
                <div className={styles['kbc-about-cred-card-title']}>
                  Licensure
                </div>

                <div className={styles['kbc-about-license-row']}>
                  <div className={styles['kbc-about-license-state']}>
                    Kentucky
                  </div>
                  <div className={styles['kbc-about-license-detail']}>
                    Licensed Clinical Social Worker
                    <span>License #254927</span>
                  </div>
                  <div className={styles['kbc-active-status']}>
                    <span className={styles['kbc-active-dot']} />
                    Active
                  </div>
                </div>

                <div className={styles['kbc-about-license-divider']} />

                <div className={styles['kbc-about-license-row']}>
                  <div className={styles['kbc-about-license-state']}>Ohio</div>
                  <div className={styles['kbc-about-license-detail']}>
                    Licensed Independent Social Worker
                    <span>License #I.2304547</span>
                    <span>Compact / multi-state eligible</span>
                  </div>
                  <div className={styles['kbc-active-status']}>
                    <span className={styles['kbc-active-dot']} />
                    Active
                  </div>
                </div>
              </div>

              <div className={styles['kbc-about-cred-card']}>
                <div
                  className={styles['kbc-about-cred-card-icon']}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className={styles['kbc-about-cred-card-label']}>
                  Education
                </div>
                <div className={styles['kbc-about-cred-card-title']}>
                  Northern Kentucky University
                </div>

                <div className={styles['kbc-about-edu-list']}>
                  <div className={styles['kbc-about-edu-row']}>
                    <div className={styles['kbc-about-edu-degree']}>
                      Master of Social Work
                    </div>
                    <div className={styles['kbc-about-edu-abbr']}>MSW</div>
                  </div>
                  <div className={styles['kbc-about-edu-row']}>
                    <div className={styles['kbc-about-edu-degree']}>
                      Master of Education
                    </div>
                    <div className={styles['kbc-about-edu-abbr']}>MEd</div>
                  </div>
                  <div className={styles['kbc-about-edu-row']}>
                    <div className={styles['kbc-about-edu-degree']}>
                      Bachelor of Arts
                    </div>
                    <div className={styles['kbc-about-edu-abbr']}>BA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles['kbc-page-cta-section']}>
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>Ready to take the first step?</h2>
          <p className={styles['kbc-body']}>
            You do not have to have everything figured out before reaching out.
            Kelly will follow up about fit, availability, and next steps.
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
