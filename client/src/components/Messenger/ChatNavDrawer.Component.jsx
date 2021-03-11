import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Divider, Drawer, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import { useWindowSize } from "@react-hook/window-size";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import {
  getClickContact,
  getCloseNavDrawer,
  getChatMessagesHistory,
} from "../../store/actionCreator";
import * as Components from "../Components";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  drawerPaper: (props) => ({
    width: props.drawerWidth,
  }),
  dividedPages: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  drawerFooter: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 3,
    justifyContent: "flex-end",
  },
  contactsListContainer: {
    width: `calc(100% - 32px)`,
    height: `calc(100% - 124px - 54px)`,
    alignSelf: "center",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: "16px",
    paddingTop: 0,
  },
  contactButtonClicked: {
    background: "#e0e0e0",
  },
  hideDrawerCloseButton: {
    display: "none",
  },
}));

export default function ChatNavDrawerComponent(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  const drawerOpenStatus = useSelector((state) => state.get("navDrawerOpen"));
  const hiddenChatChannel = useSelector((state) =>
    state.get("hiddenChatChannel")
  );
  const allContactsList = useSelector((state) => state.get("allContactsList"));
  const searchedContactsList = useSelector((state) =>
    state.get("searchedContactsList")
  );
  const renderedContactsList =
    searchedContactsList.size === 0 ? allContactsList : searchedContactsList;
  const currentClickedContactIdx = useSelector((state) =>
    state.get("currentClickedContactIdx")
  );
  const currentChatMessagesHistory = useSelector((state) =>
    state.get("currentChatMessagesHistory")
  );
  // const [width, height] = useWindowSize();

  // const [clicked, setClicked] = React.useState(false);
  // let clicked = useRef(false);

  // const cancleContactsClickedStyles = () => {
  //   // setClicked(false);
  //   clicked.current = false;
  //   console.log("3. =========", clicked.current);
  // };

  // const [currentClicked, setCurrentClicked] = React.useState(false);
  // const [allClicked, setAllClicked] = React.useState(false);

  // const handleItemClick = (idx) => {
  //   let contactList = contacts;
  //   contactList.map((item) => {
  //     item.clicked = false;
  //   });
  //   contactList[idx].clicked = true;
  //   setContacts([...contactList]);
  //   console.log(contactList[idx].name);
  //   // props.connectWebSocket();
  // };

  // useEffect(() => {
  //   if (width < 720) {
  //     props.handleDrawerClose();
  //   }
  // });

  const dispatch = useDispatch();
  const handleClickContact = async (contact, idx) => {
    if (currentChatMessagesHistory.size === 0) {
      const chatMessagesHistoryResponse = await fetch(
        "/api/currentContactsChatHistory_1.json"
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      // console.log(chatMessagesHistoryResponse);
      // console.log(getChatMessagesHistory(chatMessagesHistoryResponse.data));
      // dispatch(getChatMessagesHistory(chatMessagesHistoryResponse.res));
    }
    dispatch(
      getClickContact({
        name: contact.get("name"),
        onlineStatus: contact.get("onlineStatus"),
        clickedIdx: idx,
      })
    );
    console.log(">>>>", currentChatMessagesHistory);
  };
  const handleCloseNavDrawer = () => {
    dispatch(getCloseNavDrawer());
  };
  return (
    <Fragment>
      <Drawer
        className={classes.root}
        variant="persistent"
        anchor="left"
        open={drawerOpenStatus}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.dividedPages}>
          <Components.UserHeaderComponent />
          <Components.ChatAndSearchbarComponent />

          <Box className={classes.contactsListContainer}>
            {renderedContactsList.map((contact, idx) => {
              return (
                <Button
                  className={clsx(
                    currentClickedContactIdx === idx &&
                      classes.contactButtonClicked
                  )}
                  style={{
                    width: "100%",
                    textTransform: "none",
                    textAlign: "left",
                  }}
                  key={contact.get("uuid")}
                  onClick={
                    () => handleClickContact(contact, idx)
                    // console.log(
                    //   "CurrentChatPage.Component.jsx: ",
                    //   `uuid: ${contact.uuid} name: ${contact.name}, lastMessage: ${contact.lastMessage}`
                    // );
                  }
                >
                  <Components.ContactsListComponent
                    photo={contact.get("photo")}
                    name={contact.get("name")}
                    lastMessage={contact.get("lastMessage")}
                    onlineStatus={contact.get("onlineStatus")}
                    // connectWebSocket={props.connectWebSocket}
                  />
                </Button>
              );
            })}
          </Box>
          <Divider variant="middle" />
          <Box className={classes.drawerFooter}>
            <IconButton
              className={clsx(
                hiddenChatChannel && classes.hideDrawerCloseButton
              )}
              onClick={handleCloseNavDrawer}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon fontSize="large" />
              ) : (
                <ChevronRightIcon fontSize="large" />
              )}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Fragment>
  );
}
