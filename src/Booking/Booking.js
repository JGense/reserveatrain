import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NeedLogin from "../Utils/NeedLogin";

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
            <NeedLogin/>
        )
    }
}

