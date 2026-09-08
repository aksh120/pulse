import React from 'react';

export default function Badge({ 
  children, 
  variant = 'purple', 
  size = 'md',
  className = '' 
}) {
  const variantStyles = {
    purple: 'bg-[#EEEDFC] text-[#635BFF] dark:bg-[#1D1B36] dark:text-[#9D97FF]',
    eyebrow: 'bg-[#EEEDFC] text-[#635BFF] dark:bg-[#1D1B36] dark:text-[#9D97FF] font-semibold uppercase tracking-wider text-[11px]',
    green: 'bg-[#EBF9F1] text-[#22A06B] dark:bg-[#142B1F] dark:text-[#45D193]',
    amber: 'bg-[#FFF7E8] text-[#D97706] dark:bg-[#2F1F08] dark:text-[#FBBF24]',
    red: 'bg-[#FDF0EE] text-[#E5484D] dark:bg-[#2C1415] dark:text-[#FF8789]',
    neutral: 'bg-[#F4F4F2] text-[#555555] dark:bg-[#1C1E24] dark:text-[#A0A5B5]',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-3.5 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-medium rounded-full transition-colors ${
        variantStyles[variant] || variantStyles.purple
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
}
