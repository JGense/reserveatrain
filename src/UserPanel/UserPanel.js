import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
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

export default function UserPanel(params) {
    const classes = useStyles();

    if (params.isLog) {
        return (
            <Grid container justify={"center"}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>ACCOUNT</Paper>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <h1>I'm not logged</h1>
        )
    }
}

