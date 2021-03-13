import React, { Fragment } from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    margin: "5px 0 5px 0",
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginTop: "5px",
    marginRight: "10px",
  },
  msgContainer: {
    width: `calc(100% - 40px)`,
    display: "flex",
    flexDirection: "column",
  },
  nameAndDatetimeContainer: {
    color: "#bfbfbf",
    marginBottom: 3,
    display: "flex",
    width: "60%",
    flexWrap: "wrap",
  },
  name: {
    fontSize: "1em",
    marginRight: "10px",
  },
  datetime: {
    display: "flex",
    fontSize: "0.8em",
    alignItems: "center",
  },
  img: {
    width: "200px",
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
}));

export default function MsgPictureFromOthersComponent(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.container}>
        {/* Contact photo */}
        <Avatar
          className={classes.avatar}
          alt={"user"}
          src="/images/thomas.png"
        />
        {/* Message container */}
        <Box className={classes.msgContainer}>
          {/* Messager name and datetime */}
          <Box className={classes.nameAndDatetimeContainer}>
            <Typography noWrap={true} className={classes.name}>
              {props.name}
            </Typography>
            <Typography className={classes.datetime}>
              {props.datetime}
            </Typography>
          </Box>
          {/* Message picture */}
          <Box>
            <img className={classes.img} src="/images/pic.png" />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
