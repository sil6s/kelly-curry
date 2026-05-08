import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

function IndividualIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles['kbc-service-icon']}>
      <circle cx="24" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 42 C8 32, 14 27, 24 27 C34 27, 40 32, 40 42" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CouplesIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles['kbc-service-icon']}>
      <circle cx="16" cy="15" r="7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M3 40 C3 32, 8 28, 16 28 C20 28, 23.5 29.5, 26 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="33" cy="15" r="7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M45 40 C45 32, 40 28, 33 28 C29 28, 25.5 29.5, 23 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 34 L24 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles['kbc-service-icon']}>
      <circle cx="14" cy="13" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="34" cy="13" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M2 40 C2 32.5, 7 28, 14 28 C18 28, 21 29.5, 24 32 C27 29.5, 30 28, 34 28 C41 28, 46 32.5, 46 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="36" r="5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

const SERVICES = [
  {
    num: '01',
    icon: <IndividualIcon />,
    title: 'Individuals',
    body: 'Weekly sessions for adults navigating anxiety, grief, life transitions, and the slow work of self-understanding.',
    bullets: [
      'Anxiety & stress',
      'Grief and loss',
      'Life transitions',
      'Burnout and overwhelm',
      'Self-worth and identity',
    ],
  },
  {
    num: '02',
    icon: <CouplesIcon />,
    title: 'Couples',
    body: 'Emotionally focused work to repair connection and communication — held together, never with sides.',
    bullets: [
      'Communication patterns',
      'Conflict cycles',
      'Disconnection and distance',
      'Trust and intimacy',
      'Navigating change together',
    ],
  },
  {
    num: '03',
    icon: <FamilyIcon />,
    title: 'Families',
    body: 'Sessions with parents, teens, or whole family configurations. Pace and structure adapt to who is in the room.',
    bullets: [
      'Family conflict',
      'Parenting dynamics',
      'Boundaries and roles',
      'Communication breakdown',
      'Life transitions',
    ],
  },
];

export default function Services() {
  return (
    <section className={styles['kbc-services']} id="services">
      <div className={styles['kbc-services-header']}>
        <SectionEyebrow>Care Focus</SectionEyebrow>
        <h2 className={styles['kbc-h2']}>
          Individuals, couples, <em>&amp; families.</em>
        </h2>
      </div>
      <div className={styles['kbc-services-grid']}>
        {SERVICES.map((s) => (
          <div key={s.num} className={styles['kbc-service-card']}>
            <div className={styles['kbc-service-icon-wrap']}>
              {s.icon}
            </div>
            <div className={styles['kbc-service-title']}>{s.title}</div>
            <p className={styles['kbc-service-body']}>{s.body}</p>
            <div className={styles['kbc-service-reasons']}>
              <div className={styles['kbc-service-reasons-label']}>
                Common reasons people come in
              </div>
              <ul className={styles['kbc-service-bullet-list']}>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <a href="/services" className={styles['kbc-service-cta']}>
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
