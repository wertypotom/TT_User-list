import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import useLocalStorage from './useLocalStorage';

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const { setToLocalStorage } = useLocalStorage();

  const handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setToLocalStorage('theme', newTheme);
  };

  return { handleChangeTheme, theme };
};
