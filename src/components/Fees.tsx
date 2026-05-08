import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const FEES = [
  {
    amount: '$165',
    label: 'Individual Therapy',
    sub: '50 minutes',
    included:
      'Weekly support for anxiety, grief, transitions, and self understanding.',
  },
  {
    amount: '$195',
    label: 'Couples Therapy',
    sub: '50 minutes',
    included: 'Emotionally focused sessions for connection and communication.',
  },
  {
    amount: '$210',
    label: 'Family Therapy',
    sub: '60 minutes',
    included: 'Collaborative care for parents, teens, and family systems.',
  },
];

const INSURANCE = [
  'Aetna',
  'United Healthcare',
  'UMR',
  'Custom Design Benefits',
  'MedBen',
  'Anthem / BCBS',
];

const PAYMENT_METHODS = [
  'Credit / Debit Cards',
  'HSA / FSA',
  'ACH Bank Transfer',
  'Cash or Check',
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
          Most clients begin with weekly sessions. Sessions are billed at the
          rates below. Kelly is in network with several major insurers, and is
          happy to provide a superbill for out-of-network reimbursement.
        </p>
      </div>
      <div className={styles['kbc-fees-grid']}>
        {FEES.map((f) => (
          <div key={f.label} className={styles['kbc-fee-block']}>
            <div className={styles['kbc-fee-label']}>{f.label}</div>
            <div className={styles['kbc-fee-amount']}>{f.amount}</div>
            <div className={styles['kbc-fee-sub']}>{f.sub}</div>
            <div className={styles['kbc-fee-included']}>
              <span>What’s included</span>
              {f.included}
            </div>
          </div>
        ))}
      </div>
      <div className={styles['kbc-payment-insurance']}>
        <h3 className={styles['kbc-payment-title']}>Payment & Insurance</h3>
        <div className={styles['kbc-payment-grid']}>
          <div>
            <div className={styles['kbc-insurance-label']}>
              Accepted Insurance
            </div>
            <div className={styles['kbc-insurance-row']}>
              {INSURANCE.map((i) => (
                <span key={i} className={styles['kbc-chip']}>
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className={styles['kbc-insurance-label']}>Payment Methods</div>
            <div className={styles['kbc-insurance-row']}>
              {PAYMENT_METHODS.map((method) => (
                <span key={method} className={styles['kbc-chip']}>
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className={styles['kbc-payment-note']}>
          Out-of-pocket rates available. Final cost depends on your insurance
          plan.
        </p>
      </div>
    </section>
  );
}
