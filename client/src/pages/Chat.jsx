import React, { Fragment, useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Components from "../components/Components";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import clsx from "clsx";
import webSocket from "socket.io-client";

const drawerWidth = "35vw";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
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
    marginLeft: `-${drawerWidth}`,
  },
  chatChannelShift: {
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const useAuthenticate = () => {
  const history = useHistory();

  const authenticate = async () => {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: {
        Authentication: cookie.load("token"),
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        history.push("/login");
      });
    if (!res.logged_in) {
      history.push("/login");
    }
  };
  return authenticate;
};

export default function Messenger(props) {
  const [ws, setWs] = useState(null);
  const connectWebSocket = () => {
    setWs(webSocket("http://localhost:3001"));
  };

  useEffect(() => {
    if (ws) {
      console.log("success connect!");
      initWebSocket();
    }
  }, [ws]);

  const initWebSocket = () => {
    ws.on("getMsg", (msg) => {
      console.log("From server: ", msg);
    });
  };

  const sendMsg = () => {
    ws.emit("getMsg", "SERVER!!!!!");
  };

  // const authenticate = useAuthenticate();
  // authenticate();

  return (
    <Fragment>
      <input type="button" value="Connect Server" onClick={connectWebSocket} />
      <div></div>
      <input type="button" value="Send Message" onClick={sendMsg} />
    </Fragment>
  );
}
