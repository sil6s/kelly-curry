import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

export default function Office() {
  return (
    <section className={styles['kbc-office']} id="office">
      <div className={styles['kbc-office-header']}>
        <SectionEyebrow>Visit the Office</SectionEyebrow>
        <h2 className={styles['kbc-h2']}>
          Fort Thomas, <em>Kentucky</em>.
        </h2>
      </div>
      <div className={styles['kbc-office-grid']}>
        <div className={styles['kbc-office-card']}>
          <svg
            viewBox="0 0 600 420"
            preserveAspectRatio="xMidYMid slice"
            className={styles['kbc-office-img']}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="warmO1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4cabc" />
                <stop offset="100%" stopColor="#b09c84" />
              </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#warmO1)" />
            <rect x="0" y="320" width="600" height="100" fill="#9a8a7a" opacity="0.35" />
            <g opacity="0.55" fill="#4a3d30">
              <rect x="120" y="180" width="160" height="160" rx="6" />
              <rect x="320" y="220" width="180" height="120" rx="4" />
            </g>
            <circle cx="450" cy="100" r="120" fill="#c4a882" opacity="0.18" />
          </svg>
          <div className={styles['kbc-office-card-meta']}>
            <div className={styles['kbc-office-card-title']}>The Practice</div>
            <div className={styles['kbc-office-card-body']}>
              A private, calm setting at Watch Point in Fort Thomas. In-person
              sessions Monday through Thursday.
            </div>
          </div>
        </div>
        <div className={styles['kbc-office-card']}>
          <div className={styles['kbc-office-map-wrap']}>
            <iframe
              className={styles['kbc-office-map']}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64265.02010326694!2d-84.49523834266184!3d39.08120570124713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b14b2c4b274d%3A0x53680927832b7738!2sKelly%20Baker%20Curry%20Therapy!5e1!3m2!1sen!2sus!4v1778461442098!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Kelly Baker Curry Therapy at Watch Point in Fort Thomas"
            />
          </div>
          <div className={styles['kbc-office-card-meta']}>
            <div className={styles['kbc-office-card-title']}>337 Tower Hill Road</div>
            <div className={styles['kbc-office-card-body']}>
              Fort Thomas, KY 41075 &mdash; drive up the long driveway, park at
              the house at the top, and text upon arrival.
            </div>
          </div>
        </div>
      </div>
      <div className={styles['kbc-info-strip']}>
        <div className={styles['kbc-info-cell']}>
          <div className={styles['kbc-info-label']}>Address</div>
          <div className={styles['kbc-info-value']}>
            337 Tower Hill Rd
            <br />
            Fort Thomas, KY 41075
          </div>
        </div>
        <div className={styles['kbc-info-cell']}>
          <div className={styles['kbc-info-label']}>Hours</div>
          <div className={styles['kbc-info-value']}>
            Mon to Thu, 9am to 6pm
            <br />
            Virtual sessions Friday
          </div>
        </div>
        <div className={styles['kbc-info-cell']}>
          <div className={styles['kbc-info-label']}>Contact</div>
          <div className={styles['kbc-info-value']}>
            contact@kbc-therapy.com
            <br />
            (859) 555 0102
          </div>
        </div>
      </div>
    </section>
  );
}
