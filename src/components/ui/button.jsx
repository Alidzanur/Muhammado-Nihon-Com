import React from 'react';
import clsx from 'clsx';

export function Button({ asChild = false, variant = 'solid', size = 'md', className = '', children, ...props }) {
  const Comp = asChild ? 'span' : 'button';
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  const variants = {
    solid: 'bg-gradient-brand text-white hover:shadow-brand-lg focus:ring-brand-500 shadow-brand',
    outline: 'border-2 border-brand-500 text-brand-600 hover:bg-brand-50 focus:ring-brand-400 hover:border-brand-600',
    ghost: 'text-brand-600 hover:bg-brand-50 hover:text-brand-700',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-400',
  };
  const sizes = {
    sm: 'text-sm px-4 py-2.5 h-10',
    md: 'text-base px-6 py-3 h-12',
    lg: 'text-lg px-8 py-4 h-14',
  };
  return (
    <Comp className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  );
}
