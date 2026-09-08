import React from 'react';
import Container from './ui/Container';

export default function LogoCloud() {
  const enterpriseLogos = [
    {
      name: 'ARC Tech',
      svg: (
        <svg viewBox="0 0 110 28" className="h-5 sm:h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 22H20L12 4ZM12 9.5L16.2 19H7.8L12 9.5Z" />
          <text x="32" y="19.5" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">ARC</text>
        </svg>
      )
    },
    {
      name: 'VANTA Cloud',
      svg: (
        <svg viewBox="0 0 110 28" className="h-5 sm:h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="20" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="800" letterSpacing="4">VANTA</text>
        </svg>
      )
    },
    {
      name: 'NORTHSTAR Logistics',
      svg: (
        <svg viewBox="0 0 145 28" className="h-5 sm:h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 9.5L21.5 11.5L14 13.5L12 21L10 13.5L2.5 11.5L10 9.5L12 2Z" />
          <text x="30" y="19" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" letterSpacing="2">NORTHSTAR</text>
        </svg>
      )
    },
    {
      name: 'KINETIC Payments',
      svg: (
        <svg viewBox="0 0 120 28" className="h-5 sm:h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4H7V22H3V4ZM16 4H20L12.5 13L20.5 22H16.5L9.5 14L16 4Z" />
          <text x="28" y="19.5" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" letterSpacing="2.5">KINETIC</text>
        </svg>
      )
    },
    {
      name: 'FRAME Systems',
      svg: (
        <svg viewBox="0 0 110 28" className="h-5 sm:h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 5V9M16 5V9M8 17V21M16 17V21" stroke="currentColor" strokeWidth="1.5" />
          <text x="29" y="19.5" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">FRAME</text>
        </svg>
      )
    },
    {
      name: 'ORBIT Capital',
      svg: (
        <svg viewBox="0 0 110 28" className="h-5 sm:h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="13" r="3.5" fill="currentColor" />
          <text x="29" y="19.5" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">ORBIT</text>
        </svg>
      )
    },
  ];

  const tools = [
    { name: 'GitHub', desc: 'PR & Commit Sync' },
    { name: 'Linear', desc: 'Issue Graph' },
    { name: 'Slack', desc: 'Event Dispatch' },
    { name: 'Jira', desc: 'Sprint Milestones' },
    { name: 'Figma', desc: 'Design Handoffs' },
    { name: 'GitLab', desc: 'CI/CD Pipelines' },
    { name: 'Notion', desc: 'Doc Knowledge' },
    { name: 'Google Workspace', desc: 'Calendar & Meets' },
  ];

  return (
    <section className="py-14 sm:py-16 border-y border-pulse-border/60 dark:border-pulse-dark-border/60 bg-pulse-surface/40 dark:bg-[#0E1015]/50 overflow-hidden relative">
      {/* Side Fade Gradient Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-pulse-bg dark:from-pulse-dark-bg to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-pulse-bg dark:from-pulse-dark-bg to-transparent z-10" />

      <Container className="mb-6">
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-pulse-secondary/80 dark:text-pulse-dark-secondary/80">
          Trusted by high-velocity engineering squads across India & worldwide
        </p>
      </Container>

      {/* Row 1: Enterprise Marquee Track */}
      <div className="flex overflow-hidden group select-none py-2">
        <div className="flex items-center gap-12 sm:gap-16 shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {[...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="text-[#646464] dark:text-[#8E95A5] hover:text-pulse-primary dark:hover:text-white transition-colors duration-200 opacity-75 hover:opacity-100 flex items-center justify-center cursor-default"
              aria-label={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Connected Tools Live Sync Ticker */}
      <div className="flex overflow-hidden group select-none pt-4">
        <div className="flex items-center gap-4 sm:gap-6 shrink-0 animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...tools, ...tools, ...tools].map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#15171C] border border-pulse-border dark:border-[#252830] text-xs shadow-subtle hover:border-pulse-accent/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-pulse-primary dark:text-white">{tool.name}</span>
              <span className="text-[11px] text-pulse-secondary dark:text-pulse-dark-secondary">• {tool.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
