'use client';

import { useTodoContext } from '@/context/TodoContext';
import { useTabContext } from '@/context/TabContext';

export const TodoPreview = () => {
  const { allTodos } = useTodoContext();
  const { setActiveTab, tabs } = useTabContext();

  const activeTodos = allTodos.filter((todo) => !todo.completed);

  const getTabName = (tabId: string) => {
    return tabs.find((t) => t.id === tabId)?.name || '';
  };

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-2">
      {activeTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="text-6xl text-zinc-200 dark:text-zinc-800">📋</div>
          <p className="text-zinc-400 dark:text-zinc-600 text-sm text-center">
            Gösterilecek görev yok...
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {activeTodos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => setActiveTab(todo.tabId)}
              className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all duration-200"
            >
              <div className="text-xs text-indigo-500 dark:text-indigo-400 mb-1 font-medium">
                {getTabName(todo.tabId)}
              </div>
              <div className="text-sm text-zinc-900 dark:text-zinc-100 font-medium mb-2">
                {todo.text}
              </div>

              {todo.subTasks.length > 0 && (
                <ul className="space-y-1 mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  {todo.subTasks.map((st) => (
                    <li
                      key={st.id}
                      className={`text-xs pl-3 flex items-center gap-2 ${
                        st.completed
                          ? 'line-through text-zinc-400 dark:text-zinc-600'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      <span className={st.completed ? 'text-green-500' : 'text-zinc-300 dark:text-zinc-700'}>
                        {st.completed ? '✓' : '○'}
                      </span>
                      {st.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
