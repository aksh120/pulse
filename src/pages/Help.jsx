import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  X,
  ChevronDown,
  Sun,
  Moon,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  CreditCard,
  ShieldCheck,
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { helpCategories, helpArticles } from '../data/help';

export default function Help() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openArticleId, setOpenArticleId] = useState(helpArticles[0]?.id || null);

  const categoryIcons = {
    'All': HelpCircle,
    'Getting Started': Zap,
    'Automations': Layers,
    'AI Engine': Cpu,
    'Integrations': Sparkles,
    'Billing & GST': CreditCard,
    'Security & Privacy': ShieldCheck,
  };

  // Filtered articles based on search and category
  const filteredArticles = useMemo(() => {
    return helpArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.question.toLowerCase().includes(query) ||
        article.answer.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleArticle = (id) => {
    setOpenArticleId((prev) => (prev === id ? null : id));
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

      {/* Hero & Search Header */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-24 border-b border-pulse-border/60 dark:border-[#252830] bg-gradient-to-b from-pulse-surface/50 to-transparent dark:from-[#111216]/60">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="eyebrow" className="mb-4">
              PULSE HELP CENTER & KNOWLEDGE BASE
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-tight mb-4">
              How can we help your team?
            </h1>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary mb-8">
              Explore answers to common questions regarding workflows, AI engine, Indian GST billing, and integrations.
            </p>

            {/* Interactive Search Bar */}
            <div className="relative max-w-xl mx-auto shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-pulse-secondary dark:text-pulse-dark-secondary">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, GST invoicing, automations, API..."
                className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] rounded-xl text-sm text-pulse-primary dark:text-white placeholder-pulse-secondary/60 focus:outline-none focus:ring-2 focus:ring-pulse-accent focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-pulse-secondary hover:text-pulse-primary dark:text-pulse-dark-secondary dark:hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchQuery && (
              <p className="mt-3 text-xs text-pulse-secondary dark:text-pulse-dark-secondary">
                Found {filteredArticles.length} matching {filteredArticles.length === 1 ? 'article' : 'articles'}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Category Pills & FAQ List */}
      <section className="py-12 sm:py-16 flex-1">
        <Container className="max-w-4xl">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {helpCategories.map((cat) => {
              const Icon = categoryIcons[cat] || HelpCircle;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? 'bg-pulse-primary text-white dark:bg-white dark:text-pulse-primary shadow-sm'
                      : 'bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] text-pulse-secondary dark:text-pulse-dark-secondary hover:text-pulse-primary dark:hover:text-white hover:border-pulse-secondary/30'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Articles Accordion */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white dark:bg-[#15171C] rounded-2xl border border-pulse-border dark:border-[#252830]">
              <LifeBuoy className="w-10 h-10 text-pulse-secondary mx-auto mb-3 opacity-60" />
              <h3 className="text-base font-bold text-pulse-primary dark:text-white mb-1">
                No matching answers found
              </h3>
              <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary max-w-sm mx-auto mb-5">
                We couldn’t find articles matching "{searchQuery}". Try searching with different keywords or contact our team.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-xs font-semibold text-pulse-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article) => {
                const isOpen = openArticleId === article.id;
                return (
                  <div
                    key={article.id}
                    className="border border-pulse-border dark:border-[#252830] bg-white dark:bg-[#15171C] rounded-xl overflow-hidden transition-all duration-150"
                  >
                    <button
                      type="button"
                      onClick={() => toggleArticle(article.id)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse-accent transition-colors hover:bg-pulse-surface/40 dark:hover:bg-[#1B1E26]"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-pulse-secondary dark:text-pulse-dark-secondary px-2 py-0.5 rounded bg-pulse-surface dark:bg-[#20232C] flex-shrink-0">
                          {article.category}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-pulse-primary dark:text-white">
                          {article.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-pulse-secondary dark:text-pulse-dark-secondary transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-pulse-border/50 dark:border-[#252830] bg-pulse-surface/20 dark:bg-[#131418]">
                        <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed pt-2">
                          {article.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need More Assistance Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-pulse-surface/60 dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white dark:bg-[#1E2028] text-pulse-primary dark:text-white shadow-sm flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-pulse-accent" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-pulse-primary dark:text-white">
                  Still have questions?
                </h4>
                <p className="text-xs text-pulse-secondary dark:text-pulse-dark-secondary mt-0.5">
                  Our Bengaluru engineering support team is available Mon–Sat, 9:00 AM – 8:00 PM IST.
                </p>
              </div>
            </div>
            <Button
              as="a"
              href="mailto:support@pulse.io"
              size="sm"
              variant="primary"
              className="flex-shrink-0"
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Contact Support
            </Button>
          </div>
        </Container>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
