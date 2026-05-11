'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ConsultationModal from '../components/ConsultationModal';
import { SectionEyebrow } from '../components/Atoms';
import { breadcrumbSchema, faqSchema, SITE_URL } from '../data/seo';
import styles from '../styles/Website.module.css';

const PAGE_NAV = [
  { label: 'What sessions feel like', href: '#sessions' },
  { label: 'Who Kelly works with', href: '#who' },
  { label: 'Therapeutic approaches', href: '#tools' },
  { label: 'What to expect', href: '#begin' },
  { label: 'FAQs', href: '#faq' },
];

const FIT_ITEMS = [
  'You want a therapist who is warm but direct.',
  'You appreciate honest reflection, not just passive listening.',
  'You want to understand patterns in your relationships and emotions.',
  'You are navigating anxiety, grief, trauma, conflict, or transition.',
  'You want therapy that feels practical, thoughtful, and grounded in real life.',
  'You do not need someone to rush you, but you do want the work to move somewhere.',
];

const SESSION_RHYTHM = [
  {
    title: 'Start with what feels most present',
    body: 'You begin with what is happening now: stress, conflict, grief, anxiety, disconnection, or uncertainty.',
  },
  {
    title: 'Notice patterns',
    body: 'Together, you explore recurring emotions, relationship dynamics, beliefs, and reactions.',
  },
  {
    title: 'Make meaning',
    body: 'Kelly helps connect the dots between your current experiences and the larger story around them.',
  },
  {
    title: 'Practice change',
    body: 'The work may include reflection, communication tools, boundaries, coping strategies, or new ways of responding.',
  },
];

const AUDIENCES = [
  {
    id: 'individuals',
    tab: 'Individuals',
    title: 'Individual Therapy',
    href: '/services/individual-therapy',
    cta: 'Learn about individual therapy',
    brings:
      'People may come in with anxiety, depression, grief, trauma, identity questions, relationship patterns, or major life transitions.',
    helps:
      'Kelly helps clients slow down, understand what feels stuck, and build practical ways to respond to stress, emotion, and self-criticism.',
    focus:
      'The work may focus on self-understanding, emotional regulation, boundaries, values, grief, trauma, and the relationship patterns that shape daily life.',
    tags: ['Anxiety', 'Grief', 'Trauma', 'Life transitions', 'Self-criticism'],
  },
  {
    id: 'couples',
    tab: 'Couples',
    title: 'Couples Therapy',
    href: '/services/couples-therapy',
    cta: 'Learn about couples therapy',
    brings:
      'Couples may come in feeling disconnected, defensive, unheard, or caught in the same arguments.',
    helps:
      'Kelly helps partners slow the pattern, understand what is underneath the conflict, and rebuild communication with more honesty and care.',
    focus:
      'The work may focus on trust, conflict cycles, emotional safety, repair, communication, and the needs that can be hard to name in the moment.',
    tags: ['Relationship stress', 'Conflict', 'Trust', 'Communication', 'Repair'],
  },
  {
    id: 'families',
    tab: 'Families',
    title: 'Family Therapy',
    href: '/services/family-therapy',
    cta: 'Learn about family therapy',
    brings:
      'Families may come in during periods of conflict, transition, stress, parenting strain, or disconnection.',
    helps:
      "Kelly helps family members communicate more clearly, reduce defensiveness, and better understand one another's needs.",
    focus:
      'The work may focus on roles, boundaries, transition, parenting stress, communication patterns, and ways to reconnect without making one person the problem.',
    tags: ['Family conflict', 'Parenting stress', 'Transitions', 'Boundaries', 'Reconnection'],
  },
  {
    id: 'coparenting',
    tab: 'Coparenting',
    title: 'Coparenting Therapy',
    href: '/services/coparenting-therapy',
    cta: 'Learn about coparenting therapy',
    brings:
      'Co-parents may come in needing steadier communication, clearer boundaries, or support navigating decisions after separation, divorce, or family change.',
    helps:
      'Kelly helps co-parents slow reactive patterns, keep the focus on practical coordination, and communicate with more clarity and less escalation.',
    focus:
      'The work may focus on boundaries, decision-making, parenting communication, transitions between households, and reducing conflict around shared responsibilities.',
    tags: ['Coparenting', 'Boundaries', 'Shared decisions', 'Parenting communication', 'Transition'],
  },
];

