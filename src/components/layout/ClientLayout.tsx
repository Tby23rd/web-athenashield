"use client";

import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 