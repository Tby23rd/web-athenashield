"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LinkedIn } from '@mui/icons-material';
import AboutUs from '@/components/main/about';
import ContactForm from '@/components/about/ContactForm';
import TeamSection from './team';
import FAQ from '../main/FAQ';

const benefits = [
  {
    title: "Seamless Integration",
    description: "Integrate our AI with your email workflow to identify threats automatically—no plugins required."
  },
  {
    title: "Real-Time Threat Alerts",
    description: "Receive instant notifications when suspicious patterns or phishing emails are detected."
  },
  {
    title: "Security Without Complexity",
    description: "Protect users across devices and platforms with zero-setup onboarding."
  },
  {
    title: "Intelligent Inbox Analysis",
    description: "Understand and analyze communication patterns to identify and prevent social engineering attacks."
  }
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" id="about-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Defend Your Inbox with AI
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              AthenaShield detects phishing, flags dangerous content, and protects your inbox in real time—no extensions or passwords needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16" id="about-us">
        <div className="container mx-auto px-4">
          <AboutUs />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16" id="team">
        <div className="container mx-auto px-4">
          <TeamSection />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why AthenaShield Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions About Email Protection</h2>
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk Security</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Reach out to learn how AthenaShield can enhance your email protection.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg" id="careers">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Work with AthenaShield</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We&apos;re always on the lookout for security-minded engineers and designers. If that&apos;s you, connect with us.
            </p>
            <a
              href="https://www.linkedin.com/company/athenashield"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-100 transition-colors"
            >
              <LinkedIn />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
