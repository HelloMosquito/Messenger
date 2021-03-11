import React, { Fragment } from "react";
import { Box, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  nameAndDatetime: {
    color: "#bfbfbf",
    marginBottom: 3,
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
          src="/images/thomas.png"
        />
        <Box className={classes.msgContainer}>
          <Box className={classes.nameAndDatetime}>
            {props.name} {props.datetime}
          </Box>
          <Box className={classes.msgBubbleContainer}>
            <Box className={classes.msgBubble}>
              aoijf
              fsadfasdfoiwaefjoiwaiaoijfoidfasdfwaefjoiwaiaoijfoiwafasdfefjoiwaiaoijfoiwaefjoiwaiaoijfoiwaefjoiwai
              aoijfoiwaefjsdfdsfoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai
              aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai
              aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai
              aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai
              aoijfoiwaefjoiwai
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
