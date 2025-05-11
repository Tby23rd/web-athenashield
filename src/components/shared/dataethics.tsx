'use client';

import React from 'react';

const DataEthicsAI: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Data Ethics & Responsible AI Use</h1>
      <p className="mb-6">Effective Date: January 1, 2024</p>

      <p className="mb-6">
        AthenaShield Inc. (“AthenaShield”, “we”, “our”) is committed to ethical data practices and responsible use of Artificial Intelligence (AI). This policy outlines our approach to data handling, AI use, and our commitment to transparency, fairness, and protection of users — especially those impacted by phishing, scams, and email-based threats.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Our AI Philosophy</h2>
      <p className="mb-4">
        AthenaShield builds AI-powered tools designed to detect suspicious emails, highlight inbox risks, and guide users with contextual recommendations. Our AI is not built for health, legal, or financial advice.
      </p>
      <p className="mb-6">
        We believe AI should augment human decision-making — not replace it. Users remain responsible for reviewing all AI-generated alerts or suggestions before acting on them.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Human Oversight</h2>
      <p className="mb-6">
        All AI-generated warnings, insights, or security recommendations are meant to support — not substitute — human judgment. We recommend critical emails be reviewed before marking, forwarding, or deleting based on AI suggestions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Data Collection and Use</h2>
      <p className="mb-4">
        AthenaShield collects metadata and content necessary to deliver real-time phishing detection and threat insights. Data is processed securely and only for purposes directly tied to your use of the Platform.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>We do not sell or share personal data with third parties for advertising.</li>
        <li>AI model inputs are ephemeral unless explicitly stored by user request.</li>
        <li>Aggregated, de-identified data may be used for system improvement and security research.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Fairness and Bias Mitigation</h2>
      <p className="mb-6">
        We recognize the risk of algorithmic bias, especially in language models. AthenaShield continuously evaluates and updates detection systems to reduce false positives and bias across email content types, languages, and demographics.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Privacy and Security</h2>
      <p className="mb-6">
        Security is at the core of AthenaShield. All user data is encrypted in transit and at rest. Users retain control over their content and may request deletion in accordance with legal and platform policies.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. No Use of User Emails for AI Training</h2>
      <p className="mb-6">
        AthenaShield does not use private email content to train or fine-tune our AI models. Model improvements are based solely on synthetic, anonymized data or publicly available datasets — unless explicit opt-in consent is provided.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. User Responsibilities</h2>
      <p className="mb-6">
        Users are responsible for verifying any AI-generated alert or suggestion before taking action. AthenaShield is not liable for outcomes resulting from automated inbox actions made without user review.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Commitment to Continuous Improvement</h2>
      <p className="mb-6">
        Responsible AI is a process, not a checkbox. AthenaShield regularly updates this policy and reviews internal practices to maintain high ethical standards in threat detection and cybersecurity automation.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or feedback regarding AthenaShield&apos;s Data Ethics or AI policies, please contact us at:{' '}
        <a href="mailto:hello@athenashield.com" className="text-cyan-700 underline">
          hello@athenashield.com
        </a>
      </p>
    </div>
  );
};

export default DataEthicsAI;
