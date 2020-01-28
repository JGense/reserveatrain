import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: 'whitesmoke',
        marginTop: theme.spacing(2)
    }
}));

export default function JourneysList(params) {
    const classes = useStyles();

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
                        </Grid>
                    </Paper>
                    )
            })}
        </Grid>
    )
}

