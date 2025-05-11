import { generateMetadata } from '@/components/SEO';
import AboutClient from '@/components/about/AboutClient';

export const metadata = generateMetadata({
  title: 'About AthenaShield',
  description: 'Learn about AthenaShield’s mission to protect your inbox using AI-powered email security and threat detection.',
  canonical: '/about',
  type: 'website',
  tags: ['about', 'email security', 'AI', 'phishing detection', 'AthenaShield'],
});

export default function AboutPage() {
  return <AboutClient />;
}
