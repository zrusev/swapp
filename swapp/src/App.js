import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { EnhancedThemeProvider } from './style/contexts/themeContext';
import { GlobalStyles } from './style/globals/typography';
import Home from './Home';

const App = () => (
  <Router>
    <EnhancedThemeProvider>
      <>
        <GlobalStyles />
        <Home />
      </>
    </EnhancedThemeProvider>
  </Router>
);

export default App;