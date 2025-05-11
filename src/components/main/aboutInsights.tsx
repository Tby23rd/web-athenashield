"use client";

import React from 'react';

const AthenaShieldInsights = () => {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-center m-4 text-gray-900 dark:text-white">
        ✨ Why Email Security Needs Innovation ✨
      </h2>

      <div className="mb-6 lg:m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Email Threat Landscape */}
        <div className="p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-cyan-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📈 Phishing Attacks Are Rising</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Email threats are evolving fast—causing over <span className="text-4xl font-extrabold ">$10B</span> in losses last year alone. AthenaShield helps you stay ahead. 🔒
          </p>
        </div>

        {/* AI-Powered Defense */}
        <div className="p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-cyan-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🤖 Smarter AI, Safer Inbox</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            AthenaShield’s custom AI flags suspicious emails with <span className="text-4xl font-extrabold ">90%</span> accuracy—reducing manual review and alert fatigue.
          </p>
        </div>

        {/* Content Clarity */}
        <div className="p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-cyan-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🔍 Know What’s Real</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="text-4xl font-extrabold ">65%</span> of users report being unsure if a message is real. AthenaShield helps users take action with confidence. ✅
          </p>
        </div>

        {/* Privacy Trust */}
        <div className="p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-cyan-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🛡️ Built with Privacy in Mind</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="text-4xl font-extrabold ">70%</span> of users worry about surveillance. AthenaShield never uses your inbox data for training—your content stays yours.
          </p>
        </div>

        {/* User Retention */}
        <div className="p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-cyan-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💬 Real-Time Support That Stays</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            AthenaShield gives proactive alerts, not just logs. That’s why users stay engaged <span className="text-4xl font-extrabold ">2x longer</span> than legacy security tools. 📬
          </p>
        </div>

        {/* Quantum-Ready */}
        <div className="p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-cyan-100 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🔮 Quantum-Ready Infrastructure</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            From post-quantum encryption to future attack simulations, AthenaShield is built to scale with tomorrow’s threats. 🧠⚛️
          </p>
        </div>
      </div>
    </>
  );
};

export default AthenaShieldInsights;
