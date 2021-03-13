import React, { Fragment, useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Components from "../components/Components";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import webSocket from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { getAllContactsListFromDB } from "../store/actionCreator";

const drawerWidth = "35vw";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  drawer: {
    width: drawerWidth,
    height: "100%",
  },
  chatChannel: {
    width: "100vw",
    height: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 10,
    marginLeft: `-${drawerWidth}`,
    backgroundColor: "#ffffff",
  },
  chatChannelShift: {
    width: `calc(85vw - ${drawerWidth})`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  chatChannelHidden: {
    display: "none",
  },
}));

export default function Messenger() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userIsAuthorized = useSelector((state) =>
    state.get("userIsAuthorized")
  );
  const hiddenChatChannel = useSelector((state) =>
    state.get("hiddenChatChannel")
  );
  const drawerOpenStatus = useSelector((state) => state.get("navDrawerOpen"));

  const getContactsFromDB = async () => {
    const res = await fetch("/api/allContactsList.json")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    dispatch(getAllContactsListFromDB(res.data));
    return res;
  };
  const history = useHistory();

  useEffect(() => {
    if (!userIsAuthorized) {
      history.push("/login");
    }
    getContactsFromDB();
  });

  const socket = useSelector((state) => state.get("socket"));
  if (socket !== null) {
    socket.on("welcome", (msg) => {
      console.log("Frome Server:", msg);
    });
  }

  return userIsAuthorized ? (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.drawer}>
          <Components.ChatNavDrawerComponent drawerWidth={drawerWidth} />
        </Box>
        <Box
          className={clsx(classes.chatChannel, {
            [classes.chatChannelShift]: drawerOpenStatus,
            [classes.chatChannelHidden]: hiddenChatChannel,
          })}
        >
          <Components.CurrentChatComponent />
        </Box>
      </Box>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
}
