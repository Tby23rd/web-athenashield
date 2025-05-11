import React from 'react';

const TargetAudience = () => {
 // Refined audience descriptions for clarity and broader reach

 const audiences = [
  {
    title: 'IT & Security Teams',
    icon: '🛡️',
    description: 'Automate phishing detection, anomaly alerts, and inbox protection without extra dashboards.',
  },
  {
    title: 'Startups & Remote Teams',
    icon: '🚀',
    description: 'Secure communication from day one — deploy AI-powered inbox defense without needing a CISO.',
  },
  {
    title: 'Privacy-Focused Professionals',
    icon: '🔐',
    description: 'Use encrypted alerts and local-first scanning to stay protected without giving up control.',
  },
];



  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-cyan-900 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Built for...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience; 