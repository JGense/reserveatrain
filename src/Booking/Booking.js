import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NeedLogin from "../Utils/NeedLogin";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import {TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";

import journeys from '../Utils/journeys';
import JourneysList from "../JourneysList/JourneysList";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        minHeight: "40vh"
    },
    bookingForm: {
        marginTop: theme.spacing(3)
    },
    arrivalStation: {
        marginTop: theme.spacing(1)
    },
    dateInputs: {
        marginTop: theme.spacing(3)
    },
    submitBtn: {
        marginTop: theme.spacing(3)
    }
}));

export default function Booking(params) {
    const classes = useStyles();
    const [values, setValues] = useState({
        departureStation: '',
        arrivalStation: ''
    });

    const [selectedDateDeparture, setSelectedDateDeparture] = useState(new Date());
    const [selectedDateArrival, setSelectedDateArrival] = useState(new Date());

    const [journeysFind, setJourneysFind] =  useState([]);

    const handleDateDepartureChange = date => {
        console.dir(date);
        setSelectedDateDeparture(date);
    };

    const handleDateArrivalChange = date => {
        setSelectedDateArrival(date);
    };

    const handleChangeInput = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmitSearch= event => {
        let formatedDeparture = selectedDateDeparture.getDate()+'/'+selectedDateDeparture.getMonth()+1+'/'+selectedDateDeparture.getFullYear();
        let formatedArrival = selectedDateArrival.getDate()+'/'+selectedDateArrival.getMonth()+1+'/'+selectedDateArrival.getFullYear();
        let journeysFind = journeys.filter(
            function(journey){ return ((journey.departureStation == values.departureStation) && (journey.arrivalStation == values.arrivalStation) ) }
        );
        setJourneysFind(journeysFind);
        event.preventDefault();
    }

    if (params.isLog) {
        return (
            <Grid
                container
                spacing={4}
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: '90vh' , margin: "0", width: "100%" }}
            >
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography component="h3" variant="h5">
                            What is your journey?
                        </Typography>
                        <form className={classes.bookingForm}>
                            <FormControl fullWidth>
                                <TextField value={values.departureStation}
                                           onChange={handleChangeInput('departureStation')}
                                           id="departureStationInput"
                                           label="Departure station"
                                           variant="outlined"
                                           size="small"
                                />
                                <TextField value={values.arrivalStation} className={classes.arrivalStation}
                                           onChange={handleChangeInput('arrivalStation')}
                                           id="arrivalStationInput"
                                           label="Arrival station"
                                           variant="outlined"
                                           size="small"
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around" className={classes.dateInputs}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Departure date"
                                            format="dd/MM/yyyy"
                                            value={selectedDateDeparture}
                                            onChange={handleDateDepartureChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            fullWidth
                                        />
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Arrival date"
                                            format="dd/MM/yyyy"
                                            value={selectedDateArrival}
                                            onChange={handleDateArrivalChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            fullWidth
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </FormControl>
                            <Button
                                onClick={handleSubmitSearch}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submitBtn}
                            >
                                SEARCH
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <JourneysList journeysList={journeysFind} reduction={params.reduction}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <NeedLogin/>
        )
    }
}

