import type { ReactNode } from 'react';
import styles from '../styles/Website.module.css';

export default function Badge({ children }: { children: ReactNode }) {
  return <span className={styles['kbc-chip']}>{children}</span>;
}
