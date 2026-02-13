'use client';

import { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Todo, TodoStats, TodoPriority } from '@/types';
import { generateId } from '@/utils/id.utils';
import { getCurrentTimestamp } from '@/utils/date.utils';

export const useTodos = (
  todos: Todo[],
  activeTabId: string | null,
  updateStorage: (todos: Todo[]) => void
) => {
  const filteredTodos = useMemo(() => {
    const filtered = todos.filter((todo) => todo.tabId === activeTabId);
    const priorityOrder = { urgent: 0, important: 1, normal: 2 };
    return filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }, [todos, activeTabId]);

  const createTodo = useCallback(
    (text: string, priority: TodoPriority = 'normal') => {
      if (!activeTabId || !text.trim()) return;

      const now = getCurrentTimestamp();
      const newTodo: Todo = {
        id: generateId(),
        text: text.trim(),
        completed: false,
        priority,
        subTasks: [],
        tabId: activeTabId,
        createdAt: now,
        updatedAt: now,
      };

      const updatedTodos = [...todos, newTodo];
      updateStorage(updatedTodos);
      toast.success('Görev eklendi');
    },
    [todos, activeTabId, updateStorage]
  );

  const updateTodo = useCallback(
    (id: string, text: string) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: text.trim(), updatedAt: getCurrentTimestamp() }
          : todo
      );
      updateStorage(updatedTodos);
      toast.info('Görev güncellendi');
    },
    [todos, updateStorage]
  );

  const deleteTodo = useCallback(
    (id: string) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      updateStorage(updatedTodos);
      toast.success('Görev silindi');
    },
    [todos, updateStorage]
  );

  const toggleTodo = useCallback(
    (id: string) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: getCurrentTimestamp() }
          : todo
      );
      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  const getTodoStats = useCallback(
    (id: string): TodoStats => {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return { total: 0, completed: 0 };

      const total = todo.subTasks.length;
      const completed = todo.subTasks.filter((st) => st.completed).length;

      return { total, completed };
    },
    [todos]
  );

  return {
    todos: filteredTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    getTodoStats,
  };
};
