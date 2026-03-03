import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BharatBloomm FarmTech Private Limited | Smart AgriTech Solutions',
  description:
    'BharatBloomm FarmTech – Cultivating the Future with Technology. India\'s leading agricultural technology company empowering 92,000+ farmers with AI-powered crop monitoring, smart irrigation, and precision farming solutions.',
  keywords: 'agritech, smart farming, India agriculture, crop monitoring, precision farming, BharatBloomm, FarmTech',
  openGraph: {
    title: 'BharatBloomm FarmTech Private Limited',
    description: 'Cultivating the Future with Technology – Smart solutions for Indian farmers.',
    type: 'website',
    locale: 'en_IN',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
