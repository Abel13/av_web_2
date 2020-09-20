import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Pokemons from "../pages/Pokemons";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/pokemons" component={Pokemons} />
    </Switch>
);

export default Routes;
