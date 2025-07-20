import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pata Pushpo - Plant Nursery | Fresh Plants & Garden Solutions',
  description: 'Pata Pushpo is your trusted plant nursery offering fresh plants, garden solutions, and expert gardening advice. Contact us at 01736-693033 for quality plants and gardening services.',
  keywords: 'plant nursery, garden plants, fresh plants, gardening, Pata Pushpo, nursery Bangladesh',
  authors: [{ name: 'Pata Pushpo' }],
  openGraph: {
    title: 'Pata Pushpo - Plant Nursery | Fresh Plants & Garden Solutions',
    description: 'Your trusted plant nursery offering fresh plants, garden solutions, and expert gardening advice.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Pata Pushpo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pata Pushpo - Plant Nursery',
    description: 'Your trusted plant nursery offering fresh plants and garden solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://patapushpo.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}