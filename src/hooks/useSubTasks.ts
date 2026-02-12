'use client';

import { useCallback } from 'react';
import { Todo, SubTask } from '@/types';
import { generateId } from '@/utils/id.utils';
import { getCurrentTimestamp } from '@/utils/date.utils';

export const useSubTasks = (todos: Todo[], updateStorage: (todos: Todo[]) => void) => {
  const createSubTask = useCallback(
    (todoId: string, text: string) => {
      if (!text.trim()) return;

      const now = getCurrentTimestamp();
      const newSubTask: SubTask = {
        id: generateId(),
        text: text.trim(),
        completed: false,
        createdAt: now,
        updatedAt: now,
      };

      const updatedTodos = todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subTasks: [...todo.subTasks, newSubTask],
              updatedAt: now,
            }
          : todo
      );

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  const updateSubTask = useCallback(
    (todoId: string, subTaskId: string, text: string) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subTasks: todo.subTasks.map((st) =>
                st.id === subTaskId
                  ? { ...st, text: text.trim(), updatedAt: getCurrentTimestamp() }
                  : st
              ),
              updatedAt: getCurrentTimestamp(),
            }
          : todo
      );

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  const deleteSubTask = useCallback(
    (todoId: string, subTaskId: string) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subTasks: todo.subTasks.filter((st) => st.id !== subTaskId),
              updatedAt: getCurrentTimestamp(),
            }
          : todo
      );

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  const toggleSubTask = useCallback(
    (todoId: string, subTaskId: string) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subTasks: todo.subTasks.map((st) =>
                st.id === subTaskId
                  ? { ...st, completed: !st.completed, updatedAt: getCurrentTimestamp() }
                  : st
              ),
              updatedAt: getCurrentTimestamp(),
            }
          : todo
      );

      updateStorage(updatedTodos);
    },
    [todos, updateStorage]
  );

  return {
    createSubTask,
    updateSubTask,
    deleteSubTask,
    toggleSubTask,
  };
};
