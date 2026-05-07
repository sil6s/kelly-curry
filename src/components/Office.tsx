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
            <rect
              x="0"
              y="320"
              width="600"
              height="100"
              fill="#9a8a7a"
              opacity="0.35"
            />
            <g opacity="0.55" fill="#4a3d30">
              <rect x="120" y="180" width="160" height="160" rx="6" />
              <rect x="320" y="220" width="180" height="120" rx="4" />
            </g>
            <circle cx="450" cy="100" r="120" fill="#c4a882" opacity="0.18" />
          </svg>
          <div className={styles['kbc-office-card-meta']}>
            <div className={styles['kbc-office-card-title']}>Waiting Room</div>
            <div className={styles['kbc-office-card-body']}>
              Quiet, soft lit, with tea and water on offer.
            </div>
          </div>
        </div>
        <div className={styles['kbc-office-card']}>
          <svg
            viewBox="0 0 600 420"
            preserveAspectRatio="xMidYMid slice"
            className={styles['kbc-office-img']}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="warmO2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cabea8" />
                <stop offset="100%" stopColor="#a48a6c" />
              </linearGradient>
            </defs>
            <rect width="600" height="420" fill="url(#warmO2)" />
            <rect
              x="0"
              y="340"
              width="600"
              height="80"
              fill="#8a7560"
              opacity="0.35"
            />
            <g opacity="0.55" fill="#4a3d30">
              <rect x="80" y="200" width="180" height="140" rx="8" />
              <rect x="300" y="160" width="220" height="180" rx="6" />
            </g>
            <g opacity="0.6">
              <path
                d="M 400 220 C 390 180, 410 160, 420 152 C 414 170, 414 200, 412 220 Z"
                fill="#7d8c76"
              />
              <rect x="392" y="218" width="40" height="14" fill="#4a3d30" />
            </g>
          </svg>
          <div className={styles['kbc-office-card-meta']}>
            <div className={styles['kbc-office-card-title']}>Therapy Room</div>
            <div className={styles['kbc-office-card-body']}>
              Two armchairs, a window, and a long view of the garden.
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
            hello@kellybakercurry.com
            <br />
            (859) 555 0102
          </div>
        </div>
      </div>
    </section>
  );
}
