import LogoMark from './LogoMark';
import styles from './Website.module.css';

export default function Footer() {
  return (
    <footer className={styles['kbc-footer']}>
      <div className={styles['kbc-footer-grid']}>
        <div className={styles['kbc-footer-brand']}>
          <LogoMark className={styles['kbc-footer-logo-mark']} />
          <div className={styles['kbc-footer-wordmark']}>Kelly Baker Curry</div>
          <div className={styles['kbc-footer-descriptor']}>
            Licensed Therapist
          </div>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Practice</div>
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#fees">Fees & Insurance</a>
          <a href="#office">Office</a>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Visit</div>
          <p>
            337 Tower Hill Rd
            <br />
            Fort Thomas, KY 41075
          </p>
          <p>Mon to Thu, 9am to 6pm</p>
        </div>
        <div className={styles['kbc-footer-col']}>
          <div className={styles['kbc-footer-col-head']}>Contact</div>
          <p>hello@kellybakercurry.com</p>
          <p>(859) 555 0102</p>
        </div>
      </div>
      <div className={styles['kbc-footer-base']}>
        <div>© 2025 Kelly Baker Curry, LCSW</div>
        <div>Licensed in Kentucky and Ohio</div>
      </div>
    </footer>
  );
}
