import React from 'react';

export default function Container({ children, className = '', id, as: Component = 'div' }) {
  return (
    <Component
      id={id}
      className={`max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </Component>
  );
}
