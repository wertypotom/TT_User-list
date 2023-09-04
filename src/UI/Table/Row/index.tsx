import React from 'react';
import { Cell } from '../Cell';
import './index.css';
import cn from 'classnames';
import { useTheme } from '@/hooks/useTheme';

type Props<T> = {
  data: T;
  filled?: boolean;
  centerText?: boolean;
  onRowClick?: (data: T) => void;
  selected?: boolean;
};

export const Row = <T extends object>({
  selected,
  onRowClick,
  data,
  filled,
  ...rest
}: Props<T>) => {
  const { theme } = useTheme();

  const handleRowClick = () => {
    if (!onRowClick) return;

    onRowClick(data);
  };

  return (
    <tr
      onClick={handleRowClick}
      className={cn(
        'row-container',
        { 'color-filled': filled },
        { 'selected-row': selected },
        {
          light: theme === 'light',
        }
      )}
    >
      {Object.keys(data).map((value) => {
        if (value === 'id' || value === 'selected') return undefined;

        return (
          <Cell
            {...rest}
            key={value}
            value={data[value as keyof typeof data]}
          />
        );
      })}
    </tr>
  );
};
