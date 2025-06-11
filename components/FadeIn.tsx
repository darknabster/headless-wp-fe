// components/FadeIn.tsx
'use client'; // for app dir only; not needed in pages dir

import { motion } from 'framer-motion';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
