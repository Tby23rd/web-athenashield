import React from 'react';
import Image from 'next/image';

const athenashieldNewsletter=() => {
  return (
    <section className="lg:p-8 p-4 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-lg border border-blue-200 animate-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Illustration Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/e3.png"
            alt="Newsletter Illustration"
            width={450}
            height={350}
            className="rounded-xl shadow-md object-contain"
          />
        </div>
        {/* Subscription Form Section */}
        <div className="mt-10 md:mt-0 md:ml-12 md:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg  mb-6">
            Get the latest on AthenaShield&apos;s solutions to menopause.
          </p>
          <form className="flex flex-col space-y-4" >
            <input
              type="email"
              placeholder="Your email"
              className="px-5 py-3 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default athenashieldNewsletter;
