import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Booking from './Booking/Booking';
import Login from "./Login/Login";
import UserPanel from "./UserPanel/UserPanel";

import './App.css'

export default function App() {
    localStorage.setItem('bookedJourney','[]');
    const [isLog, setIsLog] = useState(true);

    return (
        <div className={"App"}>
            <Router>
                <AppBar position={"static"}>
                    <Toolbar>
                        <Button><Link className={"menu-button"} to={"/"}>Home</Link></Button>
                        <Button><Link className={"menu-button"} to={"/booking"}>Booking</Link></Button>
                        <Button><Link className={"menu-button"} to={"/account"}>Account</Link></Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path={"/"}><Login setIsLog={setIsLog} isLog={isLog}/></Route>
                    <Route exact path={"/booking"}><Booking isLog={isLog}/></Route>
                    <Route exact path={"/account"}><UserPanel isLog={isLog}/></Route>
                </Switch>
            </Router>
        </div>
    );
}

