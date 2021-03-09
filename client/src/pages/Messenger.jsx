import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Components from "../components/Components";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import clsx from "clsx";

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
    const res = await fetch("/auth/messenger", {
      mtehod: "POST",
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
  const classes = useStyles(props);

  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    console.log("hahahaha");
  };

  const handleDrawerClose = () => {
    console.log("===>", drawerOpen);
    setDrawerOpen(false);
    console.log("===>", drawerOpen);
  };

  const authenticate = useAuthenticate();
  // authenticate();

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.drawer}>
          <Components.ChatNavDrawerComponent
            drawerWidth={drawerWidth}
            drawerOpen={drawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
          />
        </Box>
        <Box
          className={clsx(classes.chatChannel, {
            [classes.chatChannelShift]: drawerOpen,
          })}
        >
          <Components.CurrentChatHeaderComponent />
          <Components.CurrentChatPageComponent />
          <Components.MsgTypingComponent
            drawerOpen={drawerOpen}
            handleDrawerOpen={handleDrawerOpen}
          />
        </Box>
      </Box>
    </Fragment>
  );
}
