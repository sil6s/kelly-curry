import type { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useState } from 'react';
import styles from './Website.module.css';

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: 'In-person',
    message: '',
  });

  if (!isOpen) return null;

  function update(
    field: keyof typeof form,
  ): (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void {
    return (event) => setForm({ ...form, [field]: event.target.value });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function close() {
    setSubmitted(false);
    onClose();
  }

  function stopPropagation(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <div className={styles['kbc-modal-backdrop']} onClick={close}>
      <div
        className={styles['kbc-modal']}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        onClick={stopPropagation}
      >
        <button
          className={styles['kbc-modal-close']}
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>
        {!submitted ? (
          <>
            <div className={styles['kbc-eyebrow']}>Request a Consultation</div>
            <h2 className={styles['kbc-modal-title']} id="consultation-title">
              Request Consultation
            </h2>
            <form className={styles['kbc-modal-form']} onSubmit={submit}>
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
                  Preferred Appointment Type
                </span>
                <select
                  value={form.appointmentType}
                  onChange={update('appointmentType')}
                >
                  <option>In-person</option>
                  <option>Telehealth</option>
                </select>
              </label>
              <label className={styles['kbc-field']}>
                <span className={styles['kbc-field-label']}>Message</span>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={update('message')}
                />
              </label>
              <button className={styles['kbc-pill']} type="submit">
                Request Consultation
              </button>
            </form>
          </>
        ) : (
          <div className={styles['kbc-modal-success']}>
            <div className={styles['kbc-eyebrow']}>Thank You</div>
            <p className={styles['kbc-body']}>
              Thank you. I’ll be in touch shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
