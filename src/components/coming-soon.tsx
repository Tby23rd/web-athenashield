"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative z-10 text-center">
        {/* Animated blobs in background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-200 dark:text-cyan-800 mb-6">
            Coming Soon!
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 dark:text-cyan-700 mb-8">
            We&apos;re working on something exciting! Stay tuned for updates.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-32 h-32 bg-cyan-100 dark:bg-cyan-100 rounded-full flex items-center justify-center"
            >
              <span className="text-6xl">✨</span>
            </motion.div>
            <p className="text-cyan-300 dark:text-cyan-800 mt-8">
              Want to be the first to know when we launch?
            </p>
            <a
              href="/contact"
              className="inline-block bg-cyan-100  text-white px-8 py-3 rounded-full hover:bg-cyan-300 dark:hover:bg-cyan-200 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Notify Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
