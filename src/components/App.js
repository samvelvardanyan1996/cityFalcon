import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';

import Lists from "./Lists";

const useStyles = makeStyles(() => ({
  marginHorizontal: {
    marginLeft: 50,
    marginRight: 50
  },
  filterButtons: {
    marginLeft: 10,
    textTransform: "inherit",
    fontWeight: "bold",
    borderColor: "#F0F0F0"
  },
  colorBlue: {
    color: "#002984",
  }  
}));


const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.marginHorizontal}>
      <h1 className={classes.colorBlue}>WathchList Name</h1>
      <Button className={classes.filterButtons} variant="outlined">
        <RefreshIcon className={classes.colorBlue} />
        Refresh
      </Button>
      <Button className={classes.filterButtons} variant="outlined">
        Filters
      </Button>
      <Lists />
    </div>
  );
}

export default App;