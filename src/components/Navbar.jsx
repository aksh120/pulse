import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import Button from './ui/Button';
import Container from './ui/Container';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Resources', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-pulse-border/80 dark:border-pulse-dark-border/80 shadow-subtle py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse-accent rounded-lg"
            aria-label="PULSE Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-pulse-secondary dark:text-pulse-dark-secondary" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="hover:text-pulse-primary dark:hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Theme toggle, Login, CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white hover:bg-pulse-surface dark:hover:bg-[#1A1C23] transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Login */}
            <a
              href="#pricing"
              onClick={(e) => handleNavLinkClick(e, '#pricing')}
              className="text-sm font-medium text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white px-2 py-1 transition-colors"
            >
              Log in
            </a>

            {/* Primary CTA */}
            <Button
              href="#pricing"
              onClick={(e) => handleNavLinkClick(e, '#pricing')}
              size="sm"
              variant="primary"
              iconRight={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
              className="group"
            >
              Start for free
            </Button>
          </div>

          {/* Mobile Actions: Theme toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-pulse-primary dark:text-pulse-dark-primary hover:bg-pulse-surface dark:hover:bg-[#1A1C23] focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse-accent"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown / Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-2 border-t border-pulse-border dark:border-pulse-dark-border bg-white dark:bg-[#0B0C0E] rounded-2xl shadow-xl p-5 animate-slide-up">
            <nav className="flex flex-col gap-4 text-base font-medium text-pulse-secondary dark:text-pulse-dark-secondary" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="py-2 px-3 rounded-lg hover:bg-pulse-surface dark:hover:bg-[#1A1C23] hover:text-pulse-primary dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-pulse-border dark:border-pulse-dark-border my-1" />
              <div className="flex flex-col gap-3 pt-1">
                <a
                  href="#pricing"
                  onClick={(e) => handleNavLinkClick(e, '#pricing')}
                  className="text-center py-2 text-sm font-medium text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
                >
                  Log in
                </a>
                <Button
                  href="#pricing"
                  onClick={(e) => handleNavLinkClick(e, '#pricing')}
                  size="md"
                  variant="primary"
                  className="w-full justify-center"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Start for free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
