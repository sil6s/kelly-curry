import type { MouseEvent, ReactNode } from 'react';
import styles from '../styles/Website.module.css';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  titleId,
}: ModalProps) {
  if (!isOpen) return null;

  function stopPropagation(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <div className={styles['kbc-modal-backdrop']} onClick={onClose}>
      <div
        className={styles['kbc-modal']}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={stopPropagation}
      >
        <button
          className={styles['kbc-modal-close']}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
