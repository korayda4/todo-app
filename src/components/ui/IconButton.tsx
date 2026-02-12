'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton = ({
  children,
  size = 'md',
  className = '',
  ...props
}: IconButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100';

  const sizeStyles = {
    sm: 'w-7 h-7 text-sm',
    md: 'w-8 h-8 text-base',
    lg: 'w-10 h-10 text-lg',
  };

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};
