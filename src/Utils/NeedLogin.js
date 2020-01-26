import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function NeedLogin(params) {
    const classes = useStyles();
        return (
            <Grid
                container
                spacing={0}
                direction="column"
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
                        <h3>You must be logged in to access this feature</h3>
                    </div>
                </Grid>
            </Grid>
        )
}

