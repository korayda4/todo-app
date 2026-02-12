'use client';

import { useState } from 'react';
import { Tab } from '@/types';
import { IconButton } from '@/components/ui/IconButton';
import { TabInput } from './TabInput';
import { PencilSimple, X } from 'phosphor-react';
import { motion } from 'framer-motion';

interface TabItemProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
  onUpdate: (name: string) => void;
  onDelete: () => void;
  canDelete: boolean;
}

export const TabItem = ({ tab, isActive, onClick, onUpdate, onDelete, canDelete }: TabItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <TabInput
        defaultValue={tab.name}
        onSave={(name) => {
          onUpdate(name);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'bg-blue-500 text-white shadow-md'
          : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500'
      }`}
    >
      <button onClick={onClick} className="flex-1 text-left">
        {tab.name}
      </button>
      <div className={`flex items-center gap-1 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-150`}>
        <IconButton size="sm" onClick={() => setIsEditing(true)} className={isActive ? 'text-white hover:bg-blue-600' : ''}>
          <PencilSimple size={14} weight="bold" />
        </IconButton>
        {canDelete && (
          <IconButton size="sm" onClick={onDelete} className={isActive ? 'text-white hover:bg-blue-600' : ''}>
            <X size={14} weight="bold" />
          </IconButton>
        )}
      </div>
    </motion.div>
  );
};
