import Footer from '../components/Footer';
import Header from '../components/Header';
import { SectionEyebrow } from '../components/Atoms';
import styles from '../styles/Website.module.css';

export default function PatientResourcesPage() {
  return (
    <>
      <Header />
      <main className={styles['kbc-page']}>
        {/* Hero */}
        <section className={styles['kbc-page-hero']}>
          <div className={styles['kbc-page-inner']}>
            <SectionEyebrow>Patient Resources</SectionEyebrow>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '18ch' }}>
              Patient resources.
            </h1>
            <p className={styles['kbc-body']}>
              Forms, intake information, and helpful details for beginning
              therapy with Kelly Baker Curry.
            </p>
          </div>
        </section>

        {/* Intake Forms */}
        <div className={styles['kbc-page-section-wrap']}>
          <div className={styles['kbc-page-section']}>
            <h2 className={styles['kbc-page-h2']}>Intake forms and documents</h2>
            <p className={styles['kbc-body']}>
              Before your first session, you may be asked to complete some
              paperwork. Forms will be provided directly by the practice. Please
              contact Kelly to receive your intake documents.
            </p>
            <div className={styles['kbc-resources-form-grid']}>
              <div className={styles['kbc-resources-form-card']}>
                <div className={styles['kbc-resources-form-card-title']}>
                  New Client Intake Form
                </div>
                <p className={styles['kbc-resources-form-card-body']}>
                  Complete before your first appointment.
                </p>
                <a href="/contact" className={styles['kbc-link-quiet']}>
                  Contact to Request
                </a>
              </div>
              <div className={styles['kbc-resources-form-card']}>
                <div className={styles['kbc-resources-form-card-title']}>
                  Consent for Treatment
                </div>
                <p className={styles['kbc-resources-form-card-body']}>
                  Reviews the terms and policies of therapy.
                </p>
                <a href="/contact" className={styles['kbc-link-quiet']}>
                  Contact to Request
                </a>
              </div>
              <div className={styles['kbc-resources-form-card']}>
                <div className={styles['kbc-resources-form-card-title']}>
                  HIPAA Notice / Privacy Practices
                </div>
                <p className={styles['kbc-resources-form-card-body']}>
                  Explains how your information is handled.
                </p>
                <a href="/contact" className={styles['kbc-link-quiet']}>
                  Contact to Request
                </a>
              </div>
              <div className={styles['kbc-resources-form-card']}>
                <div className={styles['kbc-resources-form-card-title']}>
                  Release of Information
                </div>
                <p className={styles['kbc-resources-form-card-body']}>
                  Required if Kelly is communicating with other providers.
                </p>
                <a href="/contact" className={styles['kbc-link-quiet']}>
                  Contact to Request
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Before Your First Session */}
        <div>
          <div className={styles['kbc-page-section']}>
            <h2 className={styles['kbc-page-h2']}>
              Before your <em>first session</em>.
            </h2>
            <ul className={styles['kbc-body']} style={{ marginTop: '20px', paddingLeft: '1.4em' }}>
              <li>Complete any requested intake paperwork before your appointment.</li>
              <li>Bring questions about billing, scheduling, or your goals for therapy.</li>
              <li>
                Think about what led you to seek support now — there are no
                wrong answers.
              </li>
              <li>
                You do not need to know exactly where to begin. That is what
                the first session is for.
              </li>
            </ul>
          </div>
        </div>

        {/* Billing and Insurance */}
        <div className={styles['kbc-page-section-wrap-linen']}>
          <div className={styles['kbc-page-section']}>
            <h2 className={styles['kbc-page-h2']}>
              Rates and <em>insurance</em>.
            </h2>
            <p className={styles['kbc-body']}>
              Individual therapy is $165 per 50-minute session. Couples therapy
              is $195 per 50-minute session. Family therapy is $210 per
              60-minute session. Most clients begin with weekly sessions.
            </p>
            <p className={styles['kbc-body']}>
              Kelly is in network with Aetna, United Healthcare, UMR, Custom
              Design Benefits, MedBen, and Anthem / BCBS. A superbill can also
              be provided for out-of-network reimbursement. Payment is accepted
              by credit/debit card, HSA/FSA, ACH bank transfer, cash, or check.
            </p>
            <p className={styles['kbc-body']}>
              Please reach out with any questions about payment, insurance
              verification, or superbill documentation.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a href="/contact" className={styles['kbc-pill']}>
                Contact Kelly
              </a>
            </div>
          </div>
        </div>

        {/* Crisis Note */}
        <div className={styles['kbc-page-section']}>
          <div className={styles['kbc-crisis-note']}>
            This practice contact form and email are not monitored for
            emergencies. If you are in immediate danger or experiencing a
            crisis, please call 911, go to the nearest emergency room, or
            contact 988 (Suicide and Crisis Lifeline) for immediate support.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
