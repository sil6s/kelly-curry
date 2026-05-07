import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
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
  title: 'Kelly Baker Thomas · LCSW Talk Therapy',
  description:
    'Thoughtful, relational therapy for individuals, couples, and families in Fort Thomas, Kentucky.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
