import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Badge from './ui/Badge';
import SpotlightCard from './ui/SpotlightCard';
import { features } from '../data/features';

function FeatureIcon({ type, className = '' }) {
  switch (type) {
    case 'workflow':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="2.5" />
          <rect x="14" y="3" width="7" height="7" rx="2.5" />
          <rect x="3" y="14" width="7" height="7" rx="2.5" />
          <rect x="14" y="14" width="7" height="7" rx="2.5" />
        </svg>
      );
    case 'priorities':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L2 21h20L12 3z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 'team':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="11" y="2" width="2" height="6" rx="1" />
          <rect x="11" y="16" width="2" height="6" rx="1" />
          <rect x="2" y="11" width="6" height="2" rx="1" />
          <rect x="16" y="11" width="6" height="2" rx="1" />
          <rect x="4.5" y="4.5" width="2" height="6" rx="1" transform="rotate(-45 4.5 4.5)" />
          <rect x="17.5" y="17.5" width="2" height="6" rx="1" transform="rotate(-45 17.5 17.5)" />
          <rect x="17.5" y="4.5" width="2" height="6" rx="1" transform="rotate(45 17.5 4.5)" />
          <rect x="4.5" y="17.5" width="2" height="6" rx="1" transform="rotate(45 17.5 4.5)" />
        </svg>
      );
    case 'zap':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polygon points="13 7 8 13 12 13 11 17 16 11 12 11 13 7" fill="currentColor" />
        </svg>
      );
    case 'projects':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );
    case 'insights':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 17l6-6 4 4 6-6" />
          <path d="M14 5h6v6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Badge variant="eyebrow" className="mb-4">
              FEATURES
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-[1.15] mb-4">
              Everything you need <br />
              to move faster.
            </h2>

            <p className="text-sm sm:text-base text-pulse-secondary dark:text-pulse-dark-secondary mb-6 leading-relaxed">
              Powerful features to help your team focus, execute, and achieve more without administrative overhead.
            </p>

            <a
              href="#product"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pulse-accent hover:text-pulse-accent-hover group transition-colors"
            >
              <span>Explore all features</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: 2-Column Grid of 6 Features */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature) => (
                <SpotlightCard
                  key={feature.id}
                  className="p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.iconBg} ${feature.iconColor} transition-transform group-hover:scale-110 duration-200 shadow-sm`}
                    >
                      <FeatureIcon type={feature.iconType} className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-base font-bold text-pulse-primary dark:text-white mb-1.5 leading-snug group-hover:text-pulse-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
