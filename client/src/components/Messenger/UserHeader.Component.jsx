import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import More from "@material-ui/icons/MoreHorizOutlined";
import { Box, Badge, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  userHeaderContainer: {
    height: "92px",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    flexGrow: 1,
    alignSelf: "center",
    fontWeight: 700,
    fontSize: 17,
    fontFamily: "'Open Sans'",
    paddingLeft: "24px",
  },
  statusBadge: {
    width: "80px",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: "60px",
    height: "60px",
  },
  userOnlineStatus: {
    backgroundColor: "#00c853",
  },
}));

export default function UserHeaderComponent(props) {
  const classes = useStyles(props);
  return (
    <Fragment>
      <Box className={classes.userHeaderContainer}>
        {/* User photo component */}
        <Badge
          classes={{ badge: classes.userOnlineStatus }}
          variant="dot"
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            className={classes.avatar}
            alt={"thomas"}
            src="/images/thomas.png"
          />
        </Badge>

        {/* User name component */}
        <Box className={classes.userName}>Thomas</Box>

        {/* User setting "..." component */}
        <More style={{ color: "grey" }} />
      </Box>
    </Fragment>
  );
}
