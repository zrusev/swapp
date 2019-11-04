import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../globals/themes';

export const ThemeContext = createContext(null);
ThemeContext.displayName = 'ThemeContext';

export const EnhancedThemeProvider = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

EnhancedThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
