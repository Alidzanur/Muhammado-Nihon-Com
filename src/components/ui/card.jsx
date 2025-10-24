import React from 'react';
import clsx from 'clsx';

export function Card({ className = '', children }) {
  return <div className={clsx('rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 hover:-translate-y-1', className)}>{children}</div>;
}
export function CardHeader({ className = '', children }) {
  return <div className={clsx('p-6 pb-4', className)}>{children}</div>;
}
export function CardTitle({ className = '', children }) {
  return <h3 className={clsx('font-bold leading-tight text-slate-800', className)}>{children}</h3>;
}
export function CardContent({ className = '', children }) {
  return <div className={clsx('p-6 pt-0 body-card text-slate-600', className)}>{children}</div>;
}
