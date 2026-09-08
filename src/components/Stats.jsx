import React, { useEffect, useState, useRef } from 'react';
import Container from './ui/Container';

function AnimatedStat({ value, suffix = '', prefix = '', decimals = 0, label }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value.toString());
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600; // ms
          const startTimestamp = performance.now();
          const target = parseFloat(value);

          const step = (now) => {
            const progress = Math.min((now - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOutProgress;

            if (decimals > 0) {
              setDisplayValue(current.toFixed(decimals));
            } else {
              setDisplayValue(Math.floor(current).toString());
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value.toString());
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, decimals, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center sm:text-left flex flex-col items-center sm:items-start">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pulse-primary dark:text-white tracking-tight leading-none mb-2">
        {prefix}{displayValue}{suffix}
      </div>
      <p className="text-xs sm:text-sm text-pulse-secondary dark:text-pulse-dark-secondary font-medium max-w-[200px] leading-snug">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      value: 42,
      suffix: '%',
      label: 'less time spent on repetitive work',
      decimals: 0,
    },
    {
      value: 3.2,
      suffix: 'M+',
      label: 'tasks automated',
      decimals: 1,
    },
    {
      value: 18,
      suffix: 'k+',
      label: 'teams using PULSE',
      decimals: 0,
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'platform uptime',
      decimals: 1,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Subtle decorative wavy curve SVG matching the mockup */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 dark:opacity-20 -z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 180" fill="none" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-40 90C160 160 320 20 540 90C760 160 920 30 1140 80C1280 110 1400 60 1480 90"
            stroke="url(#wave-gradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#635BFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 items-start justify-items-center sm:justify-items-start">
          {stats.map((item) => (
            <AnimatedStat
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              decimals={item.decimals}
              label={item.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
