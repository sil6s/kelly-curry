import type { Metadata } from 'next';
import ServicesPage from '@/src/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Services | Therapy in Fort Thomas, KY | Kelly Baker Curry',
  description:
    'Individual, couples, and family therapy in Fort Thomas, Kentucky. Kelly Baker Curry, LCSW offers warm, relationship-centered support.',
};

export default function Page() {
  return <ServicesPage />;
}
