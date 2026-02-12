import { Tab } from './tab.types';
import { Todo } from './todo.types';

export interface StorageData {
  tabs: Tab[];
  todos: Todo[];
  activeTabId: string | null;
}

export interface StorageManager {
  getData: () => StorageData;
  setData: (data: Partial<StorageData>) => void;
  clearAll: () => void;
  isHydrated: boolean;
}
