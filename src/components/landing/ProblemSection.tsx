import React from 'react';

const ProblemSection = () => {
  const problems = [
    { text: 'Basic spam filters', icon: '🚫' },
    { text: 'Confusing dashboards', icon: '🧩' },
    { text: 'Too many alert emails', icon: '📬' },
    { text: 'Missed phishing attempts', icon: '🐟' },
    { text: 'No clear next steps', icon: '❓' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            The Current Reality of Email Security
          </h2>
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 text-xl text-gray-700 dark:text-gray-300"
              >
                <span className="text-2xl">{problem.icon}</span>
                <span>{problem.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl font-semibold text-cyan-600 dark:text-cyan-100">
            It’s fragmented. It’s reactive. And your inbox deserves better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
