export interface SubTask {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TodoPriority = 'urgent' | 'important' | 'normal';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: TodoPriority;
  subTasks: SubTask[];
  tabId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoStats {
  total: number;
  completed: number;
}
