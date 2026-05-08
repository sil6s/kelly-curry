import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const SERVICES = [
  {
    num: '01',
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
        <SectionEyebrow>Services</SectionEyebrow>
        <h2 className={styles['kbc-h2']}>
          Three ways of <em>working</em> together.
        </h2>
      </div>
      <div className={styles['kbc-services-grid']}>
        {SERVICES.map((s) => (
          <div key={s.num} className={styles['kbc-service-card']}>
            <div className={styles['kbc-service-num']}>{s.num}</div>
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
