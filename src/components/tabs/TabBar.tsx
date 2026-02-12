'use client';

import { useTabContext } from '@/context/TabContext';
import { TabItem } from './TabItem';
import { AddTabButton } from './AddTabButton';
import { AnimatePresence } from 'framer-motion';

export const TabBar = () => {
  const { tabs, activeTabId, setActiveTab, createTab, updateTab, deleteTab } = useTabContext();

  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex items-center gap-2 pb-2">
        <AnimatePresence mode="popLayout">
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTabId}
              onClick={() => setActiveTab(tab.id)}
              onUpdate={(name) => updateTab(tab.id, name)}
              onDelete={() => deleteTab(tab.id)}
              canDelete={tabs.length > 1}
            />
          ))}
        </AnimatePresence>
        <AddTabButton onAdd={createTab} />
      </div>
    </div>
  );
};
