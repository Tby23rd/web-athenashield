"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  const mission = "AthenaShield makes email security smarter, faster, and more accessible. With AI-powered conversations, you can configure, monitor, and protect your inbox—without needing a security team. 🔐";

  const vision = "Our vision is to democratize cybersecurity. By combining AI and quantum simulation, we equip every user and organization with future-ready inbox protection. ⚡";

  const valuesList = [
    {
      id: 1,
      title: "🎯 No-Code Security Tools",
      value: "No dashboards, no coding—just ask. Set up inbox filters, phishing defenses, and user alerts in seconds via chat. 🧠",
    },
    {
      id: 2,
      title: "🤖 Adaptive AI Agent",
      value: "Our AI learns from evolving threats, understands user behavior, and provides personalized protection and insight. 📬",
    },
    {
      id: 3,
      title: "💫 Focused on Human Safety",
      value: "We prioritize human-readable alerts and transparent threat insights so teams can respond with clarity and confidence. 🛡️",
    },
    {
      id: 4,
      title: "✨ Instant Response & Updates",
      value: "Need to mute a sender or adjust your filters? Just say so—AthenaShield responds instantly to keep you in control. ⚙️",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-white via-cyan-900 to-cyan-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <h1 className="text-3xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          ✨ Simplifying Inbox Protection Through Conversation ✨
        </h1>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-7xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border border-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">💫 Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="border border-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">🔭 Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{vision}</p>
          </motion.div>
        </div>

        <div className="mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">✨ The AthenaShield Experience ✨</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuesList.map((value) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: value.id * 0.1 }}
                className="border border-cyan-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
