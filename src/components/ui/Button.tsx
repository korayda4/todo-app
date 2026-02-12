'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 hover:border-blue-600',
    secondary:
      'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700',
    ghost:
      'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-full',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
