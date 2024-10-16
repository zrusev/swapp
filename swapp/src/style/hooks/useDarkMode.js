import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  const [theme, setTheme] = useState(THEME_LIGHT);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () =>
    theme === THEME_LIGHT ? setMode(THEME_DARK) : setMode(THEME_LIGHT);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode(THEME_DARK)
      : localTheme
        ? setTheme(localTheme)
        : setMode(THEME_LIGHT);

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
