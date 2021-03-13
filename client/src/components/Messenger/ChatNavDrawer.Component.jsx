import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Divider, Drawer, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
  const userSearchingName = useSelector((state) =>
    state.get("userSearchingName")
  );
  const renderedContactsList =
    userSearchingName === "" && searchedContactsList.size === 0
      ? allContactsList
      : searchedContactsList;
  const currentClickedContactUuid = useSelector((state) =>
    state.get("currentClickedContactUuid")
  );
  const dispatch = useDispatch();
  const handleClickContact = async (contact) => {
    /*
      When clicking the contact in left navigation list, the staged msg needs
      to be saved into database before cleaning staging.
   */

    const chatMessagesHistoryResponse = await fetch(
      `/api/currentContactChatHistory_${contact.get("uuid")}.json`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    dispatch(getChatMessagesHistory(chatMessagesHistoryResponse.data));
    dispatch(
      getClickContact({
        name: contact.get("name"),
        onlineStatus: contact.get("onlineStatus"),
        clickedUuid: contact.get("uuid"),
      })
    );
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
            {renderedContactsList.map((contact) => {
              return (
                <Button
                  className={clsx(
                    currentClickedContactUuid === contact.get("uuid") &&
                      classes.contactButtonClicked
                  )}
                  style={{
                    width: "100%",
                    textTransform: "none",
                    textAlign: "left",
                  }}
                  key={contact.get("uuid")}
                  onClick={() => handleClickContact(contact)}
                >
                  <Components.ContactsListComponent
                    photo={contact.get("photo")}
                    name={contact.get("name")}
                    lastMessage={contact.get("lastMessage")}
                    onlineStatus={contact.get("onlineStatus")}
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
