import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Booking from './Booking/Booking';
import Login from "./Login/Login";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"App"}>
                <Router>
                    <Link to={"/"}>Accueil</Link>
                    <Link to={"/booking"}>Booking</Link>

                    <Switch>
                        <Route exact path={"/"}><Login/></Route>
                        <Route exact path={"/booking"}><Booking/></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

