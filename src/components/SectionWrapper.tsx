import type { ReactNode } from 'react';
import styles from '../styles/Website.module.css';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function SectionWrapper({
  children,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${styles['kbc-section-wrapper']} ${className}`}
    >
      {children}
    </section>
  );
}
