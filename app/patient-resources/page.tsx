import type { Metadata } from 'next';
import PatientResourcesPage from '@/src/pages/PatientResourcesPage';

export const metadata: Metadata = {
  title: 'Patient Resources | Therapy Forms in Fort Thomas, KY',
  description:
    'Access intake forms, new client information, billing guidance, and therapy resources for Kelly Baker Curry, LCSW in Fort Thomas, Kentucky.',
};

export default function Page() {
  return <PatientResourcesPage />;
}
