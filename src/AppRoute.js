import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutePath from './components/RoutePath';
import Home from './pages/home';
import Search from './pages/home/search';

const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={RoutePath.HOMEPAGE} component={Home} />
                    <Route path={RoutePath.SEARCH} component={Search} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRoute;
