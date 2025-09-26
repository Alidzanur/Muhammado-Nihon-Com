import React from 'react';
import { motion } from 'framer-motion';

/**
 * StaggerChildren
 * Membungkus grid/list agar item di dalamnya masuk dengan animasi berurutan.
 * Gunakan motion.div di item anak dengan variants childVariants.
 */
export function StaggerContainer({ children, className = '', once = true, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.13 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const childVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
