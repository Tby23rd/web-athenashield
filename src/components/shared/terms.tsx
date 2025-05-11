'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfUse: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-6">Effective Date: January 1, 2024</p>

      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using this platform, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must not access or use the Platform.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
      <p className="mb-4">
        The Platform is intended solely for users who are at least 18 years of age. By using the Platform, you represent and warrant that you are of legal age to form a binding contract.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Responsibilities</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use or security breach.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Permitted Use</h2>
      <p className="mb-4">
        You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform strictly in accordance with these Terms. You agree not to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Use the Platform for any unlawful or prohibited purpose;</li>
        <li>Upload or transmit viruses, malware, or any other harmful code;</li>
        <li>Attempt to gain unauthorized access to the Platform or its systems;</li>
        <li>Reverse-engineer, decompile, or disassemble any part of the Platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">5. Security Disclaimer</h2>
      <p className="mb-4">
        The Platform is intended for email security, threat analysis, and informational purposes only. It does not guarantee the prevention of all malicious activity. AI-generated insights should be used as guidance, not final authority.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
      <p className="mb-4">
        All content, features, and functionality of the Platform, including but not limited to software, text, graphics, and designs, are the exclusive property of AthenaShield Inc. or its licensors and are protected by intellectual property laws. No rights are granted except as expressly set forth in these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
      <p className="mb-4">
        AthenaShield Inc. reserves the right to suspend or terminate your access to the Platform at any time, with or without notice, if you violate these Terms or engage in conduct that may harm the Platform or its users.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Limitation of Liability</h2>
      <p className="mb-4">
        THE PLATFORM IS PROVIDED &#34;AS IS&#34; AND &#34;AS AVAILABLE&#34; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. ATHENASHIELD INC. DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <p className="mb-4">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ATHENASHIELD INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE PLATFORM.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify, defend, and hold harmless AthenaShield Inc., its affiliates, officers, directors, employees, and agents from any claims, losses, damages, liabilities, including legal fees, arising out of your use of the Platform or violation of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Modifications to the Terms</h2>
      <p className="mb-4">
        AthenaShield Inc. reserves the right to modify these Terms at any time. Updated Terms will be posted on the Platform, and your continued use constitutes acceptance of any changes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Jurisdiction</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws of the Province of Alberta, Canada. You agree to the exclusive jurisdiction of the courts located in Calgary, Alberta, for any disputes arising out of or relating to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at{' '}
        <a href="mailto:hello@athenashield.com" className="text-cyan-700 underline">
          hello@athenashield.com
        </a>.
      </p>
    </div>
  );
};

export default TermsOfUse;
