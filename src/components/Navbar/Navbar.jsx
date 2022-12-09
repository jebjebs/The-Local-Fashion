import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar className={classes.toolBar}>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="The Local Fashion" height="60px" className={classes.image} />
                </Typography>
                <div className={classes.grow} />
                {location.pathname == "/" && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar