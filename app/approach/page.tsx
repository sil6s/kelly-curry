import type { Metadata } from 'next';
import ApproachPage from '@/src/pages/ApproachPage';

export const metadata: Metadata = {
  title: 'Therapy Approach | CBT, ACT & EFT in Fort Thomas KY',
  description:
    'Kelly’s therapy approach is calm, direct, and relationship-centered, drawing from CBT, ACT, EFT, and practical support for real-life change.',
  alternates: {
    canonical: '/approach',
  },
  openGraph: {
    title: 'Therapy Approach | CBT, ACT & EFT in Fort Thomas KY',
    description:
      'Learn about Kelly’s relationship-centered approach to therapy in Kentucky and Ohio.',
    url: '/approach',
  },
};

export default function Page() {
  return <ApproachPage />;
}
