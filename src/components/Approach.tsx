import { Diamond, SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

export default function Approach() {
  return (
    <section className={styles['kbc-approach']} id="approach">
      <div className={styles['kbc-approach-grid']}>
        <div className={styles['kbc-approach-image-wrap']}>
          <div className={styles['kbc-grey-sliver']} aria-hidden="true"></div>
          <div className={styles['kbc-approach-image']}>
            <svg
              viewBox="0 0 600 700"
              preserveAspectRatio="xMidYMid slice"
              className={styles['kbc-photo-svg']}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="warmB" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cdc2b4" />
                  <stop offset="100%" stopColor="#a89070" />
                </linearGradient>
              </defs>
              <rect width="600" height="700" fill="url(#warmB)" />
              <circle cx="450" cy="200" r="220" fill="#c4a882" opacity="0.20" />
              <rect
                x="0"
                y="500"
                width="600"
                height="200"
                fill="#8a7560"
                opacity="0.35"
              />
              <g opacity="0.55" fill="#4a3d30">
                <rect x="100" y="320" width="160" height="180" rx="6" />
                <rect x="100" y="495" width="40" height="90" />
                <rect x="220" y="495" width="40" height="90" />
              </g>
              <g opacity="0.45" fill="#4a3d30">
                <rect x="330" y="380" width="200" height="14" />
                <rect x="350" y="394" width="6" height="170" />
                <rect x="500" y="394" width="6" height="170" />
                <rect x="370" y="320" width="120" height="60" rx="4" />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles['kbc-approach-text']}>
          <SectionEyebrow>Our Approach</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Therapy is a <em>relationship</em> before it is anything else.
          </h2>
          <p className={styles['kbc-body']}>
            We meet weekly, sometimes more, and we talk. Sessions draw on
            Cognitive Behavioral Therapy, Acceptance and Commitment Therapy, and
            Emotionally Focused Therapy as the work calls for them.
          </p>
          <p className={styles['kbc-body']}>
            Over time the patterns become visible, and once they are visible
            they can change. The goal is not to fix you. The goal is to know
            you, and to help you know yourself.
          </p>
          <Diamond className={styles['kbc-approach-diamond']} size={96} />
        </div>
      </div>
    </section>
  );
}
