import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: "#000000",
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
}));

export default function IndexTitleComponent(props) {
  const classes = useStyles(props);
  return (
    <Fragment>
      <Grid container>
        <Grid item xs>
          <Typography className={classes.welcome} component="h1" variant="h5">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
