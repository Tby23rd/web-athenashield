'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    
    // Add the script to the document
    document.head.appendChild(script);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
  
  return null;
}

// Predefined JSON-LD schemas for common use cases
export const schemas = {
  organization: (data: {
    name: string;
    url: string;
    logo?: string;
    sameAs?: string[];
    description?: string;
    address?: {
      addressCountry: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      streetAddress?: string;
    };
    contactPoint?: {
      contactType: string;
      email?: string;
      telephone?: string;
    }[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    ...(data.logo && { logo: data.logo }),
    ...(data.sameAs && { sameAs: data.sameAs }),
    ...(data.description && { description: data.description }),
    ...(data.address && { address: { '@type': 'PostalAddress', ...data.address } }),
    ...(data.contactPoint && { contactPoint: data.contactPoint.map(point => ({ '@type': 'ContactPoint', ...point })) }),
  }),
  
  article: (data: {
    headline: string;
    description?: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author: {
      name: string;
      url?: string;
    }[];
    publisher: {
      name: string;
      logo?: string;
      url: string;
    };
    mainEntityOfPage: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    ...(data.description && { description: data.description }),
    ...(data.image && { image: data.image }),
    datePublished: data.datePublished,
    ...(data.dateModified && { dateModified: data.dateModified }),
    author: data.author.map(author => ({
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    })),
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      ...(data.publisher.logo && { logo: { '@type': 'ImageObject', url: data.publisher.logo } }),
      url: data.publisher.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.mainEntityOfPage,
    },
  }),
  
  product: (data: {
    name: string;
    description?: string;
    image?: string;
    brand?: {
      name: string;
      url?: string;
    };
    offers?: {
      price: number;
      priceCurrency: string;
      availability: string;
      url?: string;
    };
    aggregateRating?: {
      ratingValue: number;
      reviewCount: number;
    };
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    ...(data.description && { description: data.description }),
    ...(data.image && { image: data.image }),
    ...(data.brand && {
      brand: {
        '@type': 'Brand',
        name: data.brand.name,
        ...(data.brand.url && { url: data.brand.url }),
      },
    }),
    ...(data.offers && {
      offers: {
        '@type': 'Offer',
        price: data.offers.price,
        priceCurrency: data.offers.priceCurrency,
        availability: data.offers.availability,
        ...(data.offers.url && { url: data.offers.url }),
      },
    }),
    ...(data.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.aggregateRating.ratingValue,
        reviewCount: data.aggregateRating.reviewCount,
      },
    }),
  }),
  
  breadcrumbList: (data: {
    itemListElement: {
      position: number;
      name: string;
      item: string;
    }[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.itemListElement.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  }),
  
  faqPage: (data: {
    mainEntity: {
      question: string;
      answer: string;
    }[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.mainEntity.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }),
}; 