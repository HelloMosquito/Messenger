import React, { Fragment } from "react";
import { Badge, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import More from "@material-ui/icons/MoreHorizOutlined";
import { useSelector } from "react-redux";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "60px",
    margin: "16px 0 16px 0",
    padding: "16px",
    display: "flex",
    borderRadius: 5,
    boxShadow: "3px 3px 5px #e6e6e6",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contactName: {
    maxWidth: "40%",
    marginRight: 20,
    fontSize: 24,
    fontWeight: 700,
  },
  messengerHeaderStatus: {
    width: 75,
    color: "grey",
    marginLeft: 10,
  },
  more: {
    flexGrow: 1,
    alignSelf: "center",
    justifySelf: "flex-end",
    display: "flex",
    justifyContent: "flex-end",
    color: "grey",
  },
  badgeRoot: {
    height: 13,
    width: 13,
    borderRadius: 10,
    top: 10,
  },
  onlineStatusBadge: {
    backgroundColor: "#00c853",
  },
  offlineStatusBadge: {
    backgroundColor: "#d50000",
  },
}));

export default function CurrentChatHeaderComponent() {
  const classes = useStyles();

  const currentChatContact = useSelector((state) =>
    state.get("currentChatContact")
  );
  return (
    <Fragment>
      <Box className={classes.container}>
        <Typography noWrap={true} className={classes.contactName}>
          {currentChatContact.get("name")}
        </Typography>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          classes={{
            badge: clsx(
              classes.badgeRoot,
              currentChatContact.get("onlineStatus")
                ? classes.onlineStatusBadge
                : classes.offlineStatusBadge
            ),
          }}
        >
          <Box className={classes.messengerHeaderStatus}>Online</Box>
        </Badge>
        <Box className={classes.more}>
          <More />
        </Box>
      </Box>
    </Fragment>
  );
}
