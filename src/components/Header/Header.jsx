import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style'

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" classname={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h5" classname={classes.title}>
                        Explore new Places
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.seachIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search...." classes = {{root:classes.InputRoot, input:classes.inputInput}} />
                        </div>
                     {/*</Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;