import { MAX_TODO_LENGTH, MAX_TAB_NAME_LENGTH } from '@/constants/ui.constants';

export const isValidTodoText = (text: string): boolean => {
  return text.trim().length > 0 && text.length <= MAX_TODO_LENGTH;
};

export const isValidTabName = (name: string): boolean => {
  return name.trim().length > 0 && name.length <= MAX_TAB_NAME_LENGTH;
};

export const sanitizeInput = (input: string): string => {
  return input.trim();
};
