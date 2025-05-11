'use client';

import React from 'react';

const AthenaShieldPartnerships = () => {
  const handleExploreFeatures = () => {
    window.location.href = 'https://calendly.com/hello-athenashield/athenashield-intro';
  };

  return (
    <section className="lg:p-8 p-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-md animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-6">
          Partner with Us in Advancing Inbox Security
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">Cybersecurity Firms</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">Research Institutions</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">IT Leaders</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">Workplace Safety Teams</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">Quantum Researchers</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">Privacy-Conscious Users</h3>
          </div>
        </div>
        <button
          onClick={handleExploreFeatures}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          Become a Partner
        </button>
      </div>
    </section>
  );
};

export default AthenaShieldPartnerships;
