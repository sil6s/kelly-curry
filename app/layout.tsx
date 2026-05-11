import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { SITE_URL, siteSchema } from '@/src/data/seo';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Therapist in Fort Thomas KY | Kelly Baker Curry, LCSW',
    template: '%s',
  },
  description:
    'Kelly Baker Curry, MSW, MEd, LCSW, offers individual, couples, family, and coparenting therapy in Fort Thomas, KY, serving clients in Kentucky and Ohio.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Therapist in Fort Thomas KY | Kelly Baker Curry, LCSW',
    description:
      'Individual, couples, family, and coparenting therapy in Fort Thomas, Kentucky, for clients in Kentucky and Ohio.',
    url: '/',
    siteName: 'Kelly Baker Curry, LCSW',
    images: ['/icon.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Therapist in Fort Thomas KY | Kelly Baker Curry, LCSW',
    description:
      'Warm, relationship-centered therapy in Fort Thomas, Kentucky, for clients in Kentucky and Ohio.',
    images: ['/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
