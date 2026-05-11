import type { Metadata } from 'next';
import ContactPage from '@/src/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Kelly Baker Curry, LCSW | Fort Thomas KY Therapist',
  description:
    'Contact Kelly Baker Curry, MSW, MEd, LCSW, to schedule a therapy consultation in Fort Thomas, KY, with services for Kentucky and Ohio clients.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Kelly Baker Curry, LCSW | Fort Thomas KY Therapist',
    description:
      'Reach Kelly Baker Curry, LCSW, for general office questions or appointment requests in Fort Thomas, Kentucky.',
    url: '/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
