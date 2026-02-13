'use client';

import { useTodoContext } from '@/context/TodoContext';
import { TodoItem } from './TodoItem';
import { AnimatePresence } from 'framer-motion';

export const TodoList = () => {
  const { todos } = useTodoContext();

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-400 dark:text-zinc-600 text-lg">
          Henüz görev yok. Yukarıdan bir görev ekleyin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 overflow-y-auto pr-2 flex-1">
      <AnimatePresence mode="popLayout">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </div>
  );
};
