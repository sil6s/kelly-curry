/* global React, SectionEyebrow */

const SERVICES = [
  { num: '01', title: 'Individuals', body: 'Weekly sessions for adults navigating anxiety, grief, life transitions, and the slow work of self understanding.' },
  { num: '02', title: 'Couples', body: 'Emotionally focused work to repair connection and communication. Held together, never with sides.' },
  { num: '03', title: 'Families', body: 'Sessions held with parents, teens, or whole family configurations. Pace and structure adapt to who is in the room.' },
];

function Services() {
  return (
    <section className="kbc-services" id="services">
      <div className="kbc-services-header">
        <SectionEyebrow>What I Offer</SectionEyebrow>
        <h2 className="kbc-h2">Three ways of <em>working</em> together.</h2>
      </div>
      <div className="kbc-services-grid">
        {SERVICES.map(s => (
          <div key={s.num} className="kbc-service-card">
            <div className="kbc-service-num">{s.num}</div>
            <div className="kbc-service-title">{s.title}</div>
            <p className="kbc-service-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Services = Services;
