import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Studio 9 - Professional Music School in Calgary',
    template: '%s | Studio 9 Music School',
  },
  description:
    'Studio 9 offers professional music education for all ages in Calgary. Learn piano, guitar, violin, drums, and voice with our experienced instructors. Family-friendly environment with flexible scheduling.',
  keywords: [
    'music school Calgary',
    'piano lessons Calgary',
    'guitar lessons Calgary',
    'violin lessons Calgary',
    'drum lessons Calgary',
    'voice lessons Calgary',
    'music education Calgary',
    'Studio 9 Calgary',
    'music lessons for kids',
    'adult music lessons',
    'summer music camps',
    'music instructors Calgary',
    'professional music school',
    'family-friendly music lessons',
  ],
  authors: [{ name: 'Studio 9 Music School' }],
  creator: 'Studio 9 Music School',
  publisher: 'Studio 9 Music School',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://studio9calgary.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://studio9calgary.com',
    siteName: 'Studio 9 Music School',
    title: 'Studio 9 - Professional Music School in Calgary',
    description:
      'Professional music education for all ages in Calgary. Piano, guitar, violin, drums, and voice lessons with experienced instructors.',
    images: [
      {
        url: '/music.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio 9 Music School - Professional Music Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio 9 - Professional Music School in Calgary',
    description:
      'Professional music education for all ages in Calgary. Piano, guitar, violin, drums, and voice lessons.',
    images: ['/music.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-primary`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
