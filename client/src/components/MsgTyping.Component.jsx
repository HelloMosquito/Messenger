import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton, InputAdornment, TextField } from "@material-ui/core";
import InsertEmotion from "@material-ui/icons/InsertEmoticonOutlined";
import FileCopy from "@material-ui/icons/FileCopyOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",
    height: 60,
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: `calc(100% - 54px)`,
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
}));

export default function MsgTypingComponent(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.container}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx({ [classes.hide]: props.drawerOpen })}
        >
          <ChevronRightIcon fontSize="large" m={0} />
        </IconButton>
        <TextField
          variant="filled"
          placeholder="Type something..."
          className={classes.input}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment>
                <InsertEmotion style={{ color: "grey", marginRight: "10px" }} />
                <FileCopy style={{ color: "grey", marginRight: "10px" }} />
              </InputAdornment>
            ),
            style: {
              width: "100%",
              height: 40,
              borderRadius: 10,
              margin: 10,
              marginLeft: 16,
              marginRight: 16,
            },
          }}
          inputProps={{
            style: {
              padding: "10px 12px 10px",
            },
          }}
        ></TextField>
      </Box>
    </Fragment>
  );
}
