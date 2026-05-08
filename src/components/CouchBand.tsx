import styles from '../styles/Website.module.css';

export default function CouchBand() {
  return (
    <section className={styles['kbc-couch-band']}>
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
