import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

export default function PatientResourcesPreview() {
  return (
    <section className={styles['kbc-resources-preview']}>
      <div className={styles['kbc-resources-preview-inner']}>
        <div className={styles['kbc-resources-preview-copy']}>
          <SectionEyebrow>New Clients</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            New client forms and helpful resources.
          </h2>
          <p className={styles['kbc-resources-preview-body']}>
            Before your first appointment, you may be asked to complete intake
            paperwork, consent forms, and basic practice information. The
            Patient Resources page gives you one place to access forms and
            prepare for your first session.
          </p>
        </div>
        <div className={styles['kbc-resources-preview-cta']}>
          <a href="/patient-resources" className={styles['kbc-pill']}>
            View Patient Resources
          </a>
          <a href="/approach" className={styles['kbc-link-quiet']}>
            Learn about the process
          </a>
        </div>
      </div>
    </section>
  );
}
