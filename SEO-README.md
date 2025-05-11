# SEO Best Practices for athenashield

This document outlines the SEO best practices implemented in the athenashield website and provides guidance on how to maintain and improve your site's search engine optimization.

## Implemented SEO Features

### 1. Sitemap

A comprehensive sitemap has been implemented to help search engines discover and index all pages on your website. The sitemap includes:

- All main pages with appropriate priorities
- Blog posts and articles
- Dynamic routes
- Proper change frequencies

### 2. Robots.txt

A robots.txt file has been configured to:

- Allow search engines to crawl your site
- Disallow access to sensitive routes (API, admin)
- Point to your sitemap

### 3. Metadata

Each page has been configured with proper metadata including:

- Title tags
- Meta descriptions
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs

### 4. Structured Data (JSON-LD)

Structured data has been implemented using JSON-LD to enhance rich snippets in search results:

- Organization schema
- Article schema for blog posts
- Product schema for services
- Breadcrumb schema for navigation
- FAQ schema for FAQ pages

### 5. Custom Error Pages

Custom 404 and error pages have been implemented to:

- Provide a good user experience
- Guide users back to useful content
- Prevent search engines from indexing error pages

## How to Use the SEO Components

### Using the SEO Component

The `generateMetadata` function in `src/components/SEO.tsx` can be used to generate metadata for any page:

```tsx
import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description for search engines and social sharing.',
  canonical: '/page-path',
  ogImage: 'images/custom-image.jpg',
  type: 'website', // or 'article', 'product'
  publishedTime: '2023-06-15T10:00:00Z', // for articles
  modifiedTime: '2023-06-16T14:30:00Z', // for articles
  authors: ['Author Name'], // for articles
  tags: ['tag1', 'tag2'], // for articles
});
```

### Using the JSON-LD Component

The `JsonLd` component in `src/components/JsonLd.tsx` can be used to add structured data to any page:

```tsx
import JsonLd, { schemas } from '@/components/JsonLd';

// Using predefined schemas
const organizationSchema = schemas.organization({
  name: 'athenashield',
  url: 'https://athenashield.com',
  logo: 'https://athenashield.com/images/logos/logo.png',
  sameAs: [
    'https://twitter.com/athenashield',
    'https://linkedin.com/company/athenashield',
  ],
  description: 'athenashield helps femtech brands design smarter customer experiences with AI-driven flows.',
});

// In your component
return (
  <>
    <JsonLd data={organizationSchema} />
    {/* Page content */}
  </>
);
```

## SEO Best Practices

### Content

1. **Create High-Quality Content**: Focus on creating valuable, informative content that addresses user needs.
2. **Use Proper Heading Structure**: Use H1 for the main title and H2-H6 for subheadings in a logical hierarchy.
3. **Include Keywords Naturally**: Incorporate relevant keywords naturally throughout your content.
4. **Keep Content Fresh**: Regularly update your content to keep it relevant and valuable.

### Technical SEO

1. **Ensure Mobile Responsiveness**: All pages should be fully responsive and provide a good user experience on all devices.
2. **Optimize Page Speed**: Minimize load times by optimizing images, using lazy loading, and minimizing JavaScript.
3. **Use HTTPS**: Ensure your site is served over HTTPS for security and SEO benefits.
4. **Implement Schema Markup**: Use appropriate schema markup for different types of content.

### Link Building

1. **Create Internal Links**: Link to relevant content within your site to help users and search engines navigate.
2. **Build Quality Backlinks**: Focus on getting links from reputable, relevant websites.
3. **Monitor Broken Links**: Regularly check for and fix broken links on your site.

## Google Search Console

To monitor your site's performance in search results:

1. **Verify Your Site**: Add your site to Google Search Console and verify ownership.
2. **Submit Your Sitemap**: Submit your sitemap to Google Search Console to help Google discover and index your pages.
3. **Monitor Performance**: Regularly check your search performance, including impressions, clicks, and average position.
4. **Fix Issues**: Address any issues reported by Google Search Console, such as mobile usability problems or crawl errors.

## Regular SEO Maintenance

1. **Audit Your Site**: Regularly audit your site for SEO issues using tools like Google Search Console, Lighthouse, or third-party SEO tools.
2. **Update Metadata**: Review and update page titles and descriptions to ensure they're optimized and relevant.
3. **Check for Broken Links**: Regularly check for and fix broken links on your site.
4. **Monitor Competitors**: Keep an eye on your competitors' SEO strategies and adapt accordingly.

By following these best practices and using the implemented SEO components, you can ensure that your site is well-optimized for search engines and provides a good user experience. 