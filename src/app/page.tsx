"use client"
import React from 'react';
import '@/app/globals.css';
import Hero from '@/components/landing/Hero';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import HowItWorks from '@/components/landing/HowItWorks';
import TargetAudience from '@/components/landing/TargetAudience';
import WhyDifferent from '@/components/landing/WhyDifferent';
import CTA from '@/components/landing/CTA';

const Page: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <TargetAudience />
      <WhyDifferent />
      <CTA />
    </main>
  );
};

export default Page;
