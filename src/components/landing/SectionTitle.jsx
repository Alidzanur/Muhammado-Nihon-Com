import React from 'react';

export default function SectionTitle({ kicker, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left mx-0' : 'text-center mx-auto';
  return (
    <div className={`max-w-3xl ${alignClass} mb-12 ${className}`}>
      {kicker && (
        <p className="uppercase tracking-[0.18em] text-xs text-[#1A2B48]/70 mb-2">{kicker}</p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A2B48] leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-[#2D3748]/80">{subtitle}</p>}
    </div>
  );
}
