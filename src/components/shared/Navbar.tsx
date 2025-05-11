"use client";
import React, { useState, useEffect, useTransition } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Loading from './Loading';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // SEO: Add semantic labels for screen readers
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" }
  ];

  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
      setIsMenuOpen(false);
    });
  };

  // SEO: Use proper anchor tag for external links
  const DemoButton = () => (
    <a
      href="https://demo-athenashield.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-cyan-800 dark:bg-cyan-100 text-white dark:text-black rounded-full hover:bg-cyan-200 dark:hover:bg-cyan-400 transition-colors"
      aria-label="Schedule a demo with athenashield"
    >
      View a Demo
    </a>
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {isPending && <Loading />}
      <nav 
        aria-label="Main navigation" 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with improved accessibility */}
            <div 
              role="button" 
              aria-label="Return to homepage" 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavigation('/')}
            >
              <Image
                src="/images/logos/logo-no-bg.png"
                alt="athenashield Logo - Advanced Quantum Solutions"
                width={200}
                height={60}
                className="dark:invert"
                priority // SEO: Prioritize logo loading
              />
            </div>

            {/* Desktop Navigation with semantic markup */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-cyan-100 dark:hover:text-cyan-300 transition-colors"
                  aria-label={`Navigate to ${item.label} page`}
                >
                  {item.label}
                </Link>
              ))}
              
            </div>
            <div className='hidden md:flex'>
              <DemoButton />
            </div>

            {/* Mobile Menu Button with ARIA labels */}
            <button
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden menu-button p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-cyan-100 dark:hover:text-cyan-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with better accessibility */}
        <div 
          className={`md:hidden mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="p-2 space-y-1 border-b border-gray-200 dark:border-gray-700">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-cyan-100 dark:hover:text-cyan-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
            <DemoButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
