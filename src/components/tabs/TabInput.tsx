'use client';

import { useState, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { IconButton } from '@/components/ui/IconButton';
import { Check, X } from 'phosphor-react';

interface TabInputProps {
  defaultValue?: string;
  onSave: (name: string) => void;
  onCancel: () => void;
}

export const TabInput = ({ defaultValue = '', onSave, onCancel }: TabInputProps) => {
  const [name, setName] = useState(defaultValue);

  const handleSave = () => {
    if (name.trim()) {
      onSave(name.trim());
    } else {
      onCancel();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
      <Input
        variant="minimal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Tab adı..."
        autoFocus
        className="text-sm min-w-[100px]"
      />
      <IconButton size="sm" onClick={handleSave}>
        <Check size={16} weight="bold" />
      </IconButton>
      <IconButton size="sm" onClick={onCancel}>
        <X size={16} weight="bold" />
      </IconButton>
    </div>
  );
};
