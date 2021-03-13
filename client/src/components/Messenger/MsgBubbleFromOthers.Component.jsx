import React, { Fragment } from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    margin: "5px 0 5px 0",
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginTop: "5px",
    marginRight: "10px",
  },
  msgContainer: {
    width: `calc(100% - 40px)`,
    display: "flex",
    flexDirection: "column",
  },
  nameAndDatetimeContainer: {
    color: "#bfbfbf",
    marginBottom: 3,
    display: "flex",
    width: "60%",
    flexWrap: "wrap",
  },
  name: {
    fontSize: "1em",
    marginRight: "10px",
  },
  datetime: {
    display: "flex",
    fontSize: "0.8em",
    alignItems: "center",
  },
  msgBubbleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  msgBubble: {
    maxWidth: "60%",
    padding: "10px",
    backgroundColor: "#03a9f4",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    color: "white",
    overflowWrap: "break-word",
  },
}));

export default function MsgBubbleFromOthersComponent(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.container}>
        <Avatar
          className={classes.avatar}
          alt={"user"}
          src={`/images/${props.name}.png`}
        />
        <Box className={classes.msgContainer}>
          <Box className={classes.nameAndDatetimeContainer}>
            <Typography noWrap={true} className={classes.name}>
              {props.name}
            </Typography>
            <Typography className={classes.datetime}>
              {props.datetime}
            </Typography>
          </Box>
          <Box className={classes.msgBubbleContainer}>
            <Box className={classes.msgBubble}>{props.content}</Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
