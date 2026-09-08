import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Sun, Moon } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import { useTheme } from '../context/ThemeContext';

export default function Terms() {
  const { theme, toggleTheme } = useTheme();

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
              USER AGREEMENT
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary">
              Last updated: September 8, 2024 • Effective date: September 8, 2024
            </p>
          </div>

          {/* Quick Summary Box */}
          <div className="p-6 rounded-2xl bg-[#EEEDFC]/60 dark:bg-[#1A182F] border border-[#E0DEF7] dark:border-[#2E2A55] mb-10 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#635BFF]">
              <FileText className="w-4 h-4" />
              <span>Key Terms in Plain English</span>
            </div>
            <ul className="space-y-1.5 text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>Your content is yours:</strong> You retain complete, unrestricted ownership of all code, designs, messages, and task data uploaded to PULSE.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>Reliability SLA:</strong> We target a minimum of 99.9% platform availability across all paid tiers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>Cancel anytime:</strong> No lock-in contracts or termination fees. Your subscription continues through your current paid period.</span>
              </li>
            </ul>
          </div>

          {/* Detailed Legal Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By registering an account, accessing, or using the PULSE platform (provided by PULSE Inc.), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you are entering into these Terms on behalf of an organization or company, you represent that you have legal authority to bind that entity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                2. User Accounts & Responsibilities
              </h2>
              <p>
                You must provide accurate, current, and complete registration information. You are responsible for safeguarding your login credentials and for all activities that occur under your workspace accounts. You agree to immediately notify PULSE of any unauthorized use or security breach.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                3. Intellectual Property & Customer Data
              </h2>
              <p>
                <strong>Customer Data:</strong> You retain all right, title, and interest in and to all data, code, files, communications, and materials you transmit to the Service. PULSE receives only a limited, non-exclusive license strictly to host, process, and analyze such data to provide the Service to you.
              </p>
              <p>
                <strong>PULSE IP:</strong> PULSE and its licensors retain all rights, title, and interest in the platform software, algorithms, designs, brand marks, and documentation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                4. Subscription, Billing & Cancellation
              </h2>
              <p>
                <strong>Billing Cycles:</strong> Paid tiers (Growth and Scale) are billed in advance on either a monthly or annual basis, as selected by you during checkout.
              </p>
              <p>
                <strong>Refunds & Downgrades:</strong> You may cancel or downgrade your plan at any time through your workspace settings. Cancellation takes effect at the conclusion of the currently active billing period, during which you retain complete access.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                5. Service Level Agreement (SLA)
              </h2>
              <p>
                We commit to maintaining a Monthly Uptime Percentage of at least 99.9% for paying customers. In the event PULSE fails to satisfy this SLA during any given calendar month, eligible customers are entitled to service credits calculated against that month's invoice upon request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                6. Acceptable Use Restrictions
              </h2>
              <p>
                You agree not to: (a) reverse engineer, decompile, or disassemble any part of the Service; (b) probe, scan, or test the vulnerability of our systems without prior authorization; (c) use the Service to transmit spam, malware, or unlawful content; or (d) interfere with other users' access to the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall PULSE Inc. be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business goodwill, arising out of or in connection with your use of the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                8. Contact Information
              </h2>
              <p>
                Questions regarding these Terms of Service should be directed to:
              </p>
              <div className="p-4 rounded-xl bg-pulse-surface dark:bg-[#171922] border border-pulse-border dark:border-[#252830] text-xs">
                <strong>PULSE Inc. Legal Counsel</strong><br />
                548 Market Street, Suite 89201<br />
                San Francisco, CA 94104, USA<br />
                Email:{' '}
                <a href="mailto:legal@pulse.io" className="text-pulse-accent hover:underline">
                  legal@pulse.io
                </a>
              </div>
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
            <Link to="/terms" className="hover:underline font-semibold text-pulse-primary dark:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
            <Link to="/" className="hover:underline">Home</Link>
          </div>
        </Container>
      </footer>

    </div>
  );
}
