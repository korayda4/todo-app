'use client';

import { InputHTMLAttributes } from 'react';
import { Check } from 'phosphor-react';
import { motion } from 'framer-motion';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Checkbox = ({ checked, onCheckedChange, className = '', ...props }: CheckboxProps) => {
  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        {...props}
      />
      <motion.div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
          checked
            ? 'bg-blue-500 border-blue-500'
            : 'bg-transparent border-zinc-300 dark:border-zinc-600'
        }`}
        whileTap={{ scale: 0.9 }}
      >
        {checked && <Check size={14} weight="bold" className="text-white" />}
      </motion.div>
    </label>
  );
};
