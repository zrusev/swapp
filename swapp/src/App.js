import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import { EnhancedThemeProvider } from './style/contexts/themeContext';
import { GlobalStyles } from './style/globals/typography';
import Home from './Home';
import client from './utils/client';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <EnhancedThemeProvider>
        <>
          <GlobalStyles />
          <Home />
        </>
      </EnhancedThemeProvider>
    </Router>
  </ApolloProvider>
);

export default App;
