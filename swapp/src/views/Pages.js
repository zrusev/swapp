import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../shared/Navbar/Navbar';
import Episodes from '../views/Episodes/Episodes';
import Episode from '../views/Episodes/Episode/Episode';
import Characters from '../views/Characters/Characters';
import Character from '../views/Characters/Character/Character';
import StarShips from '../views/Starships/StarShips';

const Pages = () => {
    return (
        <Switch>          
            <Navbar>
                <Route exact path="/episodes" component={Episodes} />
                <Route exact path="/episode" component={Episode} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/character" component={Character} />
                <Route exact path="/starships" component={StarShips} />
            </Navbar>
        </Switch>
    )
}

export default Pages;