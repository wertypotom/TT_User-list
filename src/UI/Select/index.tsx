import React from 'react';
import styles from './index.module.css';
import { Button } from './../Button';
import { KeyboardArrowDown } from '../Icons/ArrowDown';
import { useTheme } from '@/hooks/useTheme';

interface SelectOptions {
  title: string;
  value: string;
}

interface Props<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: T[];
}

export const Select = <T extends SelectOptions>({
  options,
  ...rest
}: Props<T>) => {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <select {...rest} className={`${theme === 'light' && styles.light}`}>
        <option value='' disabled>
          Select option
        </option>
        {options.map((option) => (
          <option value={option.value} id={option.value} key={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <div className={styles.customArrow}>
        <Button icon={<KeyboardArrowDown />} />
      </div>
    </div>
  );
};
