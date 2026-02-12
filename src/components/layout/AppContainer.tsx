'use client';

import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {children}
    </div>
  );
};
