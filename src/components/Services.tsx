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

function CoParentingIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles['kbc-service-icon']}>
      <circle cx="15" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="33" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 41 C6 32.5, 10.5 28, 17 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 41 C42 32.5, 37.5 28, 31 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 36 H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M27 33 L30 36 L27 39" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICES = [
  {
    num: '01',
    icon: <IndividualIcon />,
    href: '/services/individual-therapy',
    title: 'Individual Therapy',
    body: '50-minute sessions for adults navigating anxiety, grief, trauma, life transitions, and deeper self-understanding.',
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
    href: '/services/couples-therapy',
    title: 'Couples Therapy',
    body: '50-minute sessions for communication, trust, conflict, disconnection, and relationship repair.',
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
    href: '/services/family-therapy',
    title: 'Family Therapy',
    body: '50-minute sessions for family conflict, transitions, parenting stress, and reconnection.',
    bullets: [
      'Family conflict',
      'Parenting dynamics',
      'Boundaries and roles',
      'Communication breakdown',
      'Life transitions',
    ],
  },
  {
    num: '04',
    icon: <CoParentingIcon />,
    href: '/services/coparenting-therapy',
    title: 'Co-parenting Therapy',
    body: '50-minute sessions for clearer communication, boundaries, and shared parenting decisions.',
    bullets: [
      'Communication boundaries',
      'Shared expectations',
      'Conflict reduction',
      'Transition planning',
      'Parenting decisions',
    ],
  },
];

export default function Services() {
  return (
    <section className={styles['kbc-services']} id="services">
      <div className={styles['kbc-services-header']}>
        <SectionEyebrow>Care Focus</SectionEyebrow>
        <h2 className={styles['kbc-h2']}>
          Individuals, couples, families, <em>&amp; co-parents.</em>
        </h2>
        <p className={styles['kbc-body']}>
          Kelly provides therapy in Fort Thomas, Kentucky, for individuals,
          couples, families, and co-parents, with services available for clients
          in Kentucky and Ohio.
        </p>
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
            <a href={s.href} className={styles['kbc-service-cta']}>
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
