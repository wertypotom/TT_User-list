import useLocalStorage from '@/hooks/useLocalStorage';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;
type ThemeProviderProps = {
  children: React.ReactNode;
};

type Themes = 'light' | 'dark';

type ThemeContextProviderProps = {
  theme: Themes;
  setTheme: TypeSetState<Themes>;
};

export const ThemeContext = createContext<ThemeContextProviderProps>({
  theme: 'dark',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { getFromLocalStorage } = useLocalStorage();
  const [theme, setTheme] = useState<Themes>(
    getFromLocalStorage<Themes>('theme') || 'dark'
  );

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
