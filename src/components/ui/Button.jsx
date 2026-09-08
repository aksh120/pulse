import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  iconLeft,
  iconRight,
  className = '',
  as: Component = 'button',
  href,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 h-8',
    md: 'text-sm px-4 py-2 gap-2 h-10',
    lg: 'text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 gap-2.5 h-11 sm:h-12 font-semibold',
  };

  const variantStyles = {
    // Primary: deep charcoal/black in light mode, crisp white in dark mode
    primary: 'bg-[#111111] text-white hover:bg-[#252525] dark:bg-white dark:text-[#111111] dark:hover:bg-[#ECECED] shadow-sm',
    // Accent: vibrant PULSE purple
    accent: 'bg-pulse-accent text-white hover:bg-pulse-accent-hover shadow-sm',
    // Secondary: clean white surface with border
    secondary: 'bg-white text-pulse-primary border border-pulse-border hover:bg-pulse-surface dark:bg-[#16181E] dark:text-pulse-dark-primary dark:border-pulse-dark-border dark:hover:bg-[#1D2027]',
    // Outline: transparent with border
    outline: 'bg-transparent text-pulse-primary border border-pulse-border hover:bg-pulse-surface dark:text-pulse-dark-primary dark:border-pulse-dark-border dark:hover:bg-[#1A1C23]',
    // Ghost: subtle text link
    ghost: 'bg-transparent text-pulse-primary hover:bg-pulse-surface dark:text-pulse-dark-primary dark:hover:bg-[#1A1C23]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
      </a>
    );
  }

  if (Component && Component !== 'button') {
    return (
      <Component
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
      </Component>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </button>
  );
}
