'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Tab } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTabs } from '@/hooks/useTabs';

interface TabContextValue {
  tabs: Tab[];
  activeTabId: string | null;
  createTab: (name?: string) => void;
  updateTab: (id: string, name: string) => void;
  deleteTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  isHydrated: boolean;
}

const TabContext = createContext<TabContextValue | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const { getData, setData, isHydrated } = useLocalStorage();
  const storageData = getData();

  const updateStorage = (newTabs: Tab[], newActiveTabId?: string | null) => {
    setData({
      tabs: newTabs,
      activeTabId: newActiveTabId !== undefined ? newActiveTabId : storageData.activeTabId,
    });
  };

  const { createTab, updateTab, deleteTab, setActiveTab } = useTabs(
    storageData.tabs,
    storageData.activeTabId,
    updateStorage
  );

  const value: TabContextValue = {
    tabs: storageData.tabs,
    activeTabId: storageData.activeTabId,
    createTab,
    updateTab,
    deleteTab,
    setActiveTab,
    isHydrated,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within TabProvider');
  }
  return context;
};
