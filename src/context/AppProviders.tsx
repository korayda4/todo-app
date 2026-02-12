'use client';

import { ReactNode } from 'react';
import { TabProvider } from './TabContext';
import { TodoProvider } from './TodoContext';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <TabProvider>
      <TodoProvider>{children}</TodoProvider>
    </TabProvider>
  );
};
