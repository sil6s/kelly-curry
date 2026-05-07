import type { MouseEventHandler, ReactNode } from 'react';
import styles from './Website.module.css';

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className={styles['kbc-eyebrow']}>{children}</div>;
}

type PillButtonProps = {
  children: ReactNode;
  variant?: 'rose' | 'charcoal';
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  href?: string;
};

export function PillButton({
  children,
  variant = 'rose',
  onClick,
  href,
}: PillButtonProps) {
  const cls = `${styles['kbc-pill']} ${styles[`kbc-pill-${variant}`]}`;

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
}

export function Diamond({
  size = 80,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={`${styles['kbc-diamond'] ?? ''} ${className}`}
      viewBox="0 0 80 80"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <rect
        x="14"
        y="14"
        width="52"
        height="52"
        transform="rotate(45 40 40)"
        fill="none"
        stroke="#c4a882"
        strokeWidth="1.2"
      />
      <rect
        x="26"
        y="26"
        width="28"
        height="28"
        transform="rotate(45 40 40)"
        fill="none"
        stroke="#c4a882"
        strokeWidth="0.7"
        opacity="0.5"
      />
    </svg>
  );
}
