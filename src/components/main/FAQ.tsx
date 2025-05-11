import React,{useState} from 'react';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

const FAQ: React.FC=() => {
  const [activeIndex,setActiveIndex]=useState<number|null>(null);

  const faqData = [
    {
      question: "What is AthenaShield?",
      answer:
        "AthenaShield is a unified AI and quantum-powered platform designed to protect inboxes, prevent phishing attacks, and provide threat insights for businesses and individuals. We combine advanced algorithms with human-friendly tools to secure digital communication."
    },
    {
      question: "How does AthenaShield use AI and quantum computing?",
      answer:
        "AthenaShield uses Quantum Machine Learning (QML) and simulation techniques to detect anomalies, analyze message patterns, and simulate future attack vectors. Our AI continuously adapts based on new threat intelligence and behavior patterns."
    },
    {
      question: "Who is AthenaShield for?",
      answer:
        "AthenaShield is built for security-conscious individuals, startups, and enterprises. Whether you're a solo professional or an IT team, our tools integrate easily into your workflow and enhance security without complexity."
    },
    {
      question: "Do users need an account to use AthenaShield?",
      answer:
        "No account is required for our open-source offline tools. AthenaShield offers both cloud-based and local solutions so users can protect their inbox without compromising privacy or control."
    },
    {
      question: "How does AthenaShield ensure data privacy and security?",
      answer:
        "User data is processed locally where possible, and sensitive content is encrypted using industry standards, including support for post-quantum cryptography. AthenaShield does not train AI models on private inbox data without explicit permission."
    },
    {
      question: "How can security researchers and companies contribute?",
      answer:
        "Researchers and developers can contribute threat signatures, datasets, and detection strategies. AthenaShield’s modular architecture allows for easy integration of verified intelligence sources to continuously improve protection and transparency."
    }
  ];
  


  const toggleFAQ=(index: number) => {
    setActiveIndex(activeIndex===index? null:index);
  };

  return (
    <div className="py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 m-2 gap-8">
      {faqData.map((faq,index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 border border-blue-100"
        >
          <button
            className="w-full flex justify-between items-center text-left focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-semibold text-blue-900">
              {faq.question}
            </h2>
            {activeIndex===index? (
              <ExpandLessIcon className="text-blue-900" />
            ):(
              <ExpandMoreIcon className="text-blue-900" />
            )}
          </button>
          {activeIndex===index&&(
            <p className="mt-3 leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
