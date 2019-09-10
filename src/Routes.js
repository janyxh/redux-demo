import React from 'react';
import { Route, Switch } from "react-router-dom";
import List from './Page/List';
import About from './Page/About';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/about" component={About} />
            </Switch>
        )
    }
}

export default Routes;