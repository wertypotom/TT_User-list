import React from 'react';
import styles from './index.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Switch = ({ label, ...rest }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['toggle-switch']}>
        <input
          {...rest}
          type='checkbox'
          className={styles.checkbox}
          name={label}
          id={label}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
      <span className={styles.title}>{label}</span>
    </div>
  );
};
