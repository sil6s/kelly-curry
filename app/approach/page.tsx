import type { Metadata } from 'next';
import ApproachPage from '@/src/pages/ApproachPage';

export const metadata: Metadata = {
  title: 'Approach | Therapy in Fort Thomas, KY | Kelly Baker Curry',
  description:
    "Learn about Kelly Baker Curry's therapy approach — warm, relational, and grounded in CBT, ACT, and emotionally focused therapy.",
};

export default function Page() {
  return <ApproachPage />;
}
