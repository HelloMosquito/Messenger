import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  userDatetime: {
    color: "#bfbfbf",
    marginBottom: 3,
  },
  msgBubbleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  msgBubble: {
    maxWidth: "60%",
    padding: "10px",
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    color: "#808080",
  },
}));

export default function MsgBubbleFromOthersComponent(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.container}>
        <Box className={classes.msgContainer}>
          <Box className={classes.userDatetime}>{props.datetime}</Box>
          <Box className={classes.msgBubbleContainer}>
            <Box className={classes.msgBubble}>{props.content}</Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
