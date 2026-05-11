import ConsultationFlow from './ConsultationFlow';
import type { AppointmentServiceType } from './ConsultationFlow';
import Modal from './Modal';

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: AppointmentServiceType;
};

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService,
}: ConsultationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="consultation-title">
      <ConsultationFlow
        titleId="consultation-title"
        defaultService={defaultService}
      />
    </Modal>
  );
}
