import type { Metadata } from 'next';
import AboutPage from '@/src/pages/AboutPage';

export const metadata: Metadata = {
  title: 'About | Kelly Baker Curry, MSW, MEd, LCSW | Fort Thomas, KY',
  description:
    'Learn about Kelly Baker Curry, a Licensed Clinical Social Worker serving Kentucky and Ohio, with experience in Mental Health Court and inpatient settings.',
};

export default function Page() {
  return <AboutPage />;
}
