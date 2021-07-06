import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "./Logo";
import Users from "./Users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarElements: {
    flexGrow: 1,
    justifyContent: "space-between",
  }
}));

const MenuAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBarElements}>
          <Logo />
          <Users />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;