"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-200 dark:bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-200 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <CheckCircle className="w-24 h-24 text-cyan-100 dark:text-cyan-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Your message has been sent successfully. We&apos;ll get back to you soon.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-cyan-100 text-white rounded-lg font-semibold hover:bg-cyan-100 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors"
          >
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
