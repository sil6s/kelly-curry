import type { Metadata } from 'next';
import AboutPage from '@/src/pages/AboutPage';

export const metadata: Metadata = {
  title: 'About Kelly Baker Curry, MSW, MEd, LCSW | Fort Thomas Therapist',
  description:
    'Learn about Kelly Baker Curry, MSW, MEd, LCSW, a licensed clinical social worker providing therapy for individuals, couples, families, and co-parents in Kentucky and Ohio.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Kelly Baker Curry, MSW, MEd, LCSW | Fort Thomas Therapist',
    description:
      'Meet Kelly Baker Curry, a licensed clinical social worker serving clients in Kentucky and Ohio.',
    url: '/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
