'use client';

import { useState } from 'react';
import styles from '../styles/Website.module.css';

const ARRIVAL = [
  'Park at the bottom of the driveway',
  'Do not drive all the way up',
  'Text upon arrival',
];

const DIRECTIONS = [
  'Located at Watch Point in Fort Thomas',
  'After entering Watch Point, pass the speed bump',
  'Take the first driveway immediately after the speed bump',
  'It is a long driveway leading up to the house at the top',
];

export default function LocationArrival({
  onRequestConsultation,
}: {
  onRequestConsultation: () => void;
}) {
  const [directionsOpen, setDirectionsOpen] = useState(false);

  return (
    <section className={styles['kbc-location']} id="location-arrival">
      <div className={styles['kbc-location-grid']}>
        <div className={styles['kbc-location-text']}>
          <h2 className={styles['kbc-h2']}>Getting Here</h2>
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

          <div className={styles['kbc-location-block']}>
            <div className={styles['kbc-location-label']}>Arrival</div>
            <ul className={styles['kbc-location-list']}>
              {ARRIVAL.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles['kbc-location-details-toggle']}>
            <button
              type="button"
              className={styles['kbc-details-toggle-btn']}
              onClick={() => setDirectionsOpen((v) => !v)}
              aria-expanded={directionsOpen}
            >
              {directionsOpen ? 'Hide directions' : 'Show directions'}
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ transform: directionsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}
              >
                <polyline points="3,6 8,11 13,6" />
              </svg>
            </button>
            {directionsOpen && (
              <ul className={styles['kbc-location-list']} style={{ marginTop: '12px' }}>
                {DIRECTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
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
            <button
              type="button"
              className={`${styles['kbc-pill']} ${styles['kbc-pill-charcoal']}`}
              onClick={onRequestConsultation}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
        <div className={styles['kbc-location-map-real']}>
          <iframe
            src="https://www.google.com/maps?q=337%20Tower%20Hill%20Road%20Fort%20Thomas%20KY%2041075&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to 337 Tower Hill Road, Fort Thomas, KY 41075"
            className={styles['kbc-location-map-iframe']}
          />
        </div>
      </div>
    </section>
  );
}
