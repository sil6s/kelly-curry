import styles from '../styles/Website.module.css';

export default function CouchBand() {
  return (
    <section className={styles['kbc-couch-band']}>
      <svg
        className={styles['kbc-couch-bg']}
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sageBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a5438" />
            <stop offset="100%" stopColor="#243a22" />
          </linearGradient>
        </defs>
        <rect width="1400" height="600" fill="url(#sageBand)" />
        <circle cx="220" cy="120" r="260" fill="#c4a882" opacity="0.10" />
        <circle cx="1180" cy="500" r="320" fill="#c4a882" opacity="0.12" />
        <g opacity="0.45" fill="#1a2a18">
          <rect x="380" y="320" width="640" height="140" rx="10" />
          <rect x="380" y="280" width="120" height="80" rx="14" />
          <rect x="900" y="280" width="120" height="80" rx="14" />
          <rect x="500" y="290" width="400" height="60" rx="10" />
        </g>
        <rect
          x="0"
          y="460"
          width="1400"
          height="140"
          fill="#1a2a18"
          opacity="0.35"
        />
      </svg>
      <div className={styles['kbc-couch-overlay']} aria-hidden="true"></div>
      <div className={styles['kbc-couch-content']}>
        <div
          className={`${styles['kbc-eyebrow']} ${styles['kbc-eyebrow-on-dark']}`}
        >
          A Quiet Promise
        </div>
        <p className={styles['kbc-pullquote']}>
          You will be heard. You will be met where you are. The work will be
          honest, and it will take the time it takes.
        </p>
      </div>
    </section>
  );
}
