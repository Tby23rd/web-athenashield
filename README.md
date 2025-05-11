This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Specialists Page Components

The specialists page is designed to showcase our platform's capabilities for health and wellness professionals, including therapists, nutritionists, massage therapists, and medical specialists. The page consists of three main components:

### 1. SpecialistHero Component
Located in `src/components/specialists/specialisthero.tsx`

A hero section that introduces the platform's features for health and wellness specialists.

**Features:**
- Responsive design with gradient background
- Clear value proposition for different types of specialists
- Three key feature highlights with icons
- Call-to-action button for early access signup

**Key Elements:**
- Main heading: "AI-Powered Tools for Health & Wellness Specialists"
- Subheading explaining the platform's benefits
- Three feature cards highlighting:
  - Smart Practice Management
  - Comprehensive Client Tracking
  - AI-Powered Insights

### 2. SpecialistFeatures Component
Located in `src/components/specialists/specialistfeatures.tsx`

A comprehensive features section showcasing nine key capabilities of the platform.

**Features:**
- Grid layout with responsive design
- Interactive feature cards with hover effects
- Icons for visual representation
- Call-to-action section at the bottom

**Key Features Displayed:**
1. AI-Powered Insights
2. Smart Scheduling
3. Client Management
4. Seamless Integration
5. Privacy-First Design
6. Progress Analytics
7. Real-Time Updates
8. Practice Enhancement
9. Professional Network

### 3. SpecialistHow Component
Located in `src/components/specialists/specialisthow.tsx`

A step-by-step guide explaining how to get started with the platform.

**Features:**
- Animated transitions using Framer Motion
- Alternating layout for visual interest
- Responsive design with image support
- Clear progression of steps

**Steps:**
1. Connect Your Practice
2. Access AI Tools
3. Enhance Client Care
4. Grow Your Practice

### Usage

To implement the specialists page:

1. Import the components in your page file:
```typescript
import SpecialistHero from '@/components/specialists/specialisthero';
import SpecialistFeatures from '@/components/specialists/specialistfeatures';
import SpecialistHow from '@/components/specialists/specialisthow';
```

2. Add them to your page component:
```typescript
const Page: React.FC = () => {
  return (
    <>
      <SpecialistHero/>
      <SpecialistHow/>
      <SpecialistFeatures/>
    </>
  );
};
```

### Dependencies
- React
- React Bootstrap
- Framer Motion
- React Icons (Fa* components)
- Next.js Image component

### Styling
The components use Tailwind CSS for styling and include:
- Responsive design breakpoints
- Gradient backgrounds
- Hover effects
- Shadow effects
- Custom animations

### Images
The components expect the following images in the public directory:
- `/images/screenshots/nb1.png`
- `/images/screenshots/nb2.png`
- `/images/screenshots/nb3.png`
- `/images/screenshots/nb4.png`

Make sure these images are available before deploying the page.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── businesses/        # Business-focused pages
│   ├── clinics/          # Clinic-focused pages
│   ├── researchers/      # Researcher-focused pages
│   ├── specialists/      # Specialist-focused pages
│   └── womxn/           # Individual user pages
├── components/           # Reusable React components
│   ├── businesses/      # Business-specific components
│   ├── clinics/        # Clinic-specific components
│   ├── main/           # Shared components
│   ├── researchers/    # Researcher-specific components
│   ├── specialists/    # Specialist-specific components
│   └── womxn/         # Individual user components
└── styles/             # Global styles and Tailwind config
```

## Core Components

### Main Components
Located in `src/components/main/`

#### Hero Component
- Main landing page hero section
- Features animated text and gradient backgrounds
- Responsive design with mobile optimization

#### Features Component
- Tabbed interface for different user types
- Interactive feature showcase
- Animated transitions between tabs

### Business Components
Located in `src/components/businesses/`

#### BusinessHero
- Introduction to business features
- Key value propositions
- Call-to-action section

#### BusinessFeatures
- Grid layout of business-specific features
- Interactive cards with hover effects
- Responsive design

#### BusinessHow
- Step-by-step guide for business setup
- Animated transitions
- Image-based instructions

### Clinic Components
Located in `src/components/clinics/`

#### ClinicHero
- Healthcare provider-focused introduction
- Key medical features
- HIPAA compliance highlights

#### ClinicFeatures
- Medical practice management features
- Patient tracking capabilities
- Integration options

### Researcher Components
Located in `src/components/researchers/`

#### ResearcherHero
- Research-focused introduction
- Data collection features
- Collaboration tools

#### ResearcherFeatures
- Research-specific tools
- Data analysis capabilities
- Publication support

### Individual User Components
Located in `src/components/womxn/`

#### womxnHero
- Personal health tracking introduction
- User-focused features
- Privacy highlights

#### BenefitsSection
- Health tracking benefits
- Data visualization features
- Progress monitoring tools

## Styling and Design

### Tailwind CSS Configuration
The project uses Tailwind CSS with custom configurations:
- Custom color palette
- Responsive breakpoints
- Animation utilities
- Custom component classes

### Design System
- Consistent color scheme across components
- Typography hierarchy
- Spacing system
- Component variants

## Development Guidelines

### Component Structure
Each component follows a consistent structure:
```typescript
import React from 'react';
// imports

const ComponentName: React.FC = () => {
  // state and handlers
  
  return (
    // JSX
  );
};

export default ComponentName;
```

### Best Practices
1. Use TypeScript for type safety
2. Implement responsive design
3. Follow accessibility guidelines
4. Include proper documentation
5. Use consistent naming conventions

### Adding New Features
1. Create new component in appropriate directory
2. Update routing in app directory
3. Add necessary styles
4. Update documentation
5. Test across different devices

## Environment Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

## Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages

### Testing
- Unit tests for components
- Integration tests for features
- E2E tests for critical paths

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
For support, please open an issue in the GitHub repository or contact the maintainers.
