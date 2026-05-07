import { SectionEyebrow } from './Atoms';
import styles from './Website.module.css';

const CREDENTIALS = [
  'LCSW #254297 (KY)',
  'Licensed Independent Social Worker (OH) #I.2304547',
  'MSW, Northern Kentucky University',
  'MEd background in education',
  '13+ years of experience',
];

export default function MeetKelly() {
  return (
    <section className={styles['kbc-meet']} id="meet-kelly">
      <div className={styles['kbc-meet-grid']}>
        <div className={styles['kbc-meet-photo']} aria-hidden="true">
          <svg viewBox="0 0 220 220" className={styles['kbc-meet-photo-svg']}>
            <defs>
              <linearGradient
                id="meetKellyWarm"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d8cec2" />
                <stop offset="100%" stopColor="#b8a897" />
              </linearGradient>
            </defs>
            <circle cx="110" cy="110" r="110" fill="url(#meetKellyWarm)" />
            <circle cx="110" cy="86" r="38" fill="#7d8c76" opacity="0.42" />
            <path
              d="M 48 188 C 60 142, 86 124, 110 124 C 134 124, 160 142, 172 188 Z"
              fill="#4a3d30"
              opacity="0.42"
            />
            <circle cx="160" cy="58" r="46" fill="#c4a882" opacity="0.18" />
          </svg>
        </div>
        <div className={styles['kbc-meet-text']}>
          <SectionEyebrow>Meet Kelly</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Kelly Baker Thomas, LCSW, MSW, MEd
          </h2>
          <div className={styles['kbc-meet-role']}>
            Licensed Clinical Social Worker
          </div>
          <p className={styles['kbc-body']}>
            I’m a licensed clinical social worker committed to helping
            individuals, couples, and families build healthier relationships
            with themselves and others. My work focuses on identifying patterns,
            behaviors, and beliefs that no longer serve you, and creating
            meaningful, lasting change through a collaborative approach.
          </p>
          <ul className={styles['kbc-credential-list']}>
            {CREDENTIALS.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
          <div className={styles['kbc-meet-tags']}>In-person • Telehealth</div>
        </div>
      </div>
    </section>
  );
}
