'use client';

import { useState, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Plus } from 'phosphor-react';

interface SubTaskInputProps {
  onAdd: (text: string) => void;
  onCancel?: () => void;
}

export const SubTaskInput = ({ onAdd, onCancel }: SubTaskInputProps) => {
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
    if (e.key === 'Escape' && onCancel) {
      onCancel();
    }
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <Input
        variant="minimal"
        placeholder="Alt görev ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        className="flex-1"
      />
      <Button size="sm" variant="ghost" onClick={handleSubmit}>
        <Plus size={18} weight="bold" />
      </Button>
    </div>
  );
};
