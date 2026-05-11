import type { Metadata } from 'next';
import FeesPage from '@/src/pages/FeesPage';

export const metadata: Metadata = {
  title: 'Fees & Insurance | Kelly Baker Curry, LCSW',
  description:
    'Session fees, accepted insurance, and payment details for individual, couples, family, and co-parenting therapy with Kelly Baker Curry, LCSW.',
};

export default function Page() {
  return <FeesPage />;
}
