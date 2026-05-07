'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import {
  CalendarIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  UserIcon,
} from './icons';
import styles from '../styles/Website.module.css';

type ConsultationFormProps = {
  successMessage?: string;
};

export default function ConsultationForm({
  successMessage = 'Thank you for reaching out. I’ll respond as soon as I’m able.',
}: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: 'In-person',
    message: '',
  });

  function update(field: keyof typeof form) {
    return (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setForm({ ...form, [field]: event.target.value });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles['kbc-modal-success']}>
        <div className={styles['kbc-eyebrow']}>Thank You</div>
        <p className={styles['kbc-body']}>{successMessage}</p>
      </div>
    );
  }

  return (
    <form className={styles['kbc-modal-form']} onSubmit={submit}>
      <InputField
        label="Name"
        icon={<UserIcon />}
        type="text"
        required
        value={form.name}
        onChange={update('name')}
      />
      <InputField
        label="Email"
        icon={<MailIcon />}
        type="email"
        required
        value={form.email}
        onChange={update('email')}
      />
      <InputField
        label="Phone (optional)"
        icon={<PhoneIcon />}
        type="tel"
        value={form.phone}
        onChange={update('phone')}
      />
      <InputField
        kind="select"
        label="Preferred Appointment Type"
        icon={<CalendarIcon />}
        options={['In-person', 'Telehealth']}
        value={form.appointmentType}
        onChange={update('appointmentType')}
      />
      <InputField
        kind="textarea"
        label="Message"
        icon={<MessageIcon />}
        rows={4}
        required
        value={form.message}
        onChange={update('message')}
      />
      <div className={styles['kbc-form-note']}>
        This form is not monitored for emergencies.
        <br />
        If you are in crisis, call 911 or your local emergency number.
      </div>
      <div className={styles['kbc-form-availability']}>
        As a solo provider, availability is limited and I may not always be
        accepting new clients.
      </div>
      <Button type="submit">Request Consultation</Button>
    </form>
  );
}
