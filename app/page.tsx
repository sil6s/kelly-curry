import type { Metadata } from 'next';
import Home from '@/src/pages/Home';
import { SITE_URL } from '@/src/data/seo';

export const metadata: Metadata = {
  title: 'Therapist in Fort Thomas KY | Kelly Baker Curry, LCSW',
  description:
    'Kelly Baker Curry, MSW, MEd, LCSW, offers individual, couples, family, and coparenting therapy in Fort Thomas, KY, serving clients in Kentucky and Ohio.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Therapist in Fort Thomas KY | Kelly Baker Curry, LCSW',
    description:
      'Therapy in Fort Thomas, KY, for individuals, couples, families, and co-parents, with services available for clients in Kentucky and Ohio.',
    url: SITE_URL,
  },
};

export default function Page() {
  return <Home />;
}
