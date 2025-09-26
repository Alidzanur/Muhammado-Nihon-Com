import React from 'react';
import clsx from 'clsx';

export function Button({ asChild = false, variant = 'solid', size = 'md', className = '', children, ...props }) {
  const Comp = asChild ? 'span' : 'button';
  const base = 'inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  const variants = {
    solid: 'bg-slate-900 text-white hover:bg-slate-700 focus:ring-slate-500',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-400',
    ghost: 'text-slate-700 hover:bg-slate-100',
  };
  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  };
  return (
    <Comp className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  );
}
