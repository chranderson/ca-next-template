import type { Metadata } from 'next';
import './globals.css';

import { Lato as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Footer from './components/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'CA Next Starter',
  description: 'Next.js starter with Tailwind CSS and TypeScript'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="relative bg-background flex min-h-screen flex-col ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
