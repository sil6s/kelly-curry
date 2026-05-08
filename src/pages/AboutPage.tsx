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
                Licensed Clinical Social Worker with over 13 years of experience
                serving individuals, couples, and families in Kentucky and Ohio.
              </p>
            </div>
            <div className={styles['kbc-about-hero-avatar']}>
              <Image
                src={headshot}
                alt="Kelly Baker Curry, Licensed Clinical Social Worker"
                className={styles['kbc-about-hero-avatar-img']}
                placeholder="blur"
                sizes="120px"
                priority
              />
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
                Kelly brings over 13 years of clinical experience to her work
                with individuals, couples, and families. Her approach is
                grounded in honesty, genuine curiosity, and a deep respect for
                the complexity of people&rsquo;s lives.
              </p>
              <p className={styles['kbc-body']}>
                She believes therapy works best when it feels like a real
                relationship — one built on trust, directness, and a shared
                commitment to the work.
              </p>
              <p className={styles['kbc-body']}>
                Her practice is intentionally small. Every client works directly
                with Kelly — there is no hand-off, no rotating staff. That
                consistency matters to her, and it tends to matter to the people
                she works with too.
              </p>
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
                Health Court — a setting that required meeting people at some of
                the most difficult and complicated moments of their lives.
              </p>
              <p className={styles['kbc-body']}>
                That work deepened her understanding of how trauma, systemic
                stress, and relational rupture intersect, and it reinforced her
                belief that people are capable of meaningful change when they
                feel genuinely supported.
              </p>
              <ul className={styles['kbc-service-card-list']}>
                <li>Experience with anxiety, depression, trauma, and grief.</li>
                <li>Support for couples rebuilding trust and communication.</li>
                <li>Family work around conflict, transition, and repair.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
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
                  Licensed Clinical Social Worker
                </div>

                <div className={styles['kbc-about-license-row']}>
                  <div className={styles['kbc-about-license-state']}>
                    Kentucky
                  </div>
                  <div className={styles['kbc-about-license-detail']}>
                    License #254297
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
                    <span>Compact / Multi-State Eligible</span>
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

        <section className={styles['kbc-page-section-wrap-linen']}>
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
                  <div className={styles['kbc-approach-card-title']}>
                    {card.title}
                  </div>
                  <div className={styles['kbc-approach-card-body']}>
                    {card.body}
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
