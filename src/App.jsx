import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-pulse-bg text-pulse-primary dark:bg-pulse-dark-bg dark:text-pulse-dark-primary selection:bg-pulse-accent selection:text-white transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <LogoCloud />
          <Features />
          <ProductShowcase />
          <HowItWorks />
          <Stats />
          <Solutions />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
