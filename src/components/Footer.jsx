import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Container from './ui/Container';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  const linkSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/#features' },
        { name: 'Integrations', href: '/#product' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Sign up', href: '/signup' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Product', href: '/#solutions' },
        { name: 'Marketing', href: '/#solutions' },
        { name: 'Operations', href: '/#solutions' },
        { name: 'Engineering', href: '/#solutions' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/#faq' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/#product' },
        { name: 'Customer Stories', href: '/#testimonials' },
        { name: 'Contact Sales', href: '/signup?plan=scale' },
        { name: 'Log in', href: '/login' },
      ],
    },
  ];

  return (
    <footer className="pt-16 pb-12 border-t border-pulse-border dark:border-[#252830] bg-white dark:bg-[#0B0C0E]">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-pulse-border/70 dark:border-[#252830]">
          
          {/* Brand Info */}
          <div className="md:col-span-3 space-y-3">
            <Link to="/" className="inline-block" aria-label="PULSE Home">
              <BrandLogo size="md" />
            </Link>
            <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
              Turn busywork into momentum. The intelligent operations workspace for modern teams.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {linkSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <span className="text-xs font-bold text-pulse-primary dark:text-white uppercase tracking-wider">
                  {section.title}
                </span>
                <ul className="space-y-2 text-xs">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('/') && !link.href.includes('#') ? (
                        <Link
                          to={link.href}
                          className="text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary dark:hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary dark:hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup (Right Column) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-pulse-primary dark:text-white uppercase tracking-wider block">
              Subscribe to our newsletter
            </span>
            <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
              Get the latest updates, engineering insights, and product news.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-pulse-surface dark:bg-[#151720] border border-pulse-border dark:border-[#252830] text-pulse-primary dark:text-white placeholder:text-pulse-secondary/60 focus:outline-none focus:ring-2 focus:ring-pulse-accent"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#252525] dark:hover:bg-[#ECECED] transition-colors flex-shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Status feedback */}
              {status === 'error' && (
                <div className="flex items-center gap-1.5 text-xs text-[#E5484D]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-1.5 text-xs text-[#22A06B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>You're subscribed! Check your inbox soon.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
          <div>
            © 2024 PULSE. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-pulse-primary dark:hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-pulse-primary dark:hover:text-white transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-pulse-primary dark:hover:text-white transition-colors">Cookies</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-pulse-secondary dark:text-pulse-dark-secondary">
            {/* X / Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pulse-primary dark:hover:text-white transition-colors" aria-label="PULSE on X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pulse-primary dark:hover:text-white transition-colors" aria-label="PULSE on GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-pulse-primary dark:hover:text-white transition-colors" aria-label="PULSE on YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Discord */}
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-pulse-primary dark:hover:text-white transition-colors" aria-label="PULSE Discord Community">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
