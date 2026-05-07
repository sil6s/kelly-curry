/* global React, SectionEyebrow */

const FEES = [
  { amount: '$165', label: 'Individual', sub: '50 minutes' },
  { amount: '$195', label: 'Couples', sub: '50 minutes' },
  { amount: '$210', label: 'Family', sub: '60 minutes' },
];

const INSURANCE = [
  'Aetna', 'Anthem BCBS', 'Cigna', 'Humana', 'United Healthcare', 'Out of Network',
];

function Fees() {
  return (
    <section className="kbc-fees" id="fees">
      <div className="kbc-fees-header">
        <SectionEyebrow>Fees & Insurance</SectionEyebrow>
        <h2 className="kbc-h2">Clear rates. <em>Honest</em> billing.</h2>
        <p className="kbc-body kbc-fees-intro">
          Sessions are billed at the rates below. I am in network with several major insurers, and I am happy to provide a superbill for out of network reimbursement.
        </p>
      </div>
      <div className="kbc-fees-grid">
        {FEES.map(f => (
          <div key={f.label} className="kbc-fee-block">
            <div className="kbc-fee-amount">{f.amount}</div>
            <div className="kbc-fee-label">{f.label}</div>
            <div className="kbc-fee-sub">{f.sub}</div>
          </div>
        ))}
      </div>
      <div className="kbc-insurance">
        <div className="kbc-insurance-label">Plans Accepted</div>
        <div className="kbc-insurance-row">
          {INSURANCE.map(i => <span key={i} className="kbc-chip">{i}</span>)}
        </div>
      </div>
    </section>
  );
}

window.Fees = Fees;
