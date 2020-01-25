import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Booking(params) {
    const classes = useStyles();

    if (params.isLog) {
        return (
            <h1>I'm logged</h1>
        )
    } else {
        return (
            <h1>I'm not logged</h1>
        )
    }
    /*return (
        <Grid container alignItems={"stretch"} spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>FORMULAIRE</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>PREVIEW</Paper>
            </Grid>
        </Grid>
    );*/

}

