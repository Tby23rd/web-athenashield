'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Instagram, LinkedIn, LightMode, DarkMode } from '@mui/icons-material';
import { FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  const navigate = useCallback((path: string) => {
    window.location.href = path;
  }, []);

  return (
    <footer className="relative text-base lg:text-lg w-full border-t border-cyan-200 dark:border-cyan-700 bg-gradient-to-br from-cyan-900 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logos/logo-no-bg.png"
                width={180}
                height={120}
                alt="AthenaShield Logo"
                className="dark:invert"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI Email Security from Phishing to Protection.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/athenashield/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 dark:text-cyan-800 hover:dark:text-cyan-700 hover:text-cyan-100 hover:scale-110 transition-all duration-300"
                title="Instagram"
              >
                <Instagram fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/company/athenashield"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:text-cyan-100 dark:text-cyan-800 hover:dark:text-cyan-700 hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <LinkedIn fontSize="large" />
              </a>
              <a
                href="https://www.tiktok.com/@athenashield"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:text-cyan-100 dark:text-cyan-800 hover:dark:text-cyan-700 hover:scale-110 transition-all duration-300"
                title="TikTok"
              >
                <FaTiktok size={30} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-100 dark:text-cyan-800">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">How It Works</Link></li>
              <li><Link href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-100 dark:text-cyan-800">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Blog</Link></li>
              <li><Link href="/about#careers" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Careers</Link></li>
              <li><Link href="/use-cases" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Use Cases</Link></li>
              <li><Link href="https://open.athenashield.com" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Community</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-100 dark:text-cyan-800">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about#about-hero" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">About Us</Link></li>
              <li><Link href="/quantum" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Quantum Research</Link></li>
              <li><Link href="/about#contact" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Contact</Link></li>
              <li><Link href="/about#faq" className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-100 dark:text-cyan-800">Legal</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/privacy')} className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/terms')} className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Terms of Service</button></li>
              <li><button onClick={() => navigate('/ethics')} className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">AI Ethics</button></li>
              <li><button onClick={() => navigate('/cookies')} className="text-gray-600 dark:text-gray-300 hover:text-cyan-200">Cookies Policy</button></li>
            </ul>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-200 transition-colors"
          >
            {theme === 'dark' ? (
              <>
                <DarkMode />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <LightMode />
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Land Acknowledgment */}
        <div className="text-center text-sm italic text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
          In the spirit of respect, reciprocity, and truth, we honour and acknowledge Moh&apos;kinsstis and the traditional Treaty 7 territory and oral practices of the Blackfoot Confederacy: Siksika, Kainai, Piikani, as well as
           the Îyâxe Nakoda and Tsuut&apos;ina nations. We acknowledge that this territory is home to the Métis Nation of Alberta, Region 3.
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; {currentYear} AthenaShield Inc. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
