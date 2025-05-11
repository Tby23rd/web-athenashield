"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { LightMode, DarkMode } from '@mui/icons-material';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <DarkMode className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <LightMode className="w-5 h-5 text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle; 