'use client';

import { useEffect, useState } from 'react';
import LogoMark from './LogoMark';
import styles from '../styles/Website.module.css';

const serviceLinks = [
  { label: 'Individual Therapy', href: '/services/individual-therapy' },
  { label: 'Couples Therapy', href: '/services/couples-therapy' },
  { label: 'Family Therapy', href: '/services/family-therapy' },
  { label: 'Coparenting Therapy', href: '/services/coparenting-therapy' },
];

const links: Array<{
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}> = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', children: serviceLinks },
  { label: 'Approach', href: '/approach' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({
  onRequestConsultation,
}: {
  onRequestConsultation?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`${styles['kbc-nav']} ${scrolled ? styles['kbc-nav-scrolled'] : ''}`}
      >
        <a href="/" className={styles['kbc-nav-brand']}>
          <LogoMark />
          <span className={styles['kbc-nav-brand-text']}>
            <span className={styles['kbc-nav-wordmark']}>
              Kelly Baker Curry
            </span>
            <span className={styles['kbc-nav-descriptor']}>
              Licensed Clinical Social Worker
            </span>
          </span>
        </a>
        <div className={styles['kbc-nav-links']}>
          {links.map((l) => (
            <div key={l.href} className={styles['kbc-nav-item']}>
              <a href={l.href} className={styles['kbc-nav-link']}>
                {l.label}
              </a>
              {l.children ? (
                <div className={styles['kbc-nav-dropdown']}>
                  {l.children.map((child) => (
                    <a key={child.href} href={child.href}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          {onRequestConsultation ? (
            <button
              className={`${styles['kbc-pill']} ${styles['kbc-pill-charcoal']}`}
              type="button"
              onClick={onRequestConsultation}
            >
              Schedule a Consultation
            </button>
          ) : null}
        </div>
        <button
          className={styles['kbc-hamburger']}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={menuOpen ? styles['kbc-hamburger-open'] : ''}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div
          className={styles['kbc-mobile-menu']}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className={styles['kbc-mobile-menu-links']}>
            {links.map((l) => (
              <div key={l.href} className={styles['kbc-mobile-menu-group']}>
                <a
                  href={l.href}
                  className={styles['kbc-mobile-menu-link']}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
                {l.children
                  ? l.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className={styles['kbc-mobile-menu-sublink']}
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))
                  : null}
              </div>
            ))}
            {onRequestConsultation ? (
              <button
                className={`${styles['kbc-pill']} ${styles['kbc-mobile-menu-cta']}`}
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onRequestConsultation();
                }}
              >
                Schedule a Consultation
              </button>
            ) : null}
          </nav>
        </div>
      )}
    </>
  );
}
