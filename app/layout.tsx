import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import './globals.css';
import { PRODUCT, PAYPAL } from '@/lib/constants';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafbfc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1216' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tekguyz-store.vercel.app'),
  title: 'TEKGUYZ | Downey Voice Writing Student Bundle with 14-inch Laptop',
  description: 'A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.',
  openGraph: {
    title: 'TEKGUYZ | Downey Voice Writing Student Bundle with 14-inch Laptop',
    description: 'A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.',
    images: [
      {
        url: '/downey-voicewriting-student-14.jpg',
        width: 1200,
        height: 630,
        alt: 'Downey Voice Writing Student Bundle with 14-inch Laptop',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEKGUYZ | Downey Voice Writing Student Bundle',
    description: 'A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.',
    images: ['/downey-voicewriting-student-14.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Script
          id="paypal-sdk"
          src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL.clientId}&currency=${PAYPAL.currency}&intent=${PAYPAL.intent}&components=buttons,messages&enable-funding=paylater`}
          strategy="lazyOnload"
          data-namespace="paypalSDK"
        />
      </body>
    </html>
  );
}
