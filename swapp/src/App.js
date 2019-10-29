import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/globals/theme';
import { GlobalStyles } from './style/globals/typography';
import { useDarkMode } from './style/hooks/useDarkMode';

import Navbar from './shared/Navbar/Navbar';
import Login from './views/Login/Login';
import Episodes from './views/Episodes/Episodes';
import Episode from './views/Episodes/Episode/Episode';
import Characters from './views/Characters/Characters';
import Character from './views/Characters/Character/Character';
import StarShips from './views/StarShips/StarShips';

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
              <Login theme={themeMode}/>
            }/>              
            <Navbar toggleTheme={toggleTheme}>
              <Route exact path="/episodes" render={() =>
                  <Episodes />
              }/>
              <Route exact path="/episode" render={() =>
                  <Episode />
              }/>
              <Route exact path="/characters" render={() =>
                  <Characters />
              }/>
              <Route exact path="/character" render={() =>
                  <Character />
              }/>
              <Route exact path="/starships" render={() =>
                  <StarShips />
              }/>
            </Navbar>
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};