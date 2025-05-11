'use client';

import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
      <p className="mb-6">Effective Date: January 1, 2024</p>

      <p className="mb-6">
        We use cookies and similar technologies on our website to improve your experience and provide personalized, secure, and relevant services. This Cookies Policy explains how AthenaShield Inc. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies and how you can control them.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. What are Cookies?</h2>
      <p className="mb-6">
        Cookies are small text files stored on your device when you visit a website. They help us recognize your browser, remember your preferences, and enhance your user experience.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Essential Cookies:</strong> Required for the basic operation of our website and services.</li>
        <li><strong>Performance Cookies:</strong> Help us measure site traffic and improve functionality based on anonymous usage data.</li>
        <li><strong>Functionality Cookies:</strong> Enable enhanced features, like remembering your theme or language preference.</li>
        <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver content and ads relevant to your interests, when applicable.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
      <p className="mb-4">We use cookies to:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Ensure secure and reliable website performance</li>
        <li>Understand how users interact with our site and AI tools</li>
        <li>Enhance your browsing and support experience</li>
        <li>Provide you with tailored content or notifications</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Managing Your Cookie Preferences</h2>
      <p className="mb-6">
        You can control cookie settings at any time through your browser or via our cookie consent banner. Rejecting certain cookies may affect the performance or personalization of the site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
      <p className="mb-6">
        AthenaShield may update this Cookies Policy periodically to reflect changes in legal requirements or our practices. Please check this page regularly for updates.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns about our cookie practices, please contact us at:{' '}
        <a href="mailto:hello@athenashield.com" className="text-cyan-700 underline">
          hello@athenashield.com
        </a>
      </p>

      <p className="mb-6">
        By continuing to use our website, you consent to our use of cookies as described in this policy.
      </p>
    </div>
  );
};

export default CookiesPolicy;
