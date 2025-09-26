import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionFadeIn
 * Membungkus konten section agar muncul dengan animasi saat masuk viewport.
 * Props:
 *  - delay: number (opsional)
 *  - className: string
 *  - as: elemen wrapper (default: section)
 */
export default function SectionFadeIn({
  children,
  delay = 0,
  className = '',
  as: Tag = 'section',
  y = 24,
  x = 0,
  scale = 1,
  once = true,
  duration = 0.6,
  ease = 'easeOut',
  threshold = 0.15,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale: scale !== 1 ? scale : 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount: threshold, margin: '0px 0px -80px 0px' }}
      transition={{ duration, ease, delay }}
    >
      <Tag className={className} {...rest}>{children}</Tag>
    </motion.div>
  );
}

