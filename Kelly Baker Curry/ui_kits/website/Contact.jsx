/* global React, SectionEyebrow, PillButton */
const { useState } = React;

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="kbc-contact" id="contact">
      <div className="kbc-contact-grid">
        <div className="kbc-contact-text">
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="kbc-h2">Reach out for a brief, <em>free</em> consultation.</h2>
          <p className="kbc-body">
            Send a note with what brings you here, and I will reply within two business days. Consultations are 15 minutes by phone, with no obligation.
          </p>
        </div>
        <div className="kbc-contact-form-wrap">
          {!submitted ? (
            <form className="kbc-contact-form" onSubmit={submit}>
              <label className="kbc-field">
                <span className="kbc-field-label">Name</span>
                <input type="text" required value={form.name} onChange={update('name')}/>
              </label>
              <label className="kbc-field">
                <span className="kbc-field-label">Email</span>
                <input type="email" required value={form.email} onChange={update('email')}/>
              </label>
              <label className="kbc-field">
                <span className="kbc-field-label">What brings you here</span>
                <textarea rows="4" required value={form.message} onChange={update('message')}/>
              </label>
              <PillButton>Send Message</PillButton>
            </form>
          ) : (
            <div className="kbc-contact-confirm">
              <div className="kbc-eyebrow">Thank You</div>
              <p className="kbc-body">Your note has been received. I will reply within two business days, often sooner.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
