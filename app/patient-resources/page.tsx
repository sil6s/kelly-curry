import type { Metadata } from 'next';
import PatientResourcesPage from '@/src/pages/PatientResourcesPage';

export const metadata: Metadata = {
  title: 'Therapy Patient Resources | Kelly Baker Curry, LCSW',
  description:
    'Find therapy intake forms, appointment information, session details, and helpful resources for beginning care with Kelly Baker Curry, LCSW.',
  alternates: {
    canonical: '/patient-resources',
  },
  openGraph: {
    title: 'Therapy Patient Resources | Kelly Baker Curry, LCSW',
    description:
      'Helpful forms, fees, and appointment information for clients beginning therapy with Kelly Baker Curry, LCSW.',
    url: '/patient-resources',
  },
};

export default function Page() {
  return <PatientResourcesPage />;
}
