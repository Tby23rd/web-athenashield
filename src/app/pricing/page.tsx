'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const plans = [
  {
    name: 'Free',
    monthly: '$0/mo',
    yearly: '$0/yr',
    description: 'Get started with AI-powered email analysis and basic threat reports.',
    features: [
      'Scan up to 100 emails/mo',
      'Phishing detection',
      'Threat summary',
      'Community support',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Starter',
    monthly: '$99/mo',
    yearly: '$990/yr',
    description: 'Ideal for individuals and startups seeking enhanced inbox protection.',
    features: [
      'Up to 1,000 emails/mo',
      'Smart threat detection',
      'AI insights & summaries',
      '24-hour support',
      'Daily alerts',
    ],
    cta: 'Start Protection',
  },
  {
    name: 'Professional',
    monthly: '$299/mo',
    yearly: '$2990/yr',
    description: 'For teams and small businesses with higher security demands.',
    features: [
      'Unlimited email scans',
      'AI-powered threat scoring',
      'Smart filtering & rules',
      'Team dashboard',
      'Priority support',
    ],
    cta: 'Go Professional',
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    yearly: 'Custom',
    description: 'Custom solutions, security compliance, and enterprise-level support.',
    features: [
      'Advanced analytics & integrations',
      'Custom policies & audits',
      'Dedicated account manager',
      '24/7 support',
      'Enterprise compliance',
    ],
    cta: 'Contact Sales',
  },
];

const PricingPage = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const handleDemo = () => {
    window.location.href = 'https://demo-athenashield.netlify.app/';
  };

  return (
    <div className="min-h-screen bg-cyan-50 text-gray-900 dark:bg-gray-900 dark:text-white py-20 relative overflow-hidden">
      <div className="px-6 relative z-10">
        <h1 className="text-5xl font-extrabold text-center mb-6">Simple, Transparent Pricing</h1>
        <p className="text-lg text-center mb-12">
          Choose the protection level that fits your needs — cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="mb-16 flex justify-center gap-4">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 rounded-full font-semibold ${
              billing === 'monthly' ? 'bg-cyan-600 text-white' : 'bg-white  text-cyan-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`px-6 py-2 rounded-full font-semibold ${
              billing === 'yearly' ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-600'
            }`}
          >
            Yearly <span className="text-sm">(2 months free)</span>
          </button>
        </div>

        {/* Plan Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border shadow-lg transition-transform transform hover:scale-[1.02] ${
                idx === 1
                  ? 'bg-white border-cyan-100 dark:bg-slate-900 z-20'
                  : 'bg-white/90 dark:bg-slate-900/90 border-gray-200  z-10'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white dark:text-black text-xs font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold mb-3">{plan.name}</h2>
              <p className="text-4xl font-semibold mb-2">
                {billing === 'monthly' ? plan.monthly : plan.yearly}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{plan.description}</p>
              <ul className="space-y-3 text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleDemo}
                className={`w-full py-3 rounded-lg text-lg font-semibold ${
                  idx === 1
                    ? 'bg-cyan-600 text-white dark:text-black hover:bg-cyan-700'
                    : 'bg-cyan-100 text-cyan-900 hover:bg-cyan-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need enterprise support or a custom solution?
            <Link href="/about#contact" className="ml-2 underline text-cyan-700 hover:text-cyan-800">
              Contact Us
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
