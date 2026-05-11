import { SectionEyebrow } from './Atoms';
import styles from './Website.module.css';

const SERVICES = [
  {
    num: '01',
    title: 'Individual Therapy',
    body: '50-minute sessions for anxiety, grief, trauma, life transitions, and deeper self-understanding.',
  },
  {
    num: '02',
    title: 'Couples Therapy',
    body: '50-minute sessions for communication, trust, conflict, disconnection, and relationship repair.',
  },
  {
    num: '03',
    title: 'Family Therapy',
    body: '50-minute sessions for family conflict, transitions, parenting stress, and reconnection.',
  },
  {
    num: '04',
    title: 'Co-parenting Therapy',
    body: '50-minute sessions for clearer communication, boundaries, and shared parenting decisions.',
  },
];

export default function Services() {
  return (
    <section className={styles['kbc-services']} id="services">
      <div className={styles['kbc-services-header']}>
        <SectionEyebrow>What I Offer</SectionEyebrow>
        <h2 className={styles['kbc-h2']}>
          Four ways of <em>working</em> together.
        </h2>
      </div>
      <div className={styles['kbc-services-grid']}>
        {SERVICES.map((s) => (
          <div key={s.num} className={styles['kbc-service-card']}>
            <div className={styles['kbc-service-num']}>{s.num}</div>
            <div className={styles['kbc-service-title']}>{s.title}</div>
            <p className={styles['kbc-service-body']}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
