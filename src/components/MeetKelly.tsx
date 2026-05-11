import Image from 'next/image';
import headshot from '../assets/images/kelly-baker-curry-headshot.jpg';
import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

export default function MeetKelly() {
  return (
    <section className={styles['kbc-meet']} id="meet-kelly">
      <div className={styles['kbc-meet-grid']}>
        <div className={styles['kbc-meet-photo']}>
          <Image
            src={headshot}
            alt="Kelly Baker Curry, Licensed Clinical Social Worker"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            placeholder="blur"
            sizes="220px"
          />
        </div>
        <div className={styles['kbc-meet-text']}>
          <SectionEyebrow>About Kelly</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Kelly Baker Curry,{' '}
            <em className={styles['kbc-meet-credentials']}>MSW, MEd, LCSW</em>
          </h2>
          <div className={styles['kbc-meet-role']}>
            Licensed Clinical Social Worker serving Kentucky and Ohio
          </div>
          <p className={styles['kbc-body']}>
            Kelly brings a calm, honest, and relational approach to therapy. Her
            work is grounded in trust, thoughtful conversation, and a genuine
            belief that understanding your own patterns is the foundation of
            meaningful change. With over 13 years of experience working with
            individuals, couples, families, and co-parents, she meets people
            where they are — without judgment.
          </p>

          <div className={styles['kbc-meet-cards-row']}>
            <div className={styles['kbc-meet-cred-card']}>
              <div className={styles['kbc-meet-cred-card-label']}>
                Education
              </div>
              <div className={styles['kbc-meet-cred-card-body']}>
                <div className={styles['kbc-cred-degree']}>
                  Master of Social Work (MSW)
                  <span className={styles['kbc-cred-school']}>
                    Northern Kentucky University
                  </span>
                </div>
                <div className={styles['kbc-cred-degree']}>
                  Master of Education (MEd)
                  <span className={styles['kbc-cred-school']}>
                    Northern Kentucky University
                  </span>
                </div>
                <div className={styles['kbc-cred-degree']}>
                  Bachelor of Arts (BA)
                  <span className={styles['kbc-cred-school']}>
                    Northern Kentucky University
                  </span>
                </div>
              </div>
            </div>

            <div className={styles['kbc-meet-cred-card']}>
              <div className={styles['kbc-meet-cred-card-label']}>
                Licensure
              </div>
              <div className={styles['kbc-meet-cred-card-body']}>
                <div className={styles['kbc-cred-degree']}>
                  Kentucky — LCSW
                  <span className={styles['kbc-cred-school']}>
                    License #254927
                  </span>
                </div>
                <div className={styles['kbc-active-status']}>
                  <span className={styles['kbc-active-dot']} />
                  Active
                </div>
                <div
                  className={styles['kbc-cred-degree']}
                  style={{ marginTop: '10px' }}
                >
                  Ohio — LISW
                  <span className={styles['kbc-cred-school']}>
                    License #I.2304547
                  </span>
                </div>
                <div className={styles['kbc-active-status']}>
                  <span className={styles['kbc-active-dot']} />
                  Active
                </div>
              </div>
            </div>

            <div className={styles['kbc-meet-cred-card']}>
              <div className={styles['kbc-meet-cred-card-label']}>
                Care Focus
              </div>
              <div className={styles['kbc-meet-cred-card-body']}>
                <ul className={styles['kbc-care-focus-list']}>
                  <li>Individual therapy</li>
                  <li>Couples therapy</li>
                  <li>Family therapy</li>
                  <li>Coparenting therapy</li>
                  <li>Anxiety &amp; stress</li>
                  <li>Life transitions</li>
                  <li>Relationship patterns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles['kbc-meet-tags']}>
            In-person • Telehealth • Fort Thomas, KY
          </div>
          <div className={styles['kbc-meet-cta']}>
            <a href="/about" className={styles['kbc-link-quiet']}>
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
