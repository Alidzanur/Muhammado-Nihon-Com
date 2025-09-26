import React, { useState } from 'react';
import clsx from 'clsx';

export function Accordion({ type = 'single', collapsible = true, className = '', children }) {
  return <div className={clsx('space-y-2', className)}>{children}</div>;
}

export function AccordionItem({ value, children }) {
  return <div data-value={value} className="border rounded-xl overflow-hidden">{children}</div>;
}

export function AccordionTrigger({ children, className = '', ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(o => !o)}
      className={clsx('w-full text-left px-4 py-3 font-medium flex items-center justify-between gap-2', className)}
      {...props}
    >
      <span>{children}</span>
      <span className={clsx('transition-transform text-slate-500', open ? 'rotate-90' : '')}>›</span>
    </button>
  );
}

export function AccordionContent({ children, className = '' }) {
  return <div className={clsx('px-4 pb-4 -mt-2 text-sm text-slate-600', className)}>{children}</div>;
}
