import React from 'react';

const WhyDifferent = () => {
  // Refined for startup tone — clear, confident, and approachable

  const features = [
    {
      title: 'Built for teams and solo users',
      description: 'Tell us your security goals — AthenaShield configures protection instantly with zero setup hassle.',
      icon: '⚙️',
    },
    {
      title: 'Prebuilt threat detection flows',
      description: 'Deploy smart filters, impersonation detection, and phishing alerts in minutes.',
      icon: '🛡️',
    },
    {
      title: 'You stay in control',
      description: 'Easily customize what gets flagged or allowed — no external audits or engineers needed.',
      icon: '🔐',
    },
    {
      title: 'Fits any workflow',
      description: 'Designed for startups, IT teams, or privacy-conscious users — scale protection your way.',
      icon: '📈',
    },
  ];
  


  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Why It&apos;s Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-900 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent; 