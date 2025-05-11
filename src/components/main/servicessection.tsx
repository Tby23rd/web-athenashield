'use client';

import React from 'react';
import {
  FaNetworkWired,
  FaMicroscope,
  FaHandsHelping,
  FaHospitalUser,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';

const services = [
  {
    icon: <FaNetworkWired size={30} className="text-white" />,
    title: "Quantum Threat Detection",
    description:
      "Leverage quantum-inspired models to identify novel attack patterns and preempt phishing campaigns.",
  },
  {
    icon: <FaMicroscope size={30} className="text-white" />,
    title: "AI-Powered Inbox Monitoring",
    description:
      "Automatically analyze email behavior and detect impersonation, fraud, or unusual activity.",
  },
  {
    icon: <FaHandsHelping size={30} className="text-white" />,
    title: "Workplace Email Protection",
    description:
      "Support businesses with email-based threat prevention, policy enforcement, and staff training tools.",
  },
  {
    icon: <FaHospitalUser size={30} className="text-white" />,
    title: "Zero-Trust Messaging Integration",
    description:
      "Add extra layers of inbox security and verification for sensitive users in legal, finance, and healthcare.",
  },
  {
    icon: <FaUsers size={30} className="text-white" />,
    title: "Human-Centered Alerts",
    description:
      "Deliver actionable, easy-to-understand alerts to users—reducing false positives and alert fatigue.",
  },
  {
    icon: <FaChartLine size={30} className="text-white" />,
    title: "Insightful Threat Dashboards",
    description:
      "Empower IT and individuals with AI-generated visual summaries and attack pattern reports.",
  },
];

const ServicesList: React.FC = () => {
  return (
    <div className="p-8 text-lg md:mx-8 mt-8">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-blue-800 lg:text-5xl font-bold mb-4">
          Quantum-Enhanced Email Security
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Discover how AthenaShield protects your inbox with cutting-edge AI and quantum insights.
        </p>
      </div>

      <div className="grid w-fit mx-auto grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-300"
            style={{
              minWidth: '220px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-blue-800 rounded-full p-3">
                {service.icon}
              </div>
            </div>
            <h4 className="text-xl font-bold text-center mb-2">{service.title}</h4>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
