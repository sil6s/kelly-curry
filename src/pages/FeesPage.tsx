import Fees from '../components/Fees';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Website.module.css';

export default function FeesPage() {
  return (
    <>
      <Header />
      <main className={styles['kbc-page']}>
        <section className={styles['kbc-page-hero']}>
          <div className={styles['kbc-page-inner']}>
            <div className={styles['kbc-eyebrow']}>Fees &amp; Insurance</div>
            <h1 className={styles['kbc-h1']} style={{ maxWidth: '18ch' }}>
              Clear rates, simple billing.
            </h1>
            <p className={styles['kbc-body']}>
              Review session fees, accepted insurance plans, and payment details
              before reaching out or starting an appointment request.
            </p>
          </div>
        </section>
        <Fees />
      </main>
      <Footer />
    </>
  );
}
