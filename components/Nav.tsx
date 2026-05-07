'use client';

import { useEffect, useState } from 'react';
import styles from './Website.module.css';

const links = [
  { id: 'approach', label: 'Approach' },
  { id: 'services', label: 'Services' },
  { id: 'fees', label: 'Fees' },
  { id: 'office', label: 'Office' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`${styles['kbc-nav']} ${scrolled ? styles['kbc-nav-scrolled'] : ''}`}
    >
      <a href="#top" className={styles['kbc-nav-brand']}>
        <svg viewBox="0 0 36 32" width="28" height="28" aria-hidden="true">
          <path
            d="M 18 4 C 8 6, 2 18, 4 30 C 14 30, 26 22, 28 10 C 28 8, 24 4, 18 4 Z"
            fill="#7d8c76"
          />
          <path
            d="M 6 28 C 10 22, 16 16, 24 12"
            stroke="#faf8f4"
            strokeWidth="0.8"
            fill="none"
            opacity="0.8"
          />
        </svg>
        <span className={styles['kbc-nav-wordmark']}>Kelly Baker Curry</span>
      </a>
      <div className={styles['kbc-nav-links']}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={styles['kbc-nav-link']}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={styles['kbc-pill']}>
          Contact
        </a>
      </div>
    </nav>
  );
}
