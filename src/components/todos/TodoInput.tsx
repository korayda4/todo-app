'use client';

import { useState, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Plus } from 'phosphor-react';
import { motion } from 'framer-motion';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-3 mb-8"
    >
      <div className="relative w-full max-w-xl">
        <Input
          placeholder="Yeni görev ekle..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-12 shadow-lg"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
        >
          <Plus size={20} weight="bold" />
        </button>
      </div>
    </motion.div>
  );
};
