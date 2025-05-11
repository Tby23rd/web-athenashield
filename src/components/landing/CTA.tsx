'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const CTA = () => {
  const handleDemo = () => {
    window.location.href = 'https://calendly.com/hello-athenashield/athenashield-intro';
  };

  const handleContact = () => {
    window.location.href = 'https://demo-athenashield.netlify.app/onboarding';
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-cyan-100 to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/50 dark:bg-gray-700/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-800/30 dark:bg-gray-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300/40 dark:bg-gray-500/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

     {/* Content */}
<div className="relative container mx-auto px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-5xl font-extrabold mb-6 text-white">
      Ready to Protect Your Inbox with AthenaShield?
    </h2>
    <p className="text-xl mb-10 text-white/90">
      Join early adopters using AI to block phishing, detect threats, and secure communication—before damage is done.
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button
        onClick={handleDemo}
        className="px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Get Early Access
      </Button>
      <Button
        onClick={handleContact}
        className="px-8 py-4 bg-transparent backdrop-blur-sm text-white border-2 border-white/80 dark:border-gray-300/80 rounded-full font-semibold hover:bg-white/10 dark:hover:bg-gray-700/10 hover:border-white dark:hover:border-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        View a Demo
      </Button>
    </div>
  </div>
</div>

    </section>
  );
};

export default CTA;
