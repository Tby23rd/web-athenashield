import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://athenashield.com'),
  title: {
    default: 'athenashield - AI-Powered Solutions for FemTech Companies',
    template: '%s | athenashield'
  },
  description: 'athenashield helps femtech brands design smarter customer experiences with AI-driven flows, from onboarding to personalized care.',
  keywords: ['femtech', 'AI', 'healthcare', 'womxn\'s health', 'digital health', 'personalization', 'customer experience', 'health tech'],
  authors: [{ name: 'athenashield Team' }],
  creator: 'athenashield Innovations Inc.',
  publisher: 'athenashield Innovations Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://athenashield.com',
    siteName: 'athenashield',
    title: 'athenashield - AI-Powered Solutions for FemTech Companies',
    description: 'athenashield helps femtech brands design smarter customer experiences with AI-driven flows, from onboarding to personalized care.',
    images: [
      {
        url: 'images/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'athenashield - Revolutionizing FemTech with AI'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'athenashield - AI-Powered Solutions for FemTech Companies',
    description: 'athenashield helps femtech brands design smarter customer experiences with AI-driven flows, from onboarding to personalized care.',
    creator: '@athenashield',
    images: ['images/logos/logo.png'],
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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: 'images/logos/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: 'images/logos/logo.png' },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['your-personal-site'],
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme) {
                    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.classList.toggle('dark', prefersDark);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://athenashield.com" />
        <link rel="sitemap" type="application/xml" href="https://athenashield.com/sitemap.xml" />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "athenashield",
              "url": "https://athenashield.com",
              "logo": "https://athenashield.comimages/logos/logo.png",
              "sameAs": [
                "https://twitter.com/athenashield",
                "https://linkedin.com/company/athenashield",
                "https://github.com/athenashield"
              ],
              "description": "athenashield helps femtech brands design smarter customer experiences with AI-driven flows, from onboarding to personalized care.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
