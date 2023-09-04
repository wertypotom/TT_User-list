import React from 'react';
import cn from 'classnames';
import './index.css';
import { useTheme } from '@/hooks/useTheme';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <main className={cn('layout', { light: theme === 'light' })}>
      {children}
    </main>
  );
};
