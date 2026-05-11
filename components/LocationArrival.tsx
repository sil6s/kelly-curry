import { PillButton } from './Atoms';
import styles from './Website.module.css';

const DIRECTIONS = [
  'Located at Watch Point in Fort Thomas',
  'After entering Watch Point, pass the speed bump',
  'Take the first driveway immediately after the speed bump',
  'Follow the long driveway up to the house at the top',
];

const ARRIVAL = [
  'Drive up the long driveway to the house at the top',
  'Park at the house at the top of the driveway',
  'Text upon arrival',
];

export default function LocationArrival({
  onRequestConsultation,
}: {
  onRequestConsultation: () => void;
}) {
  return (
    <section className={styles['kbc-location']} id="location-arrival">
      <div className={styles['kbc-location-grid']}>
        <div className={styles['kbc-location-text']}>
          <h2 className={styles['kbc-h2']}>Location & Arrival</h2>
          <div className={styles['kbc-location-subtitle']}>
            Fort Thomas, Kentucky
          </div>
          <div className={styles['kbc-location-block']}>
            <div className={styles['kbc-location-label']}>Address</div>
            <p className={styles['kbc-location-address']}>
              337 Tower Hill Road
              <br />
              Fort Thomas, KY 41075
            </p>
          </div>
          <div className={styles['kbc-location-lists']}>
            <div>
              <div className={styles['kbc-location-label']}>Directions</div>
              <ul className={styles['kbc-location-list']}>
                {DIRECTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className={styles['kbc-location-label']}>
                Arrival Instructions
              </div>
              <ul className={styles['kbc-location-list']}>
                {ARRIVAL.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles['kbc-location-actions']}>
            <a
              className={styles['kbc-pill']}
              href="https://www.google.com/maps/search/?api=1&query=337%20Tower%20Hill%20Road%20Fort%20Thomas%20KY%2041075"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
            <PillButton variant="charcoal" onClick={onRequestConsultation}>
              Request Consultation
            </PillButton>
          </div>
        </div>
        <div className={styles['kbc-location-map']} aria-hidden="true">
          <svg viewBox="0 0 560 520" className={styles['kbc-location-map-svg']}>
            <rect width="560" height="520" fill="#faf8f4" />
            <path
              d="M 80 410 C 150 350, 160 290, 230 260 C 290 234, 310 180, 390 142 C 430 124, 472 94, 500 54"
              fill="none"
              stroke="#c4a882"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.72"
            />
            <path
              d="M 78 188 C 148 202, 194 196, 250 170 C 318 138, 392 152, 470 202"
              fill="none"
              stroke="#7d8c76"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.42"
            />
            <circle cx="230" cy="260" r="12" fill="#7d8c76" />
            <circle cx="390" cy="142" r="8" fill="#2e2b26" opacity="0.72" />
            <rect x="358" y="96" width="88" height="52" rx="3" fill="#ede8df" />
            <path d="M 358 96 L 402 64 L 446 96 Z" fill="#d8cec2" />
            <rect x="394" y="118" width="16" height="30" fill="#b8a897" />
            <g fill="#7d8c76" opacity="0.28">
              <circle cx="102" cy="110" r="54" />
              <circle cx="482" cy="392" r="74" />
              <circle cx="170" cy="442" r="38" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
