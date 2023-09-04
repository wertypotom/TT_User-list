import React from 'react';
import styles from './index.module.css';
import { useTheme } from '@/hooks/useTheme';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export const Checkbox = ({ title, ...rest }: Props) => {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <input
        className={`${theme === 'light' && styles.light}`}
        type='checkbox'
        id={title}
        {...rest}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};
