import { STORAGE_KEY } from '@/constants/storage.constants';

export const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  if (!isLocalStorageAvailable()) return defaultValue;

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setToStorage = <T>(key: string, value: T): boolean => {
  if (!isLocalStorageAvailable()) return false;

  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const removeFromStorage = (key: string): void => {
  if (!isLocalStorageAvailable()) return;

  try {
    localStorage.removeItem(key);
  } catch {
    console.error('Failed to remove from storage');
  }
};

export const clearStorage = (): void => {
  if (!isLocalStorageAvailable()) return;

  try {
    localStorage.clear();
  } catch {
    console.error('Failed to clear storage');
  }
};
