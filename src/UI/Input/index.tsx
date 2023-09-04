import React from 'react';
import style from './index.module.css';
import { Button } from './../Button';
import { KeyboardArrowDown } from '../Icons/ArrowDown';
import { KeyboardArrowUp } from '../Icons/ArrowUp';
import { useTheme } from '@/hooks/useTheme';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  decrementBtnClick?: () => void;
  incrementBtnClick?: () => void;
}

export const Input = ({
  incrementBtnClick,
  decrementBtnClick,
  ...props
}: Props) => {
  const { theme } = useTheme();

  return (
    <div className={style.container}>
      <input {...props} className={`${theme === 'light' && style.light}`} />

      {props.type === 'number' && (
        <div className={style.incrementAndDecrementBtnsConrainer}>
          <Button onClick={decrementBtnClick} icon={<KeyboardArrowDown />} />
          <div className={style.btnsDevider}></div>
          <Button onClick={incrementBtnClick} icon={<KeyboardArrowUp />} />
        </div>
      )}
    </div>
  );
};
