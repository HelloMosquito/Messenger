import React, { Fragment } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: 3,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: "#3a8dff",
    fontWeight: "bold",
  },
}));

export default function IndexSubmitBtnComponent(props) {
  const classes = useStyles(props);
  return (
    <Fragment>
      <Box textAlign="center">
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {props.submitBtnText}
        </Button>
      </Box>
    </Fragment>
  );
}
