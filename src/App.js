import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Booking from './Booking/Booking';
import Login from "./Login/Login";
import UserPanel from "./UserPanel/UserPanel";

import './App.css'
import MyReservations from "./MyReservations/MyReservations";

export default function App() {
    const [isLog, setIsLog] = useState(localStorage.getItem('isLog') || false);
    const [reduction, setReduction] = useState(localStorage.getItem('reduction') || false);
    const [bookedJourneys, setBookedJourneys] = useState(localStorage.getItem('bookedJourneys') || []);
    const [redirection, setRedirection] = useState(false);
    // TODO logout button and function

    const logout = () => {
        console.log('disconnect');
        localStorage.removeItem('isLog');
        setIsLog(false);
    }

    return (
        <div className={"App"}>
            <Router>
                <AppBar position={"static"}>
                    <Toolbar>
                        {!isLog && <Button><Link className={"menu-button"} to={"/"}>Home</Link></Button>}
                        <Button><Link className={"menu-button"} to={"/booking"}>Booking</Link></Button>
                        <Button><Link className={"menu-button"} to={"/myreservations"}>Reservations</Link></Button>
                        <Button><Link className={"menu-button"} to={"/account"}>Account</Link></Button>
                        {isLog && <Button style={{color: "white", float:"right"}} onClick={logout}>Logout</Button>}
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path={"/"}><Login setIsLog={setIsLog} isLog={isLog}/></Route>
                    <Route exact path={"/booking"}><Booking isLog={isLog} reduction={reduction} bookedJourneys={bookedJourneys} setBookedJourneys={setBookedJourneys}/></Route>
                    <Route exact path={"/myreservations"}><MyReservations isLog={isLog} bookedJourneys={bookedJourneys} setBookedJourneys={setBookedJourneys}/></Route>
                    <Route exact path={"/account"}><UserPanel isLog={isLog} reduction={reduction} setReduction={setReduction} bookedJourneys={bookedJourneys}/></Route>
                </Switch>
            </Router>
        </div>
    );
}

