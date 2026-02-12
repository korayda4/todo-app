'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'minimal';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseStyles =
      'w-full outline-none transition-all duration-200 text-zinc-900 dark:text-zinc-100';

    const variantStyles = {
      default:
        'px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-500',
      minimal:
        'px-3 py-2 rounded-lg bg-transparent border-b border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-500',
    };

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
