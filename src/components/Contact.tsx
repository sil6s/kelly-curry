'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { PillButton, SectionEyebrow } from './Atoms';
import styles from '../styles/Website.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });

  function update(field: keyof typeof form) {
    return (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setForm({ ...form, [field]: e.target.value });
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles['kbc-contact']} id="contact">
      <div className={styles['kbc-contact-grid']}>
        <div className={styles['kbc-contact-text']}>
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className={styles['kbc-h2']}>
            Reach out for a brief, <em>free</em> consultation.
          </h2>
          <p className={styles['kbc-body']}>
            Taking the first step can feel vulnerable. You do not need to have
            the perfect words. Send a short message about what you are looking
            for, and Kelly will follow up about availability, fit, and next
            steps.
          </p>
        </div>
        <div className={styles['kbc-contact-form-wrap']}>
          {!submitted ? (
            <form className={styles['kbc-contact-form']} onSubmit={submit}>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                />
              </label>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                />
              </label>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>
                  Phone (optional)
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </label>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>
                  Service interest
                </span>
                <select
                  value={form.serviceInterest}
                  onChange={update('serviceInterest')}
                >
                  <option value="">Select one</option>
                  <option value="individual">Individual therapy</option>
                  <option value="couples">Couples therapy</option>
                  <option value="family">Family therapy</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </label>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>
                  What brings you here
                </span>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={update('message')}
                />
              </label>
              <PillButton>Send Message</PillButton>
              <p className={styles['kbc-form-note']}>
                Please avoid including urgent, crisis, or highly sensitive
                clinical details in this form. If this is an emergency, call
                911 or contact a crisis resource immediately.
              </p>
            </form>
          ) : (
            <div className={styles['kbc-contact-confirm']}>
              <div className={styles['kbc-eyebrow']}>Thank You</div>
              <p className={styles['kbc-body']}>
                Your note has been received. I will reply within two business
                days, often sooner.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
