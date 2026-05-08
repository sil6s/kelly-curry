import ConsultationFlow from './ConsultationFlow';
import Modal from './Modal';
import styles from '../styles/Website.module.css';

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="consultation-title">
      <div className={styles['kbc-eyebrow']}>Request a Consultation</div>
      <h2 className={styles['kbc-modal-title']} id="consultation-title">
        Request Consultation
      </h2>
      <ConsultationFlow />
    </Modal>
  );
}
