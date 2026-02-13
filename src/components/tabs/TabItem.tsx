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
      onClick={onClick}
      className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
        isActive
          ? 'bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30'
          : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
      }`}
    >
      <div className="flex-1 text-left truncate">
        {tab.name}
      </div>
      <div className={`flex items-center gap-1 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-150`}>
        <IconButton
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
          className={isActive ? 'text-white hover:bg-white/20' : ''}
        >
          <PencilSimple size={14} weight="bold" />
        </IconButton>
        {canDelete && (
          <IconButton
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className={isActive ? 'text-white hover:bg-white/20' : ''}
          >
            <X size={14} weight="bold" />
          </IconButton>
        )}
      </div>
    </motion.div>
  );
};
