import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 100,
  },
}));

export default function Users() {
  const classes = useStyles();

  return (
    <img className={classes.logo} alt="Remy Sharp" src="/src/images/logo.jpg" />
  );
}
