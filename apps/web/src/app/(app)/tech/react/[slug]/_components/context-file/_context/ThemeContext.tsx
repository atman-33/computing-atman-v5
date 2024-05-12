'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

const ThemeContext = createContext<[string, Dispatch<SetStateAction<string>>]>(['', () => 0]);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('gray');

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
