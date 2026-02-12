'use client';

import { useState } from 'react';
import { Plus } from 'phosphor-react';
import { TabInput } from './TabInput';
import { motion } from 'framer-motion';

interface AddTabButtonProps {
  onAdd: (name: string) => void;
}

export const AddTabButton = ({ onAdd }: AddTabButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    return (
      <TabInput
        onSave={(name) => {
          onAdd(name);
          setIsAdding(false);
        }}
        onCancel={() => setIsAdding(false)}
      />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsAdding(true)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-dashed border-zinc-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-200"
    >
      <Plus size={16} weight="bold" />
      <span>Yeni Tab</span>
    </motion.button>
  );
};
