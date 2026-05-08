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
  {
    name: 'Aetna',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#7B2D8B" opacity="0.15" />
        <path d="M16 6 L22 20 H10 Z" fill="none" stroke="#7B2D8B" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16 H20" stroke="#7B2D8B" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'United Healthcare',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#005587" opacity="0.12" />
        <path d="M11 10 C11 10, 11 19, 16 22 C21 19, 21 10, 21 10" fill="none" stroke="#005587" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2.5" fill="#005587" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'UMR',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#0066CC" opacity="0.12" />
        <rect x="9" y="12" width="14" height="9" rx="2" fill="none" stroke="#0066CC" strokeWidth="2" />
        <path d="M12 12 V10 C12 8, 20 8, 20 10 V12" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Custom Design Benefits',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#2D7D46" opacity="0.12" />
        <path d="M16 7 L19 13 L26 14 L21 19 L22.5 26 L16 23 L9.5 26 L11 19 L6 14 L13 13 Z" fill="none" stroke="#2D7D46" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'MedBen',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#C0392B" opacity="0.12" />
        <rect x="13" y="9" width="6" height="14" rx="1.5" fill="#C0392B" opacity="0.7" />
        <rect x="9" y="13" width="14" height="6" rx="1.5" fill="#C0392B" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'Anthem / BCBS',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#00539B" opacity="0.12" />
        <path d="M16 8 C16 8, 10 11, 10 16 C10 21, 16 24, 16 24 C16 24, 22 21, 22 16 C22 11, 16 8, 16 8 Z" fill="none" stroke="#00539B" strokeWidth="2" />
        <path d="M13 16 L15.5 18.5 L20 13.5" stroke="#00539B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PAYMENT_METHODS = [
  {
    name: 'Credit / Debit Cards',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 13 H28" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="18" width="6" height="2.5" rx="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'HSA / FSA',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4 L28 10 L28 18 C28 23, 22 27, 16 29 C10 27, 4 23, 4 18 L4 10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <rect x="13.5" y="11" width="5" height="10" rx="1" fill="currentColor" opacity="0.45" />
        <rect x="11" y="13.5" width="10" height="5" rx="1" fill="currentColor" opacity="0.45" />
      </svg>
    ),
  },
  {
    name: 'ACH Bank Transfer',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 13 L16 6 L28 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <rect x="4" y="13" width="24" height="2" fill="currentColor" opacity="0.35" />
        <rect x="7" y="15" width="3" height="9" fill="currentColor" opacity="0.45" />
        <rect x="14.5" y="15" width="3" height="9" fill="currentColor" opacity="0.45" />
        <rect x="22" y="15" width="3" height="9" fill="currentColor" opacity="0.45" />
        <rect x="4" y="24" width="24" height="2" rx="1" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  {
    name: 'Cash or Check',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="3" y="9" width="26" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7" cy="16" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="25" cy="16" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
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
              <span>What&rsquo;s included</span>
              {f.included}
            </div>
          </div>
        ))}
      </div>
      <div className={styles['kbc-payment-insurance']}>
        <h3 className={styles['kbc-payment-title']}>Payment &amp; Insurance</h3>
        <div className={styles['kbc-payment-grid']}>
          <div>
            <div className={styles['kbc-insurance-label']}>
              Accepted Insurance
            </div>
            <div className={styles['kbc-insurance-cards-row']}>
              {INSURANCE.map((ins) => (
                <div key={ins.name} className={styles['kbc-insurance-card']}>
                  <div className={styles['kbc-insurance-card-icon']}>{ins.icon}</div>
                  <span className={styles['kbc-insurance-card-name']}>{ins.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={styles['kbc-insurance-label']}>Payment Methods</div>
            <div className={styles['kbc-payment-cards-row']}>
              {PAYMENT_METHODS.map((method) => (
                <div key={method.name} className={styles['kbc-payment-card']}>
                  <div className={styles['kbc-payment-card-icon']}>{method.icon}</div>
                  <span className={styles['kbc-payment-card-name']}>{method.name}</span>
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
