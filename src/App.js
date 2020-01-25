import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Booking from './Booking/Booking';
import Login from "./Login/Login";
import UserPanel from "./UserPanel/UserPanel";

import './App.css'

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"App"}>
                <Router>
                    <AppBar position={"static"}>
                        <Toolbar>

                            <Button><Link className={"menu-button"} to={"/"}>Accueil</Link></Button>
                            <Button><Link className={"menu-button"} to={"/booking"}>Booking</Link></Button>
                            <Button><Link className={"menu-button"} to={"/account"}>Account</Link></Button>
                        </Toolbar>
                    </AppBar>

                    <Switch>
                        <Route exact path={"/"}><Login/></Route>
                        <Route exact path={"/booking"}><Booking/></Route>
                        <Route exact path={"/account"}><UserPanel/></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

