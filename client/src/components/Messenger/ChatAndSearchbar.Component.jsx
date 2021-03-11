import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchbarComponent from "./Searchbar.Component";

const useStyles = makeStyles((theme) => ({
  chatAndSearchbarContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 16px 16px 16px",
    width: `calc(100% - 32px)`,
    alignSelf: "center",
  },
  contactListChatTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
  },
}));

export default function ChatAndSearchbarComponent(props) {
  const classes = useStyles(props);
  return (
    <Fragment>
      <Box className={classes.chatAndSearchbarContainer}>
        <Box className={classes.contactListChatTitle}>Chats</Box>
        <SearchbarComponent />
      </Box>
    </Fragment>
  );
}
