import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const font = Inter({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'TourAI',
  description:
    'TourAI: Your AI-powered tour advisor. Driven by OpenAI, it converses with you and provides insights about your favorite travel destinations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
