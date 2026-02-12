'use client';

import { TodoStats } from '@/types';

interface SubTaskCounterProps {
  stats: TodoStats;
}

export const SubTaskCounter = ({ stats }: SubTaskCounterProps) => {
  if (stats.total === 0) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
      <span className="font-medium">
        {stats.completed}/{stats.total}
      </span>
      <span>tamamlandı</span>
    </div>
  );
};
