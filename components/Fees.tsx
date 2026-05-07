import { SectionEyebrow } from './Atoms';
import styles from './Website.module.css';

const FEES = [
  { amount: '$165', label: 'Individual', sub: '50 minutes' },
  { amount: '$195', label: 'Couples', sub: '50 minutes' },
  { amount: '$210', label: 'Family', sub: '60 minutes' },
];

const INSURANCE = [
  'Aetna',
  'Anthem BCBS',
  'Cigna',
  'Humana',
  'United Healthcare',
  'Out of Network',
];

export default function Fees() {
  return (
    <section className={styles['kbc-fees']} id="fees">
      <div className={styles['kbc-fees-header']}>
        <SectionEyebrow>Fees & Insurance</SectionEyebrow>
        <h2 className={styles['kbc-h2']}>
          Clear rates. <em>Honest</em> billing.
        </h2>
        <p className={`${styles['kbc-body']} ${styles['kbc-fees-intro']}`}>
          Sessions are billed at the rates below. I am in network with several
          major insurers, and I am happy to provide a superbill for out of
          network reimbursement.
        </p>
      </div>
      <div className={styles['kbc-fees-grid']}>
        {FEES.map((f) => (
          <div key={f.label} className={styles['kbc-fee-block']}>
            <div className={styles['kbc-fee-amount']}>{f.amount}</div>
            <div className={styles['kbc-fee-label']}>{f.label}</div>
            <div className={styles['kbc-fee-sub']}>{f.sub}</div>
          </div>
        ))}
      </div>
      <div className={styles['kbc-insurance']}>
        <div className={styles['kbc-insurance-label']}>Plans Accepted</div>
        <div className={styles['kbc-insurance-row']}>
          {INSURANCE.map((i) => (
            <span key={i} className={styles['kbc-chip']}>
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