const TOOLS = [
  {
    title: 'Cognitive Behavioral Therapy, CBT',
    plain:
      'CBT helps clients notice how thoughts, emotions, behaviors, and stress responses influence each other.',
    helpfulFor: ['Anxiety', 'Depression', 'Self-criticism', 'Recurring patterns'],
    inSession:
      'You might identify thought patterns, test assumptions, or practice new responses.',
  },
  {
    title: 'Acceptance and Commitment Therapy, ACT',
    plain:
      'ACT helps clients make room for difficult emotions while moving toward choices that reflect their values.',
    helpfulFor: ['Avoidance', 'Anxiety', 'Grief', 'Stuckness', 'Life transitions'],
    inSession:
      'You might clarify what matters, notice avoidance patterns, and practice responding differently.',
  },
  {
    title: 'Emotionally Focused Therapy, EFT',
    plain:
      'EFT helps individuals, couples, and families understand emotional patterns and attachment needs.',
    helpfulFor: ['Couples conflict', 'Disconnection', 'Trust', 'Emotional reactivity'],
    inSession:
      'You might slow down a conflict cycle and name the softer emotions underneath.',
  },
  {
    title: 'Relational and Cognitive Processing',
    plain:
      'This work explores how past experiences, relationships, beliefs, and trauma shape how clients see themselves and relate to others.',
    helpfulFor: ['Trauma', 'Grief', 'Relationship patterns', 'Identity', 'Family history'],
    inSession:
      'You might connect past experiences to present reactions and begin creating new meaning.',
  },
];

const GUIDES = [
  {
    title: 'Relationship first',
    body: 'Therapy works best when there is trust. Kelly prioritizes a relationship where clients feel respected, understood, and safe enough to be honest.',
  },
  {
    title: 'Warm directness',
    body: 'Kelly is compassionate, but she does not rely on vague or surface-level therapy. She helps clients name patterns clearly and thoughtfully.',
  },
  {
    title: 'Real-life support',
    body: 'Insight matters, but so does daily life. The work may include communication tools, boundaries, emotional regulation, and decision-making support.',
  },
  {
    title: 'Respect for pace',
    body: 'Therapy should not feel forced. Kelly works at a pace that allows safety, reflection, and meaningful movement.',
  },
];

const BEGIN_STEPS = [
  {
    title: 'Reach out',
    body: 'You contact Kelly and share a little about what you are looking for.',
  },
  {
    title: 'Talk through fit',
    body: 'Kelly follows up about availability, needs, and whether her approach feels aligned.',
  },
  {
    title: 'Begin sessions',
    body: 'The first sessions focus on what brings you in, what feels most urgent, and what you hope may change.',
  },
  {
    title: 'Build direction',
    body: 'Over time, the work becomes more focused as patterns, goals, and next steps become clearer.',
  },
];

const RESEARCH_CARDS = [
  {
    title: 'Therapeutic relationship',
    body: 'Trust and fit matter. Research consistently points to the therapeutic relationship as a strong factor in effective therapy.',
  },
  {
    title: 'Shared goals',
    body: 'Therapy tends to work best when client and therapist understand the goals, revisit direction, and adjust the work as needed.',
  },
  {
    title: 'Evidence-informed methods',
    body: 'Approaches like CBT, ACT, and EFT can help clients understand patterns, build skills, and work through emotional distress.',
  },
];

const START_OPTIONS = [
  {
    title: 'I am looking for support for myself.',
    href: '/services/individual-therapy',
  },
  {
    title: 'My relationship needs help.',
    href: '/services/couples-therapy',
  },
  {
    title: 'My family is navigating conflict or transition.',
    href: '/services/family-therapy',
  },
  {
    title: 'I need help with coparenting.',
    href: '/services/coparenting-therapy',
  },
  {
    title: 'I am not sure yet.',
    href: '/contact',
  },
];

const FAQS = [
  {
    question: "Is Kelly's style more direct or reflective?",
    answer:
      'Both. Kelly is thoughtful and reflective, and she is also direct when it helps clients notice patterns, clarify emotions, or move the work forward.',
  },
  {
    question: 'Do I need to know what type of therapy I need?',
    answer:
      'No. You do not need to know whether CBT, ACT, EFT, individual therapy, couples therapy, family therapy, or coparenting therapy is the right fit before reaching out.',
  },
  {
    question: 'Does Kelly work with individuals, couples, families, and co-parents?',
    answer:
      'Yes. Kelly works with individuals, couples, families, and co-parents, tailoring the work to who is in the room and what kind of support is needed.',
  },
  {
    question: 'What issues does Kelly commonly support?',
    answer:
      'Kelly commonly supports anxiety, grief, trauma, depression, relationship stress, family conflict, life transitions, trust-building, and communication repair.',
  },
  {
    question: 'Is therapy available in Kentucky and Ohio?',
    answer:
      'Kelly is licensed in Kentucky and Ohio. Therapy options depend on fit, availability, and location.',
  },
  {
    question: 'What happens after I reach out?',
    answer:
      'Kelly will follow up about fit, availability, fees, and next steps so you can decide whether beginning therapy feels right.',
  },
];

