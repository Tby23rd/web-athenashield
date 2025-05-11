export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-800 dark:border-cyan-400"></div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
} 