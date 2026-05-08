import { SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

const FEES = [
  {
    amount: '$165',
    label: 'Individual Therapy',
    sub: '50 minutes',
    included: 'Weekly support for anxiety, grief, transitions, and self-understanding.',
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
  {
    name: 'Aetna',
    abbr: 'AE',
    color: '#7d2b2b',
  },
  {
    name: 'United Healthcare',
    abbr: 'UH',
    color: '#1a5276',
  },
  {
    name: 'UMR',
    abbr: 'UM',
    color: '#1a5276',
  },
  {
    name: 'Custom Design Benefits',
    abbr: 'CD',
    color: '#2e6b4f',
  },
  {
    name: 'MedBen',
    abbr: 'MB',
    color: '#5a3472',
  },
  {
    name: 'Anthem / BCBS',
    abbr: 'BC',
    color: '#1a4a7a',
  },
];

const PAYMENT_METHODS = [
  {
    name: 'Credit / Debit Cards',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    name: 'HSA / FSA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 8v8M8 12h8" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    name: 'ACH Bank Transfer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3" />
        <path d="M6 10v11M10 10v11M14 10v11M18 10v11" />
      </svg>
    ),
  },
  {
    name: 'Cash or Check',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="1" />
        <circle cx="12" cy="12" r="3" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
];

export default function Fees() {
  return (
    <section className={styles['kbc-fees']} id="fees">
      <div className={styles['kbc-fees-header']}>
        <SectionEyebrow>Fees &amp; Insurance</SectionEyebrow>
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
              <span>What&rsquo;s included</span>
              {f.included}
            </div>
          </div>
        ))}
      </div>

      <div className={styles['kbc-payment-insurance']}>
        <div className={styles['kbc-payment-grid']}>
          <div>
            <div className={styles['kbc-insurance-label']}>Accepted Insurance</div>
            <div className={styles['kbc-insurer-grid']}>
              {INSURANCE.map((ins) => (
                <div key={ins.name} className={styles['kbc-insurer-card']}>
                  <span
                    className={styles['kbc-insurer-mark']}
                    style={{ background: ins.color }}
                    aria-hidden="true"
                  >
                    {ins.abbr}
                  </span>
                  <span className={styles['kbc-insurer-name']}>{ins.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={styles['kbc-insurance-label']}>Payment Methods</div>
            <div className={styles['kbc-payment-methods-grid']}>
              {PAYMENT_METHODS.map((method) => (
                <div key={method.name} className={styles['kbc-payment-method-card']}>
                  <span className={styles['kbc-payment-method-icon']}>{method.icon}</span>
                  <span className={styles['kbc-payment-method-name']}>{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className={styles['kbc-payment-note']}>
          Out-of-pocket rates available. Final cost depends on your insurance plan.
        </p>
      </div>
    </section>
  );
}
