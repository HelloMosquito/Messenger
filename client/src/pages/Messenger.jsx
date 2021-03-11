import React, { Fragment, useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Components from "../components/Components";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import clsx from "clsx";
import webSocket from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { getAllContactsListFromDB } from "../store/actionCreator";
// import { useWindowSize } from "@react-hook/window-size";

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

const useAuthenticate = () => {
  const history = useHistory();

  const authenticate = async () => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          Authentication: cookie.load("token"),
        },
      });
      const res = await response.json();
      if (res === undefined || !res.logged_in) {
        history.push("/login");
        return false;
      }
      return true;
    } catch (error) {
      history.push("/login");
      return false;
    }
    // const res = await fetch("/auth/login", {
    //   method: "POST",
    //   headers: {
    //     Authentication: cookie.load("token"),
    //   },
    // })
    //   .then((res) => res.json())
    //   .catch((error) => {
    //     history.push("/login");
    //   });
    // if (res === undefined || !res.logged_in) {
    //   history.push("/login");
    // }
  };
  return authenticate;
};

export default function Messenger(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const hiddenChatChannel = useSelector((state) =>
    state.get("hiddenChatChannel")
  );
  const drawerOpenStatus = useSelector((state) => state.get("navDrawerOpen"));
  // // Auto hide navigation drawer if the window size smaller than 720px
  // const [width, height] = useWindowSize();
  // useEffect(() => {
  //   if (width < 720 && !hiddenChatChannel) {
  //     dispatch({ type: "CLOSE_NAV_DRAWER" });
  //   }
  // });

  // Authenticate current user
  const authenticate = useAuthenticate();
  // authenticate();

  // Establish the socket between current user and server
  const getCurrentContactName = () => {};

  // const [ws, setWs] = useState(null);
  const ws = useRef(null);
  const connectWebSocket = () => {
    ws.current = webSocket("http://localhost:3000");
    // setWs(webSocket("http://localhost:3001"));
  };
  const initWebSocket = () => {
    ws.current.on("messaging", (msg) => {
      console.log("From server: ", msg);
    });
    ws.current.on("broadcasting", (data) => {
      console.log("From broadcasting", data);
    });
  };

  // useEffect(() => {
  //   connectWebSocket();
  //   console.log("Successfully connected.");
  //   if (ws.current) {
  //     initWebSocket();
  //   }
  // }, []);

  const sendMsg = (message) => {
    ws.current.emit("messaging", message);
  };

  // ---------------------------------------------v

  const getContactsFromDB = async () => {
    const res = await fetch("/api/allContactsList.json")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    dispatch(getAllContactsListFromDB(res.data));
    return res;
  };

  useEffect(() => {
    getContactsFromDB();
    // dispatch(forceRerender();
    // dispatch();
  });

  // ---------------------------------------------^

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.drawer}>
          <Components.ChatNavDrawerComponent
            drawerWidth={drawerWidth}
            connectWebSocket={connectWebSocket}
            getCurrentContactName={getCurrentContactName}
          />
        </Box>
        <Box
          className={clsx(classes.chatChannel, {
            [classes.chatChannelShift]: drawerOpenStatus,
            [classes.chatChannelHidden]: hiddenChatChannel,
          })}
        >
          <Components.CurrentChatComponent sendMsg={sendMsg} />
        </Box>
      </Box>
    </Fragment>
  );
}
