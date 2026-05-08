import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const SERVICES = [
  {
    num: '01',
    title: 'Individuals',
    body: 'Weekly sessions for adults navigating anxiety, grief, life transitions, and the slow work of self-understanding.',
    reasons: 'Anxiety & stress, Grief and loss, Life transitions, Burnout, Self-worth and identity, Emotional patterns',
  },
  {
    num: '02',
    title: 'Couples',
    body: 'Emotionally focused work to repair connection and communication. Held together, never with sides.',
    reasons: 'Communication patterns, Conflict cycles, Disconnection, Trust, Intimacy concerns, Navigating change',
  },
  {
    num: '03',
    title: 'Families',
    body: 'Sessions with parents, teens, or whole family configurations. Pace and structure adapt to who is in the room.',
    reasons: 'Family conflict, Boundaries, Parenting dynamics, Communication, Life transitions, Relationship repair',
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
              <p className={styles['kbc-service-reasons-list']}>{s.reasons}</p>
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
