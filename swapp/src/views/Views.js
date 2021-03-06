import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import Navbar from '../shared/components/Navbar/Navbar';
import Episodes from './Episodes/Episodes';
import Episode from './Episodes/Episode/Episode';
import Characters from './Characters/Characters';
import Character from './Characters/Character/Character';
import Starships from './Starships/Starship/Starship';

const Views = () => {
  const client = useApolloClient();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    client.cache.reset();
    client.writeData({ data: { authenticated: false } });
  };

  return (
    <Switch>
      <Navbar logoutHandler={logoutHandler}>
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/episodes/:episodeId" component={Episode} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:characterId" component={Character} />
        <Route exact path="/starships/:starshipId" component={Starships} />
        <Route path="/" exact component={() => <Redirect to="/episodes" />} />
        <Route path="*" exact component={() => <Redirect to="/episodes" />} />
      </Navbar>
    </Switch>
  );
};

export default Views;
