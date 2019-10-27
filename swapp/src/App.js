import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/globals/theme';
import { GlobalStyles } from './style/globals/typography';
import { useDarkMode } from './style/hooks/useDarkMode';

import Navbar from './shared/Navbar/Navbar';
import LoginComponent from './views/Login/Login';

export const RouteMatcher = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => 
              <LoginComponent theme={themeMode}/>
            }/>              
            <Route exact path="/episodes" render={() =>
              <Navbar theme={themeMode} toggleTheme={toggleTheme} />
            }/>
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};