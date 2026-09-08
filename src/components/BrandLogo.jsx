import React from 'react';

/**
 * PULSE Brand Logo Component
 * Single source of truth for the PULSE brand mark & wordmark.
 * Supports light/dark mode via currentColor and custom sizing.
 */
export default function BrandLogo({ 
  className = '', 
  markOnly = false,
  size = 'md', // 'sm' | 'md' | 'lg'
  inverted = false 
}) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  const height = sizeClasses[size] || sizeClasses.md;

  if (markOnly) {
    return (
      <svg 
        viewBox="0 0 28 32" 
        className={`${height} w-auto ${className}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PULSE mark"
        role="img"
      >
        <rect x="2" y="10" width="4" height="12" rx="2" fill="#635BFF"/>
        <rect x="8.5" y="4" width="4" height="24" rx="2" fill="#635BFF"/>
        <rect x="15" y="9" width="4" height="14" rx="2" fill="#635BFF"/>
        <rect x="21.5" y="6" width="4" height="20" rx="2" fill="#635BFF"/>
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg 
        viewBox="0 0 28 32" 
        className={`${height} w-auto flex-shrink-0`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="10" width="4" height="12" rx="2" fill="#635BFF"/>
        <rect x="8.5" y="4" width="4" height="24" rx="2" fill="#635BFF"/>
        <rect x="15" y="9" width="4" height="14" rx="2" fill="#635BFF"/>
        <rect x="21.5" y="6" width="4" height="20" rx="2" fill="#635BFF"/>
      </svg>
      <span className={`font-extrabold tracking-wider font-sans uppercase text-lg ${
        inverted ? 'text-white' : 'text-pulse-primary dark:text-pulse-dark-primary'
      }`}>
        PULSE
      </span>
    </div>
  );
}
