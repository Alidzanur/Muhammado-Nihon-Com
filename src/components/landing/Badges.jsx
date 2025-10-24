import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function KBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-200 px-4 py-2 text-ui-base text-slate-700 bg-gradient-brand-soft backdrop-blur-sm shadow-sm hover:shadow-brand hover:border-brand-300 transition-all duration-200">
      <CheckCircle2 className="w-4 h-4 text-brand-600" /> 
      <span className="font-medium">{children}</span>
    </span>
  );
}
