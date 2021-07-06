import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const Lists = () => {
  const [dataLists, setDataLists] = useState([]);

  useEffect(() => {
    const apiUrl = "https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories";
    axios.get(apiUrl).then((resp) => {
      const lists = resp.data;
      setDataLists(lists.stories);
    });
  }, []);

  console.log("dataLists", dataLists);
  const classes = useStyles();
  const red = "red";
  const yellow = "yellow";
  const green = "green";

  const listItems = dataLists.map(({uuid, imageUrls, title, domain_cached_logo_url, domain_name, publishTime, publishTimeDiff, description, score, index}) => {
    let yearsPassed   = Math.floor(publishTimeDiff / (60 * 60 * 24 * 365));
    let monthsPassed  = Math.floor(publishTimeDiff / (60 * 60 * 24 * 30));
    let daysPassed    = Math.floor(publishTimeDiff / (60 * 60 * 24));
    let hoursPassed   = Math.floor(publishTimeDiff / (60 * 60));
    let minutesPassed = Math.floor(publishTimeDiff / (60));

    let elapsedTime;
    if(yearsPassed > 0){
      elapsedTime = yearsPassed + " y";
    }
    else if(monthsPassed > 0){
      elapsedTime = monthsPassed + " m";
    }
    else if(daysPassed > 0){
      elapsedTime = daysPassed + " d";
    }
    else if(hoursPassed > 0){
      elapsedTime = hoursPassed + " h";
    }
    else{
      elapsedTime = minutesPassed + " min";
    }

    let colorButton;
    if(score <= 20){
      colorButton = red;
    }
    else if(score > 20 && score < 50){
      colorButton = yellow;
    }
    else{
      colorButton = green;
    }
    return (
      <ListItem className={classes.root} key={uuid}>
        <ListItemAvatar className={classes.nearby}>
          <Avatar variant="rounded" className={classes.sizeAvatars}>
            <img src={imageUrls} />
          </Avatar>
        </ListItemAvatar>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <div style={{display: "flex", flexGrow: 1, justifyContent: "space-between"}}>
              <div style={{justifyContent: "space-between"}}>
                <div>
                  <Typography className={classes.heading}>
                    {title}
                  </Typography>
                  <div style={{display: "flex"}}>
                    <Typography>
                      <img style={{width: 20, marginRight: 10}} src={domain_cached_logo_url} />
                    </Typography>
                    <Typography className={classes.domain_name}>
                      {domain_name}
                    </Typography>
                    <Typography className={classes.elapsedTime}>
                      {elapsedTime}
                    </Typography>
                  </div>
                </div>
              </div>
              <div>
              <Button style={{color: colorButton, borderColor: colorButton}} variant="outlined">
                {score}%
              </Button>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ListItem>
    )
  })

  return (
    <List>
      {listItems}
    </List>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  sizeAvatars: {
    width: 50,
    height: 50,
  },
  accordion: {
    width: '90%',
    marginLeft: 0,
    marginRight: 50,
  },
  heading: {
    fontSize: 16,
    fontWeight: 500
  },
  title: {
    color: "#919191",
    fontSize: 12,
    fontWeight: 500
  },
  domain_name: {
    color: "#919191",
    marginTop: 2,
    fontSize: 12,
    fontWeight: 500,
  },
  elapsedTime: {
    color: "#919191",
    marginLeft: 15,
    marginTop: 2,
    fontSize: 12,
    fontWeight: 600,
  },
  nearby: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default Lists;