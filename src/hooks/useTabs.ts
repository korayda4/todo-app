'use client';

import { useCallback } from 'react';
import { Tab } from '@/types';
import { generateId } from '@/utils/id.utils';
import { getCurrentTimestamp } from '@/utils/date.utils';
import { DEFAULT_TAB_NAME } from '@/constants/storage.constants';

export const useTabs = (
  tabs: Tab[],
  activeTabId: string | null,
  updateStorage: (tabs: Tab[], newActiveTabId?: string | null) => void
) => {
  const createTab = useCallback(
    (name: string = DEFAULT_TAB_NAME) => {
      const now = getCurrentTimestamp();
      const newTab: Tab = {
        id: generateId(),
        name: name.trim() || DEFAULT_TAB_NAME,
        createdAt: now,
        updatedAt: now,
      };

      const updatedTabs = [...tabs, newTab];
      updateStorage(updatedTabs, newTab.id);
    },
    [tabs, updateStorage]
  );

  const updateTab = useCallback(
    (id: string, name: string) => {
      const updatedTabs = tabs.map((tab) =>
        tab.id === id
          ? { ...tab, name: name.trim(), updatedAt: getCurrentTimestamp() }
          : tab
      );
      updateStorage(updatedTabs);
    },
    [tabs, updateStorage]
  );

  const deleteTab = useCallback(
    (id: string) => {
      if (tabs.length === 1) return;

      const updatedTabs = tabs.filter((tab) => tab.id !== id);
      const newActiveTabId = activeTabId === id ? updatedTabs[0]?.id || null : activeTabId;
      updateStorage(updatedTabs, newActiveTabId);
    },
    [tabs, activeTabId, updateStorage]
  );

  const setActiveTab = useCallback(
    (id: string) => {
      updateStorage(tabs, id);
    },
    [tabs, updateStorage]
  );

  return {
    createTab,
    updateTab,
    deleteTab,
    setActiveTab,
  };
};
