import ConsultationForm from '../components/ConsultationForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import Card from '../components/Card';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  OFFICE_ADDRESS_LINE_1,
  OFFICE_ADDRESS_LINE_2,
} from '../utils/contact';
import styles from '../styles/Website.module.css';

const FINDING_THE_OFFICE = [
  'Located in Watch Point',
  'Pass the speed bump',
  'First driveway immediately after the speed bump',
  'Long driveway leading up to the house',
];

const PARKING = [
  'Park at the bottom of the driveway',
  'Do not drive to the top',
  'Text upon arrival',
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles['kbc-contact-page']}>
        <section className={styles['kbc-contact-page-hero']}>
          <div className={styles['kbc-contact-page-inner']}>
            <div className={styles['kbc-eyebrow']}>Contact</div>
            <h1 className={styles['kbc-h1']}>Get in Touch</h1>
            <p className={styles['kbc-body']}>
              Reaching out can feel like a big step, and you do not need to
              have everything figured out. Whether you have a question or are
              ready to get started, you are welcome to reach out. Share a
              little about what you are looking for, and Kelly will follow up
              to talk through next steps.
            </p>
            <p className={`${styles['kbc-body']} ${styles['kbc-contact-page-avail-note']}`}>
              This is a small, one-person practice, so availability can vary.
              Kelly will personally follow up to talk through options and next
              steps.
            </p>
            <div className={styles['kbc-crisis-note']} style={{ marginTop: '28px' }}>
              If this is an emergency, please call 911.
            </div>
          </div>
        </section>

        <section className={styles['kbc-contact-page-section']}>
          <div className={styles['kbc-contact-page-grid']}>
            <Card className={styles['kbc-contact-method-card']}>
              <div className={styles['kbc-location-label']}>Email</div>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </Card>
            <Card className={styles['kbc-contact-method-card']}>
              <div className={styles['kbc-location-label']}>Phone</div>
              <a href="tel:+18595550102">{CONTACT_PHONE}</a>
            </Card>
          </div>
        </section>

        <section className={styles['kbc-contact-page-section']}>
          <div className={styles['kbc-contact-page-grid']}>
            <div>
              <h2 className={styles['kbc-h2']}>Office Location</h2>
              <p className={styles['kbc-location-address']}>
                {OFFICE_ADDRESS_LINE_1}
                <br />
                {OFFICE_ADDRESS_LINE_2}
              </p>
              <div className={styles['kbc-contact-page-actions']}>
                <Button href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                  Get Directions
                </Button>
              </div>
            </div>
            <div className={styles['kbc-map-embed-wrap']}>
              <iframe
                className={styles['kbc-map-embed']}
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to 337 Tower Hill Road, Fort Thomas, KY 41075"
              />
            </div>
          </div>
        </section>

        <section className={styles['kbc-contact-page-section']}>
          <details className={styles['kbc-contact-directions-details']}>
            <summary className={styles['kbc-contact-directions-summary']}>
              Directions &amp; Parking
            </summary>
            <div className={styles['kbc-contact-page-grid']} style={{ marginTop: '28px' }}>
              <div>
                <div className={styles['kbc-location-label']}>Finding the Office</div>
                <ul className={styles['kbc-location-list']}>
                  {FINDING_THE_OFFICE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className={styles['kbc-location-label']}>Parking</div>
                <ul className={styles['kbc-location-list']}>
                  {PARKING.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </section>

        <section className={styles['kbc-contact-page-section']}>
          <div className={styles['kbc-contact-page-form']}>
            <h2 className={styles['kbc-h2']}>Request a Consultation</h2>
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
