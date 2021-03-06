import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NeedLogin from "../Utils/NeedLogin";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from "@material-ui/core/Avatar";
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    euroIcon: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    reductionInput: {
        margin: theme.spacing(1),
        lineHeight: 1.334
    },
    warningBooks: {
        color: "orange",
        marginTop: "-8px"
    }
}));

export default function UserPanel(params) {
    let reductionDisabled = false;

    if (typeof params.bookedJourneys === "object") {
        params.bookedJourneys.length > 0 ? reductionDisabled = true : reductionDisabled = false;
    } else if (typeof params.bookedJourneys === "string") {
        let temp = JSON.parse(params.bookedJourneys);
        temp.length > 0 ? reductionDisabled = true : reductionDisabled = false;
    }
    let coupon = params.reduction;
    if (!coupon) {
        coupon = "";
    }
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [reductionCode, setReductionCode] = useState(coupon)

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeInput = event => {
        setReductionCode(event.target.value);
    }

    const handleChangeReductionBtn = () => {
        if (reductionCode === "") {
            setReductionCode(coupon);
        } else {
            params.setReduction(reductionCode);
            localStorage.setItem('reduction', reductionCode);
        }
    }

    const handleDeleteReductionBtn = () => {
        setReductionCode("");
        params.setReduction(false);
        localStorage.removeItem('reduction');
    }

    if (params.isLog) {
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
                    <Tabs value={value} onChange={handleChangeTabs} aria-label="simple tabs example">
                        <Tab label="Profile" {...a11yProps(0)} />
                        <Tab label="Discount code" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    John DOE
                                </Typography>
                                <h4>This is your profile. You can change your reduction code in the "Discount code" tab</h4>
                            </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={classes.paper} style={{marginBottom: "0px"}}>
                            <Avatar className={classes.euroIcon}>
                                <EuroSymbolIcon />
                            </Avatar>
                            <FormControl>
                                <TextField value={reductionCode} id="outlined-basic" label="Reduction code" variant="outlined" size="small" className={classes.reductionInput} disabled={reductionDisabled} onChange={handleChangeInput}/>
                            </FormControl>
                            {reductionDisabled && <p className={classes.warningBooks}><small>You have booked journeys, so you cannot change your discount code</small></p>}
                            {!reductionDisabled && <div><Button variant="contained" onClick={handleChangeReductionBtn}>Change</Button><Button variant="contained" color={"secondary"} onClick={handleDeleteReductionBtn}>Delete</Button></div>}
                            <h4>This is your discount code view. You can change it or add one if you don't have yet !</h4>
                        </div>
                    </TabPanel>
                </Grid>
            </Grid>
        )
    } else {
        return (
                <NeedLogin/>
        )
    }
}

