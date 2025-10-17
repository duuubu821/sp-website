"use client";

import { PropsWithChildren, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function RouteTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => setIsAnimating(true), [pathname]);
  return (
    <div style={{ position: 'relative' }}>
      {isAnimating ? (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {children}
        </motion.div>
      ) : (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}


