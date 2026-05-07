'use client';

import { useEffect, useState } from 'react';
import LogoMark from './LogoMark';
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
        <LogoMark />
        <span className={styles['kbc-nav-brand-text']}>
          <span className={styles['kbc-nav-wordmark']}>Kelly Baker Thomas</span>
          <span className={styles['kbc-nav-descriptor']}>
            Licensed Therapist
          </span>
        </span>
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
