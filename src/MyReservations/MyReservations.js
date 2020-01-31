import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import NeedLogin from "../Utils/NeedLogin";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: "5px 5px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    deleteBookBtn: {
        backgroundColor: "red"
    }
}));

const handleClickDeleteBook = (reservation,bookedJourneys, setBookedJourneys) => {
    console.dir(reservation);
    console.log(typeof bookedJourneys);
    if (typeof bookedJourneys === "object") {
        console.dir(bookedJourneys);
        let newArray = bookedJourneys.filter(elem => elem.id != reservation.id);
        localStorage.setItem('bookedJourneys', JSON.stringify(newArray));
        setBookedJourneys(newArray);
    } else if (typeof bookedJourneys === "string") {
        let temp = JSON.parse(bookedJourneys);
        let newArray = temp.filter(elem => elem.id != reservation.id);
        localStorage.setItem('bookedJourneys', JSON.stringify(newArray));
        setBookedJourneys(newArray);
    }
};

export default function MyReservations(params) {
    const classes = useStyles();

    let reservationsList = [];

    if (typeof params.bookedJourneys === "object") {
        reservationsList = params.bookedJourneys;
        //console.log(reductionDisabled);
    } else if (typeof params.bookedJourneys === "string") {
        let temp = JSON.parse(params.bookedJourneys);
        reservationsList = temp;
    }

    console.dir({reservationsList: reservationsList});

    if (params.isLog) {
        if (reservationsList.length > 0) {
            return (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    style={{ minHeight: '90vh' , width: "90%", margin: "auto"}}
                    component="main" className={classes.root}
                >
                    {reservationsList.map((value, index) => {
                        return (
                            <Paper item className={classes.paper} style={{marginTop: "4px"}}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Typography item component="p">
                                        {value.departureStation} -> {value.arrivalStation}
                                    </Typography>
                                    <Typography item component="p">
                                        {value.departureDate} -> {value.backDate}
                                    </Typography>
                                    <Typography item component="p">
                                        {value.price} €
                                    </Typography>
                                    <Fab size="small" aria-label="add" className={classes.deleteBookBtn}  onClick={() => handleClickDeleteBook(value, params.bookedJourneys, params.setBookedJourneys)}>
                                        <RemoveIcon style={{color: "white"}} />
                                    </Fab>
                                </Grid>
                            </Paper>
                        )
                    })}
                </Grid>
            )
        } else {
            return (
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh' }}
                    component="main" className={classes.root}
                >
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <SentimentDissatisfiedOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Woooooooops !
                            </Typography>
                            <h3>You haven't made reservations yet! Go booking!</h3>
                        </div>
                    </Grid>
                </Grid>
            )
        }
    } else {
        return (
            <NeedLogin/>
        )
    }

}

