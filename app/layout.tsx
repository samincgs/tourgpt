import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Providers from './providers';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TourGPT',
  description:
    'TourGPT: Your AI-powered tour advisor. Driven by OpenAI, it converses with you and provides insights about your favorite travel destinations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
