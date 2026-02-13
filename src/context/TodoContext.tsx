'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Todo, TodoStats } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTodos } from '@/hooks/useTodos';
import { useSubTasks } from '@/hooks/useSubTasks';
import { useTabContext } from './TabContext';

interface TodoContextValue {
  todos: Todo[];
  allTodos: Todo[];
  createTodo: (text: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  getTodoStats: (id: string) => TodoStats;
  createSubTask: (todoId: string, text: string) => void;
  updateSubTask: (todoId: string, subTaskId: string, text: string) => void;
  deleteSubTask: (todoId: string, subTaskId: string) => void;
  toggleSubTask: (todoId: string, subTaskId: string) => void;
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const { activeTabId } = useTabContext();
  const { data, setData } = useLocalStorage();

  const updateStorage = (newTodos: Todo[]) => {
    setData({ todos: newTodos });
  };

  const { todos, createTodo, updateTodo, deleteTodo, toggleTodo, getTodoStats } = useTodos(
    data.todos,
    activeTabId,
    updateStorage
  );

  const { createSubTask, updateSubTask, deleteSubTask, toggleSubTask } = useSubTasks(
    data.todos,
    updateStorage
  );

  const value: TodoContextValue = {
    todos,
    allTodos: data.todos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    getTodoStats,
    createSubTask,
    updateSubTask,
    deleteSubTask,
    toggleSubTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within TodoProvider');
  }
  return context;
};
