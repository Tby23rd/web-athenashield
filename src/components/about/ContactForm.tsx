"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Error as ErrorIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString()
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', role: '', message: '' });
      
      // Use Next.js router for navigation
      setTimeout(() => {
        router.push('/success');
      }, 2000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 border border-cyan-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-200 dark:bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-200 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white relative">
        Get in Touch
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-cyan-100 dark:bg-cyan-500 rounded-full"></div>
      </h2>
      
      {success ? (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-lg"
        >
          <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
          <p className="text-green-600 dark:text-green-400 text-lg mb-4">
            Thank you for your message! We&apos;ll get back to you soon.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Redirecting to success page...
          </p>
        </motion.div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-8 relative"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Dont fill this out: <input name="bot-field" /></label>
          </p>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center"
            >
              <ErrorIcon className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-cyan-100 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-100 focus:border-transparent transition-all duration-300 hover:border-cyan-100 dark:hover:border-cyan-500"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-cyan-100 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-100 focus:border-transparent transition-all duration-300 hover:border-cyan-100 dark:hover:border-cyan-500"
                placeholder="hello@athenashield.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Role</label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-cyan-100 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-100 focus:border-transparent transition-all duration-300 hover:border-cyan-100 dark:hover:border-cyan-500"
            >
              <option value="">Select one</option>
              <option value="founder">Founder</option>
              <option value="researcher">Researcher</option>
              <option value="healthcare">Healthcare Professional</option>
              <option value="partner">Potential Partner</option>
              <option value="other">Other</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-cyan-100 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-100 focus:border-transparent transition-all duration-300 hover:border-cyan-100 dark:hover:border-cyan-500"
              placeholder="Your message..."
            ></textarea>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-cyan-100 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-100 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto min-w-[200px] group relative overflow-hidden`}
            >
              <span className="relative z-10 flex items-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-cyan-100 dark:from-cyan-600 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
