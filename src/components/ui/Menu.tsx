'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

interface MenuItemProps {
  onClick: () => void;
  children: ReactNode;
  icon?: ReactNode;
}

export const Menu = ({ trigger, children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div
              onClick={() => setIsOpen(false)}
              className="py-1"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MenuItem = ({ onClick, children, icon }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150"
    >
      {icon && <span className="text-zinc-500 dark:text-zinc-400">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
