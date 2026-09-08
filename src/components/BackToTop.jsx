import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-white dark:bg-[#1C1F2B] text-pulse-primary dark:text-white border border-pulse-border dark:border-[#2E3242] shadow-card hover:shadow-card-hover hover:border-pulse-accent dark:hover:border-pulse-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse-accent animate-fade-in group"
      aria-label="Back to top of page"
    >
      <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
