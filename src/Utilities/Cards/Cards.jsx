import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  covid: {
    color: "red",
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.items.photo}
          title={props.items.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.items.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <Typography
                className={classes.covid}
                variant="body2"
                color="textPrimary"
                component="p"
              >
                Covid Beds:{props.items.covid_beds}
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                className={classes.covid}
                variant="body2"
                color="textPrimary"
                component="p"
              >
                Non Covid Beds:{props.items.general_beds}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                Address:{props.items.address}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                Contact:{props.items.telephone_no}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.items.website}>
          Official Website
        </Button>
      </CardActions>
    </Card>
  );
}
