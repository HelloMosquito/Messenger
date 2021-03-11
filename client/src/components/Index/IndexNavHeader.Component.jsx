import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: 5,
    filter: "drop-shadow(0px 2px 6px rgba(74,106,149,0.2))",
    backgroundColor: "#ffffff",
    color: "#3a8dff",
    boxShadow: "none",
    marginRight: 35,
  },
  noAccBtn: {
    fontSize: 14,
    color: "#b0b0b0",
    fontWeight: 400,
    textAlign: "center",
    marginRight: 21,
    whiteSpace: "nowrap",
  },
  link: {
    textDecoration: "none",
    display: "flex",
    flexWrap: "nowrap",
  },
}));

export default function IndexNavHeaderComponent(props) {
  const classes = useStyles(props);
  return (
    <Fragment>
      <Box p={1} alignSelf="flex-end" alignItems="center">
        <Link to={props.linkedPath} className={classes.link}>
          <Button className={classes.noAccBtn}>{props.noAccBtnText}</Button>
          <Button
            color="default"
            className={classes.accBtn}
            variant="contained"
          >
            {props.accBtnText}
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
}
