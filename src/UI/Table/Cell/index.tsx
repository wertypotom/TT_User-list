import React from 'react';
import './index.css';
import cn from 'classnames';

type Props = {
  value: string | number;
  centerText?: boolean;
};

export const Cell = ({ value, centerText }: Props) => {
  return (
    <td className={cn('cell-container', { 'centered-text': centerText })}>
      {value}
    </td>
  );
};
