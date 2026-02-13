'use client';

import { GridBackground } from '@/components/layout/GridBackground';
import { TabBar } from '@/components/tabs/TabBar';
import { TodoInput } from '@/components/todos/TodoInput';
import { TodoList } from '@/components/todos/TodoList';
import { TodoPreview } from '@/components/todos/TodoPreview';
import { useTodoContext } from '@/context/TodoContext';
import { useTabContext } from '@/context/TabContext';

export default function Home() {
  const { createTodo } = useTodoContext();
  const { isHydrated } = useTabContext();

  if (!isHydrated) {
    return (
      <GridBackground>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-zinc-400 dark:text-zinc-600">Yükleniyor...</p>
        </div>
      </GridBackground>
    );
  }

  return (
    <GridBackground>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-400 h-[90vh] flex items-center gap-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl p-8">
        <aside className="w-[30%] h-[50%] flex flex-col justify-center">
          <TabBar />
        </aside>

        <div className="h-[50%] w-px bg-zinc-200/30 dark:bg-zinc-700/30"></div>

        <main className="w-[40%] h-[50%] flex flex-col">
          <TodoInput onAdd={createTodo} />
          <TodoList />
        </main>

        <div className="h-[50%] w-px bg-zinc-200/30 dark:bg-zinc-700/30"></div>

        <aside className="w-[30%] h-[50%] flex flex-col justify-center">
          <TodoPreview />
        </aside>
      </div>
    </GridBackground>
  );
}
