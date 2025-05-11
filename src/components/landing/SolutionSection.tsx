import React from 'react';
import {Button} from 'react-bootstrap';

const SolutionSection=() => {
  // Refined and expanded features to 6 for clarity based on the user flow described

  const features=[
    {
      title: 'Tell the AI what to secure — no forms or dashboards',
      icon: '💬',
    },
    {
      title: 'Get a real-time walkthrough of your inbox threat flow',
      icon: '🧠',
    },
    {
      title: 'AI sets up filters, alerts, and protection layers instantly',
      icon: '⚙️',
    },
    {
      title: 'Tweak alerts and rules with simple prompts',
      icon: '✏️',
    },
    {
      title: 'Deploy protection to Gmail, Outlook, or your workspace',
      icon: '📤',
    },
    {
      title: 'Track flagged messages and risk trends easily',
      icon: '📊',
    },
  ];


  const handleDemo=() => {
    window.location.href='https://calendly.com/hello-athenashield/athenashield-intro';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-900 to-pink-50 dark:from-gray-900 dark:to-gray-800" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Your AI-Powered Email Security Hub
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature,index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <p className="text-lg text-gray-700 dark:text-gray-300">{feature.title}</p>
              </div>
            ))}
          </div>
          <Button
            onClick={handleDemo}
            className="inline-block px-8 py-4 bg-cyan-100 dark:bg-cyan-600 text-black rounded-full font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 