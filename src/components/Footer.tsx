import LogoMark from './LogoMark';
import styles from '../styles/Website.module.css';

export default function Footer() {
  return (
    <footer className={styles['kbc-footer']}>
      <div className={styles['kbc-footer-grid']}>
        <div className={styles['kbc-footer-brand']}>
          <LogoMark className={styles['kbc-footer-logo-mark']} />
          <div className={styles['kbc-footer-wordmark']}>Kelly Baker Curry</div>
          <div className={styles['kbc-footer-descriptor']}>
            Therapist in Fort Thomas, KY
          </div>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Practice</div>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/approach">Approach</a>
          <a href="/patient-resources">Patient Resources</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Location</div>
          <p>
            337 Tower Hill Rd
            <br />
            Fort Thomas, KY 41075
          </p>
          <p>Licensed in Kentucky and Ohio</p>
          <p>In-person and virtual therapy options</p>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Sessions</div>
          <p>Individual therapy: $150</p>
          <p>Couples therapy: $175</p>
          <p>Family therapy: $200</p>
          <p>Co-parenting therapy: $225</p>
          <p>50-minute sessions</p>
          <p>Mon to Thu, 9am to 6pm</p>
          <p>Virtual sessions Friday</p>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Contact</div>
          <a href="mailto:contact@kbc-therapy.com">contact@kbc-therapy.com</a>
          <a href="tel:+18595550102">(859) 555 0102</a>
        </div>
      </div>
      <div className={styles['kbc-footer-base']}>
        <div>© 2026 Kelly Baker Curry, LCSW</div>
        <div>Licensed in Kentucky and Ohio</div>
      </div>
    </footer>
  );
}
