import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { faqItems } from '../data/faq';

export default function FAQ() {
  const [openIds, setOpenIds] = useState(['faq-1']); // First question open by default

  const toggleFAQ = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const col1 = faqItems.slice(0, 3);
  const col2 = faqItems.slice(3, 6);

  const renderFAQItem = (item) => {
    const isOpen = openIds.includes(item.id);

    return (
      <div
        key={item.id}
        className="rounded-2xl border border-pulse-border dark:border-[#232630] bg-white dark:bg-[#13151C] overflow-hidden transition-all duration-200 shadow-subtle hover:border-pulse-accent/30"
      >
        <button
          type="button"
          onClick={() => toggleFAQ(item.id)}
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse-accent"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
        >
          <span className="text-sm sm:text-base font-semibold text-pulse-primary dark:text-white pr-4">
            {item.question}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-pulse-secondary transition-transform duration-200 flex-shrink-0 ${
              isOpen ? 'rotate-180 text-pulse-accent' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div
            id={`faq-answer-${item.id}`}
            className="px-5 pb-5 pt-0 text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed border-t border-pulse-border/40 dark:border-[#252830]/40 pt-3 animate-slide-up"
          >
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-pulse-surface/30 dark:bg-[#0E1015]/30 border-t border-pulse-border/60 dark:border-pulse-dark-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Badge variant="eyebrow" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-tight mb-3">
              Common questions.
            </h2>
            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary mb-6 leading-relaxed">
              Everything you need to know about PULSE, our intelligent workspace, integrations, and pricing.
            </p>
            <Button
              as={Link}
              to="/help"
              variant="outline"
              size="sm"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
              className="text-xs font-semibold"
            >
              Explore all 18+ guides
            </Button>
          </div>

          {/* Right Column: 2 Sub-columns of Accordions */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              {col1.map(renderFAQItem)}
            </div>
            <div className="space-y-4">
              {col2.map(renderFAQItem)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
