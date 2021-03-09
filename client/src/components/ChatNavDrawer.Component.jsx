import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Divider, Drawer, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import * as Components from "./Components";

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
}));

export default function ChatNavDrawerComponent(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <Fragment>
      <Drawer
        className={classes.root}
        variant="persistent"
        anchor="left"
        open={props.drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.dividedPages}>
          <Components.UserHeaderComponent />
          <Components.ChatAndSearchbarComponent />

          <Box className={classes.contactsListContainer}>
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
            <Components.ContactsListComponent />
          </Box>
          <Divider variant="middle" />
          <Box className={classes.drawerFooter}>
            <IconButton onClick={props.handleDrawerClose}>
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
