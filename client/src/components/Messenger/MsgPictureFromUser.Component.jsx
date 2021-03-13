import React, { Fragment } from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "5px 10px 5px 0",
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginTop: "5px",
  },
  msgContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  img: {
    width: "200px",
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  userDatetimeContainer: {
    color: "#bfbfbf",
    marginBottom: 3,
  },
  datetime: { display: "flex", fontSize: "0.8em", alignItems: "center" },
}));

export default function MsgPicutreFromUserComponent(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.container}>
        <Box className={classes.msgContainer}>
          <Box className={classes.userDatetimeContainer}>
            <Typography className={classes.datetime}>
              {props.datetime}
            </Typography>
          </Box>
        </Box>
        <img className={classes.img} src="/images/pic.png" />
        {/* User photo */}
        <Avatar
          className={classes.avatar}
          alt={"user"}
          src="/images/thomas.png"
        />
      </Box>
    </Fragment>
  );
}
