import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' ;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = 'images/logos/athenashield-logo.png',
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['AthenaShield Team'],
  tags = [],
}: SEOProps): Metadata {
  const baseUrl = 'https://athenashield.com';
  const fullTitle = title.includes('|') ? title : `${title} | AthenaShield`;
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}/${ogImage}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullCanonical,
      siteName: 'AthenaShield',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors,
      tags,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullOgImage],
      creator: '@AthenaShieldAI',
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
      other: {
        me: ['your-personal-site'],
      },
    },
  };
}
