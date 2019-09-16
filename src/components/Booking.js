import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import moment from 'moment';
import BookingPanel from './BookingPanel';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Booking({ currentTabIndex, currentTabValue, handleTabChange, tabValues, status, master }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={currentTabIndex}
                    onChange={(e, v) => handleTabChange(e, v)}
                    variant="scrollable"
                    scrollButtons="auto">
                    {tabValues.map(tabValue => <Tab key={tabValue} label={moment(tabValue).format("dddd Do MMM")} />)}
                </Tabs>
            </AppBar>
            <BookingPanel currentTabValue={currentTabValue} status={status} master={master} />
        </div>
    )
}

export default Booking;
