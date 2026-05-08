import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

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
          <SectionEyebrow>About Kelly</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Kelly Baker Curry, <em>LCSW</em>
          </h2>
          <div className={styles['kbc-meet-role']}>
            Licensed Clinical Social Worker — Kentucky &amp; Ohio
          </div>
          <p className={styles['kbc-body']}>
            Kelly brings a calm, honest, and relational approach to therapy. Her
            work is grounded in trust, thoughtful conversation, and helping
            clients better understand the patterns, relationships, and life
            experiences that shape how they move through the world. With over 13
            years of experience working with individuals, couples, and families,
            Kelly believes therapy should feel honest, safe, practical, and
            deeply human.
          </p>

          <div className={styles['kbc-meet-cards-row']}>
            <div className={styles['kbc-meet-cred-card']}>
              <div className={styles['kbc-meet-cred-card-label']}>Education</div>
              <div className={styles['kbc-meet-cred-card-body']}>
                MSW, Northern Kentucky University
                <br />
                MEd, Northern Kentucky University
              </div>
            </div>
            <div className={styles['kbc-meet-cred-card']}>
              <div className={styles['kbc-meet-cred-card-label']}>License</div>
              <div className={styles['kbc-meet-cred-card-body']}>
                Licensed Clinical Social Worker
                <div className={styles['kbc-active-status']}>
                  <span className={styles['kbc-active-dot']} />
                  Active
                </div>
              </div>
            </div>
            <div className={styles['kbc-meet-cred-card']}>
              <div className={styles['kbc-meet-cred-card-label']}>Care Focus</div>
              <div className={styles['kbc-meet-cred-card-body']}>
                Individuals, couples, and family therapy
              </div>
            </div>
          </div>

          <div className={styles['kbc-meet-tags']}>
            In-person • Telehealth • Fort Thomas, KY
          </div>
          <div className={styles['kbc-meet-cta']}>
            <a href="/services" className={styles['kbc-link-quiet']}>
              View services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
