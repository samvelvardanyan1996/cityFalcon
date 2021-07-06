import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';

const BootstrapInput = withStyles((theme) => ({
  input: {
    position: 'relative',
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  nearby: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin, classes.nearby}>
        <Avatar alt="Remy Sharp" src="/src/images/avatar/1.jpg" />
        <Select
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Aram">Aram</MenuItem>
          <MenuItem value="Artak">Artak</MenuItem>
          <MenuItem value="Yurik">Yurik</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
