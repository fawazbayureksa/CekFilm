import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutePath from './components/RoutePath';
import Home from './pages/home';
import Detail from './pages/home/detail';
import Search from './pages/home/search';

const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={RoutePath.HOMEPAGE} component={Home} />
                    <Route path={RoutePath.SEARCH} component={Search} />
                    <Route path={RoutePath.DETAIL} component={Detail} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRoute;
