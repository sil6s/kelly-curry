import type { Metadata } from 'next';
import ServicesPage from '@/src/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Individual, Couples & Family Therapy in Fort Thomas KY',
  description:
    'Explore individual therapy, couples therapy, family therapy, and coparenting therapy with Kelly Baker Curry, LCSW, serving clients in Kentucky and Ohio.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Individual, Couples & Family Therapy in Fort Thomas KY',
    description:
      'Explore therapy services with Kelly Baker Curry, LCSW, for clients in Kentucky and Ohio.',
    url: '/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
