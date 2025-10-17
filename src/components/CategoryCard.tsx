"use client";

import { PropsWithChildren, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type CategoryCardProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
}>;

export function CategoryCard({ title, subtitle, defaultOpen = false, children }: CategoryCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="flex-none min-w-0">
      <motion.article
        layout="size"
        className="mx-auto w-full max-w-4xl lg:max-w-5xl min-h-28 flex-none basis-full rounded-lg bg-white shadow-sm [will-change:box-shadow]"
        initial={false}
        animate={{ boxShadow: isOpen ? '0px 0px 0px 2px rgb(229 231 235)' : '0px 0px 0px 1px rgb(229 231 235)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-200"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-gray-600">{subtitle}</p> : null}
        </div>
        <motion.svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5 text-gray-600"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        >
          <path fill="currentColor" d="M6.7 9.3a1 1 0 0 1 1.4 0L12 13.17l3.9-3.88a1 1 0 1 1 1.4 1.42l-4.6 4.58a1 1 0 0 1-1.4 0L6.7 10.7a1 1 0 0 1 0-1.4z" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            layout
            key="content"
            initial={{ height: 0, opacity: 0, borderTopWidth: 1 }}
            animate={{ height: 'auto', opacity: 1, borderTopWidth: 2 }}
            exit={{ height: 0, opacity: 0, borderTopWidth: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.3 }}
            className="border-t border-gray-200 overflow-hidden"
          >
            <div className="p-5">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </motion.article>
    </div>
  );
}


