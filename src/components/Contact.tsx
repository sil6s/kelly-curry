import { SectionEyebrow } from './Atoms';
import ConsultationFlow from './ConsultationFlow';
import styles from '../styles/Website.module.css';

export default function Contact() {
  return (
    <section className={styles['kbc-contact']} id="contact">
      <div className={styles['kbc-contact-stacked']}>
        <div className={styles['kbc-contact-text']}>
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Start with a brief <em>appointment request.</em>
          </h2>
          <p className={styles['kbc-body']}>
            Reaching out can feel like a big step, and you do not need to have
            everything figured out. Share whether you are looking for
            individual, couples, family, or coparenting therapy, and Kelly will
            follow up about fit, availability, and next steps.
          </p>
        </div>

        <ConsultationFlow />

        <div className={styles['kbc-contact-alt']}>
          <span>Not ready to use the form?</span>
          <a href="/contact" className={styles['kbc-link-quiet']}>
            Reach out here
          </a>
          <a
            href="/patient-resources#fees-payment"
            className={styles['kbc-link-quiet']}
          >
            View fees &amp; insurance
          </a>
        </div>
      </div>
    </section>
  );
}
