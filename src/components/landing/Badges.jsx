import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function KBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-[#2D3748] border-[#E2E8F0] bg-white">
      <CheckCircle2 className="w-4 h-4 text-[#BC002D]" /> {children}
    </span>
  );
}
