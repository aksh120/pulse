import React from 'react';
import Container from './ui/Container';

export default function LogoCloud() {
  const logos = [
    {
      name: 'ARC',
      svg: (
        <svg viewBox="0 0 110 28" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Geometric Triangle Mark */}
          <path d="M12 4L4 22H20L12 4ZM12 9.5L16.2 19H7.8L12 9.5Z" />
          {/* Wordmark */}
          <text x="32" y="19.5" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">ARC</text>
        </svg>
      )
    },
    {
      name: 'VANTA',
      svg: (
        <svg viewBox="0 0 110 28" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="20" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="800" letterSpacing="4">VANTA</text>
        </svg>
      )
    },
    {
      name: 'NORTHSTAR',
      svg: (
        <svg viewBox="0 0 145 28" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Star symbol */}
          <path d="M12 2L14 9.5L21.5 11.5L14 13.5L12 21L10 13.5L2.5 11.5L10 9.5L12 2Z" />
          <text x="30" y="19" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" letterSpacing="2">NORTHSTAR</text>
        </svg>
      )
    },
    {
      name: 'KINETIC',
      svg: (
        <svg viewBox="0 0 120 28" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Kinetic K glyph */}
          <path d="M3 4H7V22H3V4ZM16 4H20L12.5 13L20.5 22H16.5L9.5 14L16 4Z" />
          <text x="28" y="19.5" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" letterSpacing="2.5">KINETIC</text>
        </svg>
      )
    },
    {
      name: 'FRAME',
      svg: (
        <svg viewBox="0 0 110 28" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Frame wireframe icon */}
          <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 5V9M16 5V9M8 17V21M16 17V21" stroke="currentColor" strokeWidth="1.5" />
          <text x="29" y="19.5" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">FRAME</text>
        </svg>
      )
    },
    {
      name: 'ORBIT',
      svg: (
        <svg viewBox="0 0 110 28" className="h-6 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Orbit concentric circle */}
          <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="13" r="3.5" fill="currentColor" />
          <text x="29" y="19.5" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">ORBIT</text>
        </svg>
      )
    },
  ];

  return (
    <section className="py-12 border-y border-pulse-border/60 dark:border-pulse-dark-border/60 bg-pulse-surface/40 dark:bg-[#0E1015]/50">
      <Container>
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-pulse-secondary/80 dark:text-pulse-dark-secondary/80 mb-8">
          Trusted by forward-thinking teams
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-10 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-[#646464] dark:text-[#8E95A5] hover:text-pulse-primary dark:hover:text-white transition-colors duration-200 opacity-80 hover:opacity-100 flex items-center justify-center"
              aria-label={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
