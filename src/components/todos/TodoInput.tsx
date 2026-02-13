'use client';

import { useState, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Plus } from 'phosphor-react';
import { motion } from 'framer-motion';
import { TodoPriority } from '@/types';

interface TodoInputProps {
  onAdd: (text: string, priority: TodoPriority) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<TodoPriority>('normal');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim(), priority);
      setText('');
      setPriority('normal');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const priorityColors = {
    urgent: 'bg-red-500 hover:bg-red-600',
    important: 'bg-orange-500 hover:bg-orange-600',
    normal: 'bg-zinc-400 hover:bg-zinc-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setPriority('urgent')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            priority === 'urgent'
              ? 'bg-red-500 text-white shadow-sm'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          🔴 Acil
        </button>
        <button
          onClick={() => setPriority('important')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            priority === 'important'
              ? 'bg-orange-500 text-white shadow-sm'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          🟠 Önemli
        </button>
        <button
          onClick={() => setPriority('normal')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            priority === 'normal'
              ? 'bg-zinc-400 text-white shadow-sm'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          ⚪ Normal
        </button>
      </div>
      <div className="relative w-full">
        <Input
          placeholder="Yeni görev ekle..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-12 shadow-sm"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white transition-all duration-200 shadow-sm"
        >
          <Plus size={20} weight="bold" />
        </button>
      </div>
    </motion.div>
  );
};
