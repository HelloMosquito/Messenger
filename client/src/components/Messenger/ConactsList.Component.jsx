import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Badge, Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    minWidth: "95%",
    maxWidth: "95%",
    display: "flex",
    padding: 16,
    justifyContent: "flex-start",
  },
  containerClicked: {
    background: "#e0e0e0",
  },
  avatar: {
    width: "49px",
    height: "49px",
  },
  contactDetailsContainerBadge: {
    flexGrow: 1,
    width: "70%",
  },
  contactDetailsContainer: {
    width: "75%",
    height: "100%",
    paddingLeft: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  contactName: {
    width: "95%",
    fontWeight: 700,
    fontSize: 17,
  },
  unreadMsgAmount: {
    top: 25,
    right: 10,
  },
  lastMessage: {
    width: "95%",
  },
  contactOnlineStatus: {
    backgroundColor: "#00c853",
  },
  contactOfflineStatus: {
    backgroundColor: "#d50000",
  },
}));

export default function ContactsListComponent(props) {
  const classes = useStyles(props);
  return (
    <Box className={classes.container}>
      {/* Contact photo */}
      <Badge
        classes={{
          badge: props.onlineStatus
            ? classes.contactOnlineStatus
            : classes.contactOfflineStatus,
        }}
        variant="dot"
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar className={classes.avatar} alt={props.name} src={props.photo} />
      </Badge>

      {/* Contact name and message */}
      <Badge
        badgeContent={999}
        color="primary"
        classes={{
          root: classes.contactDetailsContainerBadge,
          badge: classes.unreadMsgAmount,
        }}
      >
        <Box className={classes.contactDetailsContainer}>
          <Typography
            noWrap={true}
            className={classes.contactName}
            aligh="left"
          >
            {props.name}
          </Typography>
          <Typography noWrap={true} className={classes.lastMessage}>
            {props.lastMessage}
          </Typography>
        </Box>
      </Badge>
    </Box>
  );
}
