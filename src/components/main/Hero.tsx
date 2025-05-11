'use client';

import React from 'react';
import { FaMobileAlt, FaAtom, FaUsers } from 'react-icons/fa';

const ResearcherHero: React.FC = () => {
  const handleExploreFeatures = () => {
    window.location.href = 'https://demo-athenashield.netlify.app/';
  };

  return (
    <section className="bg-gradient-to-br from-black via-blue-900 to-blue-700 text-white py-24 px-6 sm:px-10 lg:px-20 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-50 to-blue-100 drop-shadow-xl">
          Quantum-Enhanced. AI-Powered. Research-Ready.
        </h1>
        <p className="text-2xl md:text-3xl mb-10 text-center text-white">
          A unified platform where <span className="font-bold italic">email security, threat research, and AI innovation</span> converge.
        </p>
        <div className="flex justify-center mb-16">
          <button
            onClick={handleExploreFeatures}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Explore AthenaShield
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <FaMobileAlt className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-semibold text-white mb-3">Private & Encrypted</h3>
            <p className="text-lg text-white">
              A <span className="font-bold italic">secure inbox assistant</span> with offline capabilities for sensitive users.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <FaAtom className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-semibold text-white mb-3">Quantum Threat Simulation</h3>
            <p className="text-lg text-white">
              <span className="font-bold italic">QML & anomaly prediction</span> reveal new attack vectors before they happen.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <FaUsers className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-semibold text-white mb-3">AI That Learns From Threats</h3>
            <p className="text-lg text-white">
              We <span className="font-bold italic">fine-tune models</span> using anonymized attack data and real-world reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearcherHero;
