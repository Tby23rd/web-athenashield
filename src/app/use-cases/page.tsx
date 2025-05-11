'use client';

import React from 'react';



const useCases = [
  {
    path: "/use-cases/phishing-protection",
    title: "🛡️ Phishing Protection Made Easy",
    description:
      "Detect and block phishing attempts before they hit your users. Use AthenaShield to deliver proactive email security. 🚨",
    examples: [
      "🚩 Real-time phishing flagging",
      "🧠 AI-powered threat scoring",
      "📬 Email intent analysis",
      "⚠️ Risk-level labels on messages",
    ],
  },
  {
    path: "/use-cases/startup-inbox-security",
    title: "🚀 Secure Startup Inboxes Effortlessly",
    description:
      "Get started with email protection that scales with your startup. AthenaShield is perfect for fast-moving teams. 💼",
    examples: [
      "🔒 Auto-configured filters",
      "🧪 Scam detection & quarantine",
      "🗂️ Smart email grouping by risk",
      "📈 AI alerts with no IT team needed",
    ],
  },
  {
    path: "/use-cases/analytics-dashboard",
    title: "📊 Email Threat Analytics Dashboard",
    description:
      "Gain insights from email patterns and behavior trends. AthenaShield gives your team visibility and control. 👁️‍🗨️",
    examples: [
      "📆 Weekly threat reports",
      "📍 Sender trust maps",
      "📊 Inbox sentiment analysis",
      "📥 Trend-based threat detection",
    ],
  },
  {
    path: "/use-cases/employee-training",
    title: "🎓 Inbox Awareness for Teams",
    description:
      "Empower your team with contextual nudges, simulations, and inbox hygiene prompts — directly inside their workflow.",
    examples: [
      "🧠 Phishing simulation emails",
      "🤖 AI-generated red flag summaries",
      "💌 Educational nudges for risky emails",
      "📚 Role-based training journeys",
    ],
  },
  {
    path: "/use-cases/exec-inbox-monitoring",
    title: "🧑‍💼 Executive Inbox Monitoring",
    description:
      "Protect high-risk inboxes like founders, legal, or finance from impersonation and spear phishing attacks. 🎯",
    examples: [
      "🎭 Impersonation risk alerts",
      "🛡️ Shielded sender rules",
      "📈 Executive threat dashboards",
      "🔍 Attachments scanned for fraud",
    ],
  },
  {
    path: "/use-cases/customer-support-protection",
    title: "📮 Protect Customer Support Channels",
    description:
      "Secure your support inboxes from spam, spoofing, and malicious customer impersonation. 🎟️",
    examples: [
      "🚫 Auto-spam kill switch",
      "📧 VIP sender trust zones",
      "📎 Attachment auto-analysis",
      "🧾 Spoof-resistant reply logic",
    ],
  },
];

const handleContact = () => {
  window.location.href = 'https://demo-athenashield.netlify.app/onboarding';
};

export default function UseCasesPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="py-24 text-center bg-gradient-to-br from-cyan-100 via-white to-cyan-200">
        <h1 className="text-5xl font-bold mb-6">Explore AthenaShield Use Cases</h1>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          Discover how our AI-powered platform helps protect inboxes with smarter detection, real-time analysis, and seamless integration.
        </p>
        <button
        onClick={handleContact}
         className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition">
          🚀 Get Started Now
        </button>
      </section>

      {/* Use Case Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2">
        {useCases.map((uc, idx) => (
          <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">{uc.title}</h2>
            <p className="text-gray-700 mb-4">{uc.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {uc.examples.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">🛡️ Ready to Shield Your Inbox?</h2>
        <p className="text-xl mb-6 text-gray-700">
          AthenaShield helps you stay secure — without slowing down your workflow.
        </p>
        <button className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition">
          🌐 Try AthenaShield Free
        </button>
      </section>
    </div>
  );
}
