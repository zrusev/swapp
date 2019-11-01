import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../shared/Navbar/Navbar';
import Episodes from './Episodes/Episodes';
import Episode from './Episodes/Episode/Episode';
import Characters from './Characters/Characters';
import Character from './Characters/Character/Character';
import Starships from './Starships/Starships';

const Views = () => {
    return (
        <Switch>          
            <Navbar>
                <Route exact path="/episodes" component={Episodes} />
                <Route exact path="/episode" component={Episode} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/character" component={Character} />
                <Route exact path="/starships" component={Starships} />
            </Navbar>
        </Switch>
    )
}

export default Views;