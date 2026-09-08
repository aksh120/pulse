import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, CheckCircle2, Sun, Moon } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import { useTheme } from '../context/ThemeContext';

export default function Privacy() {
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
              LEGAL & COMPLIANCE
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary">
              Last updated: September 8, 2024 • Effective date: September 8, 2024
            </p>
          </div>

          {/* Quick Summary Box */}
          <div className="p-6 rounded-2xl bg-[#EEEDFC]/60 dark:bg-[#1A182F] border border-[#E0DEF7] dark:border-[#2E2A55] mb-10 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#635BFF]">
              <ShieldCheck className="w-4 h-4" />
              <span>PULSE Privacy Commitment at a Glance</span>
            </div>
            <ul className="space-y-1.5 text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>We never sell your data:</strong> Your team's data is never sold, leased, or rented to third-party data brokers or advertisers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>Zero unauthorized model training:</strong> Your source code, commits, design files, and internal communications are never used to train public generative models.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>Encryption standard:</strong> All communications and database storage use TLS 1.3 and AES-256 encryption.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] flex-shrink-0 mt-0.5" />
                <span><strong>Total data sovereignty:</strong> You can export all workspace history or permanently delete your organization's records at any time.</span>
              </li>
            </ul>
          </div>

          {/* Detailed Legal Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                1. Information We Collect
              </h2>
              <p>
                When you create an account or interact with PULSE ("we", "us", or "our"), we collect information necessary to deliver our intelligent workspace platform. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Account Information:</strong> Name, work email address, company name, profile avatar, and authentication identifiers.</li>
                <li><strong>Connected Tool Integration Data:</strong> When you connect GitHub, Slack, Jira, Linear, or Figma, we receive event webhooks (commits, pull requests, task status transitions, issue comments) necessary to compute team momentum and blockers.</li>
                <li><strong>Workspace Activity:</strong> Actions taken within the platform, such as creating automation recipes, commenting on priorities, or changing task ownership.</li>
                <li><strong>Device & Telemetry Data:</strong> Browser user agent, IP address, operating system, and crash diagnostics to ensure platform reliability.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information strictly to fulfill our contractual commitments to you:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To synchronize projects, tasks, and team activity into a unified workspace.</li>
                <li>To power our proprietary AI Prioritization engine, ranking your high-leverage tasks each morning.</li>
                <li>To execute autonomous workflow recipes that you configure (e.g. closing tickets upon PR merge).</li>
                <li>To detect, prevent, and remediate technical vulnerabilities, fraud, or abuse.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                3. Security & Data Protection
              </h2>
              <p>
                Security is paramount at PULSE. We employ rigorous technical, physical, and administrative defenses:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Data at Rest:</strong> Encrypted with AES-256 across all primary databases and encrypted automated backups.</li>
                <li><strong>Data in Transit:</strong> All traffic sent between clients and servers is encrypted with TLS 1.3.</li>
                <li><strong>SOC2 Compliance:</strong> PULSE maintains independent SOC2 Type II compliance audits annually.</li>
                <li><strong>Access Controls:</strong> Strict least-privilege role-based access control (RBAC) enforced with mandatory hardware MFA for all infrastructure personnel.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                4. Third-Party Sub-processors
              </h2>
              <p>
                We partner with vetted third-party service providers to deliver hosting, database reliability, payment processing, and email infrastructure:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-pulse-border dark:border-[#252830] text-xs">
                  <thead className="bg-pulse-surface dark:bg-[#171922]">
                    <tr>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Sub-processor</th>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Purpose</th>
                      <th className="p-2.5 border border-pulse-border dark:border-[#252830]">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830] font-semibold">Amazon Web Services (AWS)</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Cloud infrastructure & secure hosting</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">United States (us-east-1) / EU</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830] font-semibold">Stripe Inc.</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Payment processing & invoicing</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">United States</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830] font-semibold">PostHog</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">Product analytics & performance metrics</td>
                      <td className="p-2.5 border border-pulse-border dark:border-[#252830]">United States / EU</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                5. Your Rights (GDPR & CCPA)
              </h2>
              <p>
                Depending on your location, you have statutory rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right of Access:</strong> Request a complete copy of all personal data held about you.</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete records.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request full permanent deletion of your account and related records.</li>
                <li><strong>Right to Data Portability:</strong> Export your data in a machine-readable JSON format.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:privacy@pulse.io" className="text-pulse-accent underline font-semibold">
                  privacy@pulse.io
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-pulse-primary dark:text-white">
                6. Contact Information
              </h2>
              <p>
                If you have questions or concerns about this policy or our data practices, please contact our Data Protection Officer at:
              </p>
              <div className="p-4 rounded-xl bg-pulse-surface dark:bg-[#171922] border border-pulse-border dark:border-[#252830] text-xs">
                <strong>PULSE Inc. Data Protection Office</strong><br />
                548 Market Street, Suite 89201<br />
                San Francisco, CA 94104, USA<br />
                Email:{' '}
                <a href="mailto:privacy@pulse.io" className="text-pulse-accent hover:underline">
                  privacy@pulse.io
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
            <Link to="/privacy" className="hover:underline font-semibold text-pulse-primary dark:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
            <Link to="/" className="hover:underline">Home</Link>
          </div>
        </Container>
      </footer>

    </div>
  );
}
