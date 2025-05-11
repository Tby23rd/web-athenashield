'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">Error</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Something went wrong</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-cyan-800 text-white font-medium rounded-lg hover:bg-cyan-900 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 