'use client';

import { useState, useEffect, useCallback } from 'react';
import { StorageData } from '@/types';
import { STORAGE_KEY, DEFAULT_TAB_NAME } from '@/constants/storage.constants';
import { getFromStorage, setToStorage, clearStorage } from '@/utils/storage.utils';
import { generateId } from '@/utils/id.utils';
import { getCurrentTimestamp } from '@/utils/date.utils';

const getDefaultData = (): StorageData => {
  const defaultTabId = generateId();
  const now = getCurrentTimestamp();

  return {
    tabs: [
      {
        id: defaultTabId,
        name: DEFAULT_TAB_NAME,
        createdAt: now,
        updatedAt: now,
      },
    ],
    todos: [],
    activeTabId: defaultTabId,
  };
};

export const useLocalStorage = () => {
  const [data, setData] = useState<StorageData>(getDefaultData());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedData = getFromStorage<StorageData>(STORAGE_KEY, getDefaultData());
    setData(storedData);
    setIsHydrated(true);
  }, []);

  const getData = useCallback((): StorageData => {
    return data;
  }, [data]);

  const updateData = useCallback((newData: Partial<StorageData>) => {
    setData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      setToStorage(STORAGE_KEY, updatedData);
      return updatedData;
    });
  }, []);

  const clearAll = useCallback(() => {
    const defaultData = getDefaultData();
    setData(defaultData);
    clearStorage();
    setToStorage(STORAGE_KEY, defaultData);
  }, []);

  return {
    getData,
    setData: updateData,
    clearAll,
    isHydrated,
  };
};
