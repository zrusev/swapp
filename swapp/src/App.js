import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/globals/theme';
import { GlobalStyles } from './style/globals/typography';
import { useDarkMode } from './style/hooks/useDarkMode';
import Toggle from './components/Toggle/Toggle';
import LoginComponent from './components/Login/Login';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <LoginComponent theme={themeMode}/>
        <Toggle toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
