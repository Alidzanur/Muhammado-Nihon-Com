import React, { useState, createContext, useContext } from 'react';
import clsx from 'clsx';

/*
  Simple Accordion (single/multiple) — menyembunyikan konten sebelum dibuka.
  - Default: masing-masing item independen (karena kita tidak implement kontrol global penuh di desain awal)
  - Dapat diperluas: jika ingin mode "single", bisa menambahkan koordinasi di level Accordion.
*/

const ItemContext = createContext(null);

export function Accordion({ type = 'multiple', collapsible = true, className = '', children }) {
  // Saat ini `type` belum dipakai untuk mengatur open tunggal; tetap diterima demi kompatibilitas API.
  return <div className={clsx('space-y-2', className)}>{children}</div>;
}

export function AccordionItem({ value, defaultOpen = false, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const toggle = () => setOpen(o => (!o ? true : (true && !defaultOpen ? false : !o))); // sederhana; bisa diperluas
  return (
    <ItemContext.Provider value={{ open, toggle, value }}>
      <div data-value={value} className="border rounded-xl overflow-hidden bg-white">
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({ children, className = '', ...props }) {
  const ctx = useContext(ItemContext);
  if (!ctx) return null;
  const { open, toggle, value } = ctx;
  const contentId = value ? `accordion-content-${value}` : undefined;
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={contentId}
      onClick={toggle}
      className={clsx(
        'w-full text-left px-4 py-3 font-medium flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#BC002D]/40 transition',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span className={clsx('transition-transform text-slate-500', open ? 'rotate-90' : '')}>›</span>
    </button>
  );
}

export function AccordionContent({ children, className = '' }) {
  const ctx = useContext(ItemContext);
  if (!ctx) return null;
  const { open, value } = ctx;
  const contentId = value ? `accordion-content-${value}` : undefined;
  return (
    <div
      id={contentId}
      role="region"
      aria-hidden={!open}
      className={clsx(
        'px-4 pb-4 -mt-2 text-sm text-slate-600 transition-all duration-300',
        open ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden',
        className
      )}
    >
      {open && (
        <div className="pt-1">{children}</div>
      )}
    </div>
  );
}
