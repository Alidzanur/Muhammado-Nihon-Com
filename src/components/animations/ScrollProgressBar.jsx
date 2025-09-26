import React from 'react';
import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgressBar
 * Menampilkan progres scroll horizontal di bagian atas halaman.
 */
export function ScrollProgressBar({ height = 3, color = '#BC002D' }) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      className="fixed top-0 left-0 right-0 z-[60]"
      aria-hidden="true"
    >
      <div style={{ height, background: color }} />
    </motion.div>
  );
}
