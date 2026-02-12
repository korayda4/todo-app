'use client';

import { GridBackground } from '@/components/layout/GridBackground';
import { AppContainer } from '@/components/layout/AppContainer';
import { TabBar } from '@/components/tabs/TabBar';
import { TodoInput } from '@/components/todos/TodoInput';
import { TodoList } from '@/components/todos/TodoList';
import { useTodoContext } from '@/context/TodoContext';
import { useTabContext } from '@/context/TabContext';

export default function Home() {
  const { createTodo } = useTodoContext();
  const { isHydrated } = useTabContext();

  if (!isHydrated) {
    return (
      <GridBackground>
        <AppContainer>
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-zinc-400 dark:text-zinc-600">Yükleniyor...</p>
          </div>
        </AppContainer>
      </GridBackground>
    );
  }

  return (
    <GridBackground>
      <AppContainer>
        <TabBar />
        <TodoInput onAdd={createTodo} />
        <TodoList />
      </AppContainer>
    </GridBackground>
  );
}
