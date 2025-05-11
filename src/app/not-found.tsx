import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | athenashield',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-cyan-800 dark:text-cyan-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-cyan-800 text-white font-medium rounded-lg hover:bg-cyan-900 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
} 