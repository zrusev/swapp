import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import Navbar from '../shared/Navbar/Navbar';
import Episodes from './Episodes/Episodes';
import Episode from './Episodes/Episode/Episode';
import Characters from './Characters/Characters';
import Character from './Characters/Character/Character';
import Starships from './Starships/Starship/Starship';

const Views = () => {
    const client = useApolloClient();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        client.writeData({ data: { authenticated: false } });
    };

    return (
        <Switch>          
            <Navbar logoutHandler={logoutHandler}>
                <Route exact path="/episodes" component={Episodes} />
                <Route exact path="/episodes/:episodeId" component={Episode} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/character" component={Character} />
                <Route exact path="/starships" component={Starships} />
                <Route path="/" exact component={() => <Redirect to="/episodes" />} />
            </Navbar>
        </Switch>
    )
}

export default Views;