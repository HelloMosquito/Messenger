import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Hidden, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  overlay: {
    backgroundImage:
      "linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexDirection: "column",
    minHeight: "100vh",
    paddingBottom: 145,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    fontSize: 26,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    maxWidth: 300,
  },
}));

export default function IndexPosterComponent(props) {
  const classes = useStyles(props);
  return (
    <Fragment>
      <Box className={classes.overlay}>
        <Hidden xsDown>
          <img width={67} src="/images/chatBubble.png" />
          <Hidden smDown>
            <Typography className={classes.heroText}>
              Converse with anyone with any language
            </Typography>
          </Hidden>
        </Hidden>
      </Box>
    </Fragment>
  );
}
