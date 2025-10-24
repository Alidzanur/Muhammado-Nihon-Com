import React from 'react';

export default function SectionTitle({ kicker, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left mx-0' : 'text-center mx-auto';
  return (
    <div className={`max-w-4xl ${alignClass} mb-16 lg:mb-20 ${className}`}>
      {kicker && (
        <p className="label-section text-brand-600 mb-6">{kicker}</p>
      )}
      <h2 className="heading-section text-slate-800 mb-6">
        {title}
      </h2>
      {subtitle && <p className="body-section text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
