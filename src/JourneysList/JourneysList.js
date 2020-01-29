import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: 'whitesmoke',
        marginTop: theme.spacing(2)
    },
    addBookBtn: {
        backgroundColor: "green"
    }
}));

const handleClickAddBook = (journey,bookedJourneys, setBookedJourneys) => {
  console.dir(journey);
    console.log(typeof bookedJourneys);
    if (typeof bookedJourneys === "object") {
        console.dir(bookedJourneys);
        bookedJourneys.push(journey);
        localStorage.setItem('bookedJourneys', JSON.stringify(bookedJourneys));
        setBookedJourneys(bookedJourneys);
    } else if (typeof bookedJourneys === "string") {
        let temp = JSON.parse(bookedJourneys);
        temp.push(journey);
        localStorage.setItem('bookedJourneys', JSON.stringify(temp));
        setBookedJourneys(temp);
    }
};

export default function JourneysList(params) {
    const classes = useStyles();


    if (params.journeysList.length > 0) {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
            >
                {params.journeysList.map((value, index) => {
                    let price;
                    console.log(params.reduction)
                    params.reduction === 'true' ? price = value.price/2 : price = value.price;
                    return (
                        <Paper item className={classes.paper}>
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
                                    {price}
                                </Typography>
                                <Fab size="small" aria-label="add" className={classes.addBookBtn} onClick={() => handleClickAddBook(value, params.bookedJourneys, params.setBookedJourneys)}>
                                    <AddIcon style={{color: "white"}} />
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
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography item component="h3">
                    No journeys! Start your search now from the left panel!
                </Typography>
            </Grid>
        )
    }

}

