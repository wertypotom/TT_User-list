import React from 'react';
import styles from './index.module.css';
import { useTheme } from '@/hooks/useTheme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
}

export const Button = ({ title = 'Click', icon, ...rest }: Props) => {
  const { theme } = useTheme();

  return (
    <button
      className={`${styles.btn} ${theme === 'light' && styles.light}`}
      {...rest}
    >
      {icon || title}
    </button>
  );
};
