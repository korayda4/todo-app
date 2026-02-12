'use client';

import { useState } from 'react';
import { Todo } from '@/types';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';
import { IconButton } from '@/components/ui/IconButton';
import { TodoMenu } from './TodoMenu';
import { SubTaskCounter } from '@/components/subtasks/SubTaskCounter';
import { SubTaskList } from '@/components/subtasks/SubTaskList';
import { SubTaskInput } from '@/components/subtasks/SubTaskInput';
import { Check, X } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useTodoContext } from '@/context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, updateTodo, deleteTodo, getTodoStats, createSubTask, toggleSubTask, updateSubTask, deleteSubTask } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [showSubTaskInput, setShowSubTaskInput] = useState(false);
  const [showSubTasks, setShowSubTasks] = useState(false);

  const stats = getTodoStats(todo.id);

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleAddSubTask = (text: string) => {
    createSubTask(todo.id, text);
    setShowSubTasks(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center gap-3">
        <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />

        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <Input
              variant="minimal"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
              autoFocus
              className="flex-1"
            />
            <IconButton size="sm" onClick={handleSave}>
              <Check size={18} weight="bold" />
            </IconButton>
            <IconButton size="sm" onClick={handleCancel}>
              <X size={18} weight="bold" />
            </IconButton>
          </div>
        ) : (
          <>
            <span
              onClick={() => {
                setIsEditing(true);
                setShowSubTasks(true);
              }}
              className={`flex-1 text-base cursor-text transition-all duration-200 ${
                todo.completed
                  ? 'line-through text-zinc-400 dark:text-zinc-600'
                  : 'text-zinc-900 dark:text-zinc-100'
              }`}
            >
              {todo.text}
            </span>
            {stats.total > 0 && (
              <button
                onClick={() => setShowSubTasks(!showSubTasks)}
                className="hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded transition-colors duration-150"
              >
                <SubTaskCounter stats={stats} />
              </button>
            )}
            <TodoMenu
              onAddSubTask={() => {
                setShowSubTaskInput(true);
                setShowSubTasks(true);
              }}
              onEdit={() => setIsEditing(true)}
              onDelete={() => deleteTodo(todo.id)}
            />
          </>
        )}
      </div>

      {showSubTasks && (
        <SubTaskList
          subTasks={todo.subTasks}
          onToggle={(subTaskId) => toggleSubTask(todo.id, subTaskId)}
          onUpdate={(subTaskId, text) => updateSubTask(todo.id, subTaskId, text)}
          onDelete={(subTaskId) => deleteSubTask(todo.id, subTaskId)}
        />
      )}

      {showSubTaskInput && (
        <div className="mt-2">
          <SubTaskInput
            onAdd={handleAddSubTask}
            onCancel={() => setShowSubTaskInput(false)}
          />
        </div>
      )}
    </motion.div>
  );
};
