import { generateMetadata } from '@/components/SEO';
import BlogSection from '@/components/blogs/blogsection';
import AthenaShieldInsights from '@/components/main/aboutInsights';

export const metadata = generateMetadata({
  title: 'Blog | AthenaShield',
  description: 'Explore the latest insights, trends, and innovations in AI-powered email security and phishing detection from the AthenaShield team.',
  canonical: '/blogs',
  type: 'website',
  tags: ['blog', 'email security', 'AI', 'cybersecurity', 'phishing', 'insights'],
});

export default function BlogsPage() {
  return (
    <div className='pt-16'>
      <AthenaShieldInsights />
      <BlogSection />
    </div>
  );
}