export default function ApproachPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState(AUDIENCES[0].id);
  const selectedAudience =
    AUDIENCES.find((audience) => audience.id === activeAudience) ?? AUDIENCES[0];

  return (
    <>
      <Header onRequestConsultation={() => setIsConsultationOpen(true)} />
      <main className={styles['kbc-page']}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              faqSchema(FAQS),
              breadcrumbSchema([
                { name: 'Home', url: SITE_URL },
                { name: 'Approach', url: `${SITE_URL}/approach` },
              ]),
            ]).replace(/</g, '\\u003c'),
          }}
        />
        <section
          className={`${styles['kbc-page-hero']} ${styles['kbc-approach-hero-clean']} ${styles['kbc-approach-journey-hero']}`}
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
            <div className={styles['kbc-approach-hero-grid']}>
              <div>
                <SectionEyebrow>Approach</SectionEyebrow>
                <h1 className={styles['kbc-h1']} style={{ maxWidth: '18ch' }}>
                  Therapy rooted in relationship.
                </h1>
                <p className={styles['kbc-body']}>
                  Kelly&rsquo;s approach is calm, direct, and collaborative.
                  Sessions are grounded in trust, honesty, and practical support
                  so clients can better understand patterns, repair
                  relationships, and move through emotional challenges with more
                  clarity. For people looking for a therapist in Fort Thomas KY
                  or therapy in Kentucky and Ohio, this page explains what the
                  work with Kelly can feel like.
                </p>
                <div className={styles['kbc-hero-actions']}>
                  <button
                    type="button"
                    className={styles['kbc-pill']}
                    onClick={() => setIsConsultationOpen(true)}
                  >
                    Schedule a Consultation
                  </button>
                  <a href="#sessions" className={styles['kbc-link-quiet']}>
                    See How Therapy Works
                  </a>
                </div>
              </div>
              <nav
                className={styles['kbc-approach-mini-nav']}
                aria-label="What this page covers"
              >
                <div className={styles['kbc-mini-nav-label']}>
                  What this page covers
                </div>
                {PAGE_NAV.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']} id="fit">
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Fit</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Kelly&rsquo;s approach may be a good fit if...
            </h2>
            <div className={styles['kbc-fit-check-grid']}>
              {FIT_ITEMS.map((item) => (
                <div key={item} className={styles['kbc-fit-check-card']}>
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className={styles['kbc-quiet-cta-card']}>
              <p>
                You do not need to know exactly what kind of therapy you need
                before reaching out. The first step is simply a conversation.
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

        <section
          className={styles['kbc-page-section-wrap-linen']}
          id="sessions"
        >
          <div className={styles['kbc-page-section']}>
            <div className={styles['kbc-guided-split']}>
              <div>
                <SectionEyebrow>The Experience</SectionEyebrow>
                <h2 className={styles['kbc-page-h2']}>
                  What sessions feel like.
                </h2>
                <p className={styles['kbc-body']}>
                  Sessions with Kelly are conversational, honest, and focused on
                  what is actually happening in your life. She creates space for
                  reflection, but she is not passive. She may ask direct
                  questions, notice patterns, and help connect present struggles
                  with past experiences, relationships, and beliefs.
                </p>
              </div>
              <div className={styles['kbc-session-rhythm']}>
                <h3>A typical rhythm of the work</h3>
                <div className={styles['kbc-timeline-grid']}>
                  {SESSION_RHYTHM.map((step, index) => (
                    <div key={step.title} className={styles['kbc-timeline-card']}>
                      <div className={styles['kbc-timeline-number']}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4>{step.title}</h4>
                      <p>{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']} id="who">
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Who Kelly Works With</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Tailored to who is in the room.
            </h2>

            <div className={styles['kbc-audience-tabs']}>
              <div className={styles['kbc-tab-list']} role="tablist">
                {AUDIENCES.map((audience) => (
                  <button
                    key={audience.id}
                    type="button"
                    role="tab"
                    aria-selected={activeAudience === audience.id}
                    aria-controls={`panel-${audience.id}`}
                    id={`tab-${audience.id}`}
                    className={
                      activeAudience === audience.id
                        ? styles['kbc-tab-active']
                        : ''
                    }
                    onClick={() => setActiveAudience(audience.id)}
                  >
                    {audience.tab}
                  </button>
                ))}
              </div>
              <div
                className={styles['kbc-audience-panel']}
                role="tabpanel"
                id={`panel-${selectedAudience.id}`}
                aria-labelledby={`tab-${selectedAudience.id}`}
              >
                <div>
                  <h3>{selectedAudience.title}</h3>
                  <div className={styles['kbc-audience-copy-grid']}>
                    <p>
                      <span>People often bring in</span>
                      {selectedAudience.brings}
                    </p>
                    <p>
                      <span>Kelly helps with</span>
                      {selectedAudience.helps}
                    </p>
                    <p>
                      <span>The work may focus on</span>
                      {selectedAudience.focus}
                    </p>
                  </div>
                </div>
                <div>
                  <div className={styles['kbc-tag-cloud']}>
                    {selectedAudience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={selectedAudience.href}
                    className={styles['kbc-link-quiet']}
                  >
                    {selectedAudience.cta}
                  </a>
                </div>
              </div>
            </div>

            <div className={styles['kbc-audience-accordions']}>
              {AUDIENCES.map((audience) => (
                <details key={audience.id} className={styles['kbc-faq-item']}>
                  <summary>{audience.title}</summary>
                  <div className={styles['kbc-audience-mobile-body']}>
                    <p>{audience.brings}</p>
                    <p>{audience.helps}</p>
                    <div className={styles['kbc-tag-cloud']}>
                      {audience.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href={audience.href} className={styles['kbc-link-quiet']}>
                      {audience.cta}
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']} id="tools">
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Therapeutic Tools</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Therapeutic tools Kelly may draw from.
            </h2>
            <p className={styles['kbc-body']}>
              Kelly does not force clients into one rigid model. She draws from
              evidence-informed approaches and adapts the work to the person,
              couple, or family in front of her.
            </p>
            <div className={styles['kbc-tool-accordion-grid']}>
              {TOOLS.map((tool) => (
                <details key={tool.title} className={styles['kbc-tool-card']}>
                  <summary>
                    <span>{tool.title}</span>
                    <small>Open</small>
                  </summary>
                  <div className={styles['kbc-tool-card-body']}>
                    <p>{tool.plain}</p>
                    <div className={styles['kbc-tool-detail']}>
                      <span>Helpful for</span>
                      <div className={styles['kbc-tag-cloud']}>
                        {tool.helpfulFor.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles['kbc-tool-detail']}>
                      <span>What this can look like in session</span>
                      <p>{tool.inSession}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Philosophy</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>What guides the work.</h2>
            <div className={styles['kbc-guide-card-grid']}>
              {GUIDES.map((guide, index) => (
                <div key={guide.title} className={styles['kbc-guide-card']}>
                  <div className={styles['kbc-card-number']} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']} id="begin">
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Starting Therapy</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              What to expect when you begin.
            </h2>
            <div className={styles['kbc-begin-journey']}>
              {BEGIN_STEPS.map((step, index) => (
                <div key={step.title} className={styles['kbc-begin-step']}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
            <div className={styles['kbc-section-link-row']}>
              <button
                type="button"
                className={styles['kbc-pill']}
                onClick={() => setIsConsultationOpen(true)}
              >
                Start with a consultation
              </button>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-split-section']}>
            <div>
              <SectionEyebrow>Research Support</SectionEyebrow>
              <h2 className={styles['kbc-page-h2']}>
                Why relationship matters in therapy.
              </h2>
            </div>
            <div className={styles['kbc-page-copy-stack']}>
              <p className={styles['kbc-body']}>
                Research consistently shows that the relationship between
                therapist and client is one of the strongest factors in
                effective therapy. Evidence-informed methods matter, but so do
                trust, collaboration, shared goals, and the client&rsquo;s sense
                that the work fits their life.
              </p>
              <div className={styles['kbc-research-card-grid']}>
                {RESEARCH_CARDS.map((card) => (
                  <div key={card.title} className={styles['kbc-research-card']}>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
              <div className={styles['kbc-approach-research-links']}>
                <a
                  href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['kbc-link-quiet']}
                >
                  American Psychological Association
                </a>
                <a
                  href="https://www.nimh.nih.gov/health/topics/psychotherapies"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['kbc-link-quiet']}
                >
                  National Institute of Mental Health
                </a>
                <a
                  href="https://www.clevelandclinic.org/health/treatments/9300-cognitive-behavioral-therapy-cbt"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['kbc-link-quiet']}
                >
                  Cleveland Clinic
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Decision Support</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>
              Not sure where to start?
            </h2>
            <p className={styles['kbc-body']}>
              You do not need to know whether you need CBT, ACT, EFT,
              individual therapy, couples therapy, or family therapy before
              reaching out. Many people begin with a general sense that
              something feels heavy, stuck, disconnected, or hard to keep
              carrying alone.
            </p>
            <div className={styles['kbc-start-option-grid']}>
              {START_OPTIONS.map((option) => (
                <a
                  key={option.title}
                  href={option.href}
                  className={styles['kbc-start-option-card']}
                >
                  {option.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['kbc-page-section-wrap']} id="faq">
          <div className={styles['kbc-page-section']}>
            <SectionEyebrow>Questions</SectionEyebrow>
            <h2 className={styles['kbc-page-h2']}>Approach FAQ.</h2>
            <div className={styles['kbc-faq-list']}>
              {FAQS.map((faq) => (
                <details key={faq.question} className={styles['kbc-faq-item']}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
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
