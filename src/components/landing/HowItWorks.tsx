import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Describe what you want protected',
      example: '"I want to block phishing and get alerts for impersonation"',
    },
    {
      number: '2',
      title: 'We generate your protection flow',
      example: '— ready to review and customize',
    },
    {
      number: '3',
      title: 'Activate it where you work',
      options: [
        'Connect to Gmail or Outlook',
        'Enable on your work domain or team inbox',
        'Use as a standalone analysis dashboard if you prefer not to connect accounts',
      ],
    },
  ];
  

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-8"
              >
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  {step.example && (
                    <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
                      {step.example}
                    </p>
                  )}
                  {step.options && (
                    <ul className="space-y-2">
                      {step.options.map((option, optionIndex) => (
                        <li
                          key={optionIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2">•</span>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 