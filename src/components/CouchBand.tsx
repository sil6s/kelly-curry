import Image from 'next/image';
import therapyStock from '../assets/images/therapy-stock.jpg';
import styles from '../styles/Website.module.css';

export default function CouchBand() {
  return (
    <section className={styles['kbc-couch-band']}>
      <Image
        src={therapyStock}
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        aria-hidden="true"
        sizes="100vw"
      />
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
