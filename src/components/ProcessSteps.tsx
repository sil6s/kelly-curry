import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Reach out',
    body: 'Share a little about what you are looking for and the best way to contact you.',
  },
  {
    num: '02',
    title: 'Talk through fit',
    body: 'Kelly will connect with you to review the service, availability, payment details, and whether the practice is a good fit.',
  },
  {
    num: '03',
    title: 'First session',
    body: 'Your first appointment focuses on your story, goals, and what support may look like going forward.',
  },
  {
    num: '04',
    title: 'Ongoing therapy',
    body: 'Sessions continue at a pace that supports safety, trust, reflection, and practical growth.',
  },
];

export default function ProcessSteps({
  onRequestConsultation,
}: {
  onRequestConsultation: () => void;
}) {
  return (
    <section className={styles['kbc-process']} id="process">
      <div className={styles['kbc-process-inner']}>
        <div className={styles['kbc-process-header']}>
          <SectionEyebrow>Getting Started</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            What to expect when you <em>reach out</em>.
          </h2>
          <p className={styles['kbc-body']}>
            Taking the first step can feel uncertain. Here is what the process
            typically looks like.
          </p>
        </div>
        <div className={styles['kbc-process-steps']}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles['kbc-process-step']}>
              <div className={styles['kbc-process-num']}>{step.num}</div>
              <div className={styles['kbc-process-title']}>{step.title}</div>
              <p className={styles['kbc-process-body']}>{step.body}</p>
            </div>
          ))}
        </div>
        <div className={styles['kbc-process-cta']}>
          <button
            type="button"
            className={styles['kbc-pill']}
            onClick={onRequestConsultation}
          >
            Start Appointment Request
          </button>
          <a href="/contact" className={styles['kbc-link-quiet']}>
            Contact Kelly
          </a>
        </div>
      </div>
    </section>
  );
}
