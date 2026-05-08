import Image from 'next/image';
import healingHero from '../assets/images/healing-hero.jpg';
import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

export default function Hero({
  onRequestConsultation,
}: {
  onRequestConsultation: () => void;
}) {
  return (
    <section className={styles['kbc-hero']} id="top">
      <div className={styles['kbc-hero-grid']}>
        <div className={styles['kbc-hero-text']}>
          <SectionEyebrow>Talk Therapy in Fort Thomas, Kentucky</SectionEyebrow>
          <h1 className={styles['kbc-h1']}>
            A calm, supportive space to <em>heal</em>, grow, and feel more like yourself.
          </h1>
          <p className={styles['kbc-hero-body']}>
            Therapy for individuals, couples, and families in Fort Thomas,
            Kentucky, with a grounded approach rooted in honesty, trust, and
            meaningful connection.
          </p>
          <div className={styles['kbc-hero-cta']}>
            <button
              className={styles['kbc-pill']}
              type="button"
              onClick={onRequestConsultation}
            >
              Schedule a Consultation
            </button>
            <a
              href="/services"
              className={`${styles['kbc-pill']} ${styles['kbc-pill-charcoal']}`}
            >
              View Services
            </a>
          </div>
          <p className={styles['kbc-hero-trust']}>
            Licensed Clinical Social Worker
          </p>
        </div>
        <div className={styles['kbc-hero-photo']}>
          <Image
            src={healingHero}
            alt="A welcoming therapy office in Fort Thomas, Kentucky"
            className={styles['kbc-photo-img']}
            placeholder="blur"
            sizes="(max-width: 880px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
