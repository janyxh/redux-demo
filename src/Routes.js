import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";

import List from "./Page/List"
const About = lazy(() => import('./Page/About'));
const AppContext = lazy(() => import('./Page/Context'));
const Appprop = lazy(() => import('./Page/Prop'));

class Routes extends React.Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/about" component={About} />
                    <Route path="/context" component={AppContext} />
                    <Route path="/prop" component={Appprop} />
                </Switch>
            </Suspense >
        )
    }
}

export default Routes;