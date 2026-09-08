import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, CheckCircle2, Sliders, Shield, Sun, Moon } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';

export default function Cookies() {
  const { theme, toggleTheme } = useTheme();

  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [functionalEnabled, setFunctionalEnabled] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSavePreferences = () => {
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-pulse-bg dark:bg-pulse-dark-bg text-pulse-primary dark:text-pulse-dark-primary flex flex-col transition-colors duration-200">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-pulse-border/80 dark:border-pulse-dark-border/80 py-3.5">
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" aria-label="PULSE Home">
              <BrandLogo size="md" />
            </Link>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16">
        <Container className="max-w-4xl">
          
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-pulse-border/70 dark:border-[#252830]">
            <Badge variant="eyebrow" className="mb-3">
              PRIVACY & PREFERENCES
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-3">
              Cookie Policy
            </h1>
            <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary">
              Last updated: September 8, 2024 • Effective date: September 8, 2024
            </p>
          </div>

          {/* Interactive Preferences Manager */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#13151C] border border-pulse-border dark:border-[#232630] shadow-card mb-12">
            <div className="flex items-center gap-2.5 mb-2">
              <Sliders className="w-5 h-5 text-pulse-accent" />
              <h2 className="text-lg sm:text-xl font-bold text-pulse-primary dark:text-white">
                Manage Your Cookie Preferences
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary mb-6">
              Customize which cookies you want to permit. You can update these settings at any time.
            </p>

            {savedSuccess && (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs border border-emerald-200 dark:border-emerald-900/50 mb-6 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Your cookie preferences have been successfully updated and saved.</span>
              </div>
            )}

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-pulse-surface dark:bg-[#181A24] border border-pulse-border/60 dark:border-[#252830]">
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-pulse-primary dark:text-white">Strictly Essential Cookies</span>
                    <Badge variant="purple" size="sm" className="text-[10px]">Required</Badge>
                  </div>
                  <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                    Necessary for core authentication, session management, CSRF prevention, and basic platform security. Cannot be switched off.
                  </p>
                </div>
                <div className="flex items-center h-6">
                  <span className="text-xs font-semibold text-pulse-secondary">Always Active</span>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-pulse-surface dark:bg-[#181A24] border border-pulse-border/60 dark:border-[#252830]">
                <div className="pr-4">
                  <span className="text-sm font-bold text-pulse-primary dark:text-white block">Performance & Analytics Cookies</span>
                  <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                    Enables us to measure platform load speeds, error rates, and popular workflows to improve reliability and product design.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-pulse-accent ${
                    analyticsEnabled ? 'bg-pulse-accent' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  role="switch"
                  aria-checked={analyticsEnabled}
                  aria-label="Toggle analytics cookies"
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transition-transform absolute top-1 ${
                      analyticsEnabled ? 'left-6' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Functional */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-pulse-surface dark:bg-[#181A24] border border-pulse-border/60 dark:border-[#252830]">
                <div className="pr-4">
                  <span className="text-sm font-bold text-pulse-primary dark:text-white block">Functional & Preference Cookies</span>
                  <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-1">
                    Stores your interface theme (Dark vs Light), language selection, collapsed sidebar state, and personalized filter views.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFunctionalEnabled(!functionalEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-pulse-accent ${
                    functionalEnabled ? 'bg-pulse-accent' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  role="switch"
                  aria-checked={functionalEnabled}
                  aria-label="Toggle functional cookies"
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full transition-transform absolute top-1 ${
                      functionalEnabled ? 'left-6' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleSavePreferences}
            >
              Save Cookie Preferences
            </Button>
          </div>

          {/* Detailed Informational Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device by websites that you visit. They are widely used to make web applications function correctly, improve responsiveness, remember your preferences, and provide diagnostic insight to application developers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                2. Cookies Used by PULSE
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-pulse-border dark:border-[#252830] text-xs">
                  <thead className="bg-pulse-surface dark:bg-[#171922]">
                    <tr>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Cookie Name</th>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Type</th>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Purpose</th>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830] font-mono">pulse_session</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Essential</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Maintains active authenticated user session</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">30 days</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830] font-mono">pulse_theme</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Functional</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Stores user choice between light and dark mode</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">1 year</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830] font-mono">ph_phc_*</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Analytics</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Anonymous product event telemetry</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                3. How to Manage Cookies in Your Browser
              </h2>
              <p>
                In addition to our preferences manager above, you can restrict or block cookies through your browser settings. Most browsers allow you to decline all cookies, accept only first-party cookies, or delete cookies upon closing your browser. For instructions, check your browser's help documentation (Chrome, Firefox, Safari, Edge).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                4. Questions & Inquiries
              </h2>
              <p>
                If you have questions about our use of cookies or privacy technologies, contact us at{' '}
                <a href="mailto:privacy@pulse.io" className="text-pulse-accent underline font-semibold">
                  privacy@pulse.io
                </a>.
              </p>
            </section>

          </div>

        </Container>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-pulse-border/70 dark:border-[#252830] bg-white dark:bg-[#0B0C0E]">
        <Container className="flex flex-col sm:flex-row items-center justify-between text-xs text-pulse-secondary dark:text-pulse-dark-secondary gap-4">
          <div>© 2024 PULSE Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/cookies" className="hover:underline font-semibold text-pulse-primary dark:text-white">Cookie Policy</Link>
            <Link to="/" className="hover:underline">Home</Link>
          </div>
        </Container>
      </footer>

    </div>
  );
}
