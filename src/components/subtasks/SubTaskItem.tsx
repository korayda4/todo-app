'use client';

import { useState } from 'react';
import { SubTask } from '@/types';
import { Checkbox } from '@/components/ui/Checkbox';
import { IconButton } from '@/components/ui/IconButton';
import { Input } from '@/components/ui/Input';
import { Trash, Check, X } from 'phosphor-react';
import { motion } from 'framer-motion';

interface SubTaskItemProps {
  subTask: SubTask;
  onToggle: () => void;
  onUpdate: (text: string) => void;
  onDelete: () => void;
}

export const SubTaskItem = ({ subTask, onToggle, onUpdate, onDelete }: SubTaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(subTask.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(subTask.text);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-150"
    >
      <Checkbox checked={subTask.completed} onCheckedChange={onToggle} />

      {isEditing ? (
        <div className="flex-1 flex items-center gap-2">
          <Input
            variant="minimal"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            autoFocus
            className="flex-1"
          />
          <IconButton size="sm" onClick={handleSave}>
            <Check size={16} weight="bold" />
          </IconButton>
          <IconButton size="sm" onClick={handleCancel}>
            <X size={16} weight="bold" />
          </IconButton>
        </div>
      ) : (
        <>
          <span
            onClick={() => setIsEditing(true)}
            className={`flex-1 text-sm cursor-text transition-all duration-200 ${
              subTask.completed
                ? 'line-through text-zinc-400 dark:text-zinc-600'
                : 'text-zinc-700 dark:text-zinc-300'
            }`}
          >
            {subTask.text}
          </span>
          <IconButton size="sm" onClick={onDelete}>
            <Trash size={16} weight="bold" />
          </IconButton>
        </>
      )}
    </motion.div>
  );
};
