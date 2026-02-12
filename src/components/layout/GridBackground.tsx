'use client';

import { ReactNode } from 'react';

interface GridBackgroundProps {
  children: ReactNode;
}

export const GridBackground = ({ children }: GridBackgroundProps) => {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 grid-background">
      {children}
    </div>
  );
};
