import type { ReactNode } from 'react';
import styles from '../styles/Website.module.css';

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${styles['kbc-card']} ${className}`}>{children}</div>;
}
