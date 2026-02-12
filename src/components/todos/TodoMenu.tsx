'use client';

import { Menu, MenuItem } from '@/components/ui/Menu';
import { IconButton } from '@/components/ui/IconButton';
import { DotsThree, Plus, PencilSimple, Trash } from 'phosphor-react';

interface TodoMenuProps {
  onAddSubTask: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const TodoMenu = ({ onAddSubTask, onEdit, onDelete }: TodoMenuProps) => {
  return (
    <Menu
      trigger={
        <IconButton size="sm">
          <DotsThree size={20} weight="bold" />
        </IconButton>
      }
    >
      <MenuItem onClick={onAddSubTask} icon={<Plus size={18} weight="bold" />}>
        Alt görev ekle
      </MenuItem>
      <MenuItem onClick={onEdit} icon={<PencilSimple size={18} weight="bold" />}>
        Düzenle
      </MenuItem>
      <MenuItem onClick={onDelete} icon={<Trash size={18} weight="bold" />}>
        Sil
      </MenuItem>
    </Menu>
  );
};
