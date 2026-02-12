'use client';

import { SubTask } from '@/types';
import { SubTaskItem } from './SubTaskItem';
import { motion, AnimatePresence } from 'framer-motion';

interface SubTaskListProps {
  subTasks: SubTask[];
  onToggle: (subTaskId: string) => void;
  onUpdate: (subTaskId: string, text: string) => void;
  onDelete: (subTaskId: string) => void;
}

export const SubTaskList = ({ subTasks, onToggle, onUpdate, onDelete }: SubTaskListProps) => {
  if (subTasks.length === 0) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden"
    >
      <div className="space-y-1 pt-2">
        <AnimatePresence mode="popLayout">
          {subTasks.map((subTask) => (
            <SubTaskItem
              key={subTask.id}
              subTask={subTask}
              onToggle={() => onToggle(subTask.id)}
              onUpdate={(text) => onUpdate(subTask.id, text)}
              onDelete={() => onDelete(subTask.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
