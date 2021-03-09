import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import StatusIcon from "@material-ui/icons/Lens";
import More from "@material-ui/icons/MoreHorizOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "60px",
    margin: "16px",
    padding: "16px",
    display: "flex",
    borderRadius: 5,
    boxShadow: "3px 3px 5px #e6e6e6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactName: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
  messengerHeaderStatus: {
    color: "grey",
    flexGrow: 1,
    marginLeft: 40,
    marginTop: 8,
  },
  status: {
    fontSize: "small",
    paddingTop: 3,
  },
  more: {
    alignSelf: "center",
  },
}));

export default function CurrentChatHeaderComponent() {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.container}>
        <Box className={classes.contactName}>Santiago</Box>
        <Box className={classes.messengerHeaderStatus}>
          <StatusIcon className={classes.status} />
          Online
        </Box>
        <More className={classes.more} />
      </Box>
    </Fragment>
  );
}
