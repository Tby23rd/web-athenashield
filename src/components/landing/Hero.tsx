'use client';

import React from 'react';

const Hero = () => {
  const handleDemo = () => {
    window.location.href = 'https://demo-athenashield.netlify.app/';
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Section */}
            <div className="lg:w-1/2 lg:mt-0 mt-10 text-center lg:text-left">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white my-6 leading-tight">
                One AI to Protect Your{' '}
                <span className="text-cyan-600 dark:text-cyan-400">Inbox from Threats</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
                AthenaShield uses AI to detect phishing, scan your inbox, and alert you before attacks happen — no plugins, no stress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={handleDemo}
                  className="px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Early Access
                </button>
                <button
                  onClick={handleDemo}
                  className="px-8 py-4 border-2 border-white/80 dark:border-gray-300/80 text-cyan-700 dark:text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 dark:hover:bg-gray-700/10 hover:border-white dark:hover:border-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Partner With Us
                </button>
              </div>
            </div>

            {/* Video Section */}
            <div className="lg:w-1/2 w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-auto"
                controls
                autoPlay
                muted
                playsInline
                poster="/video-thumbnail.jpg"
                style={{ maxHeight: '540px' }}
              >
                <source src="/videos/athenaproduct.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
