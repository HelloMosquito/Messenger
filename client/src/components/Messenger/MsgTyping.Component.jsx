import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton, InputAdornment, TextField } from "@material-ui/core";
import InsertEmotion from "@material-ui/icons/InsertEmoticonOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import SendIcon from "@material-ui/icons/Send";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  getOpenNavDrawer,
  getTypingMsg,
  getSendingMsg,
} from "../../store/actionCreator";

const useStyles = makeStyles(() => ({
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

export default function MsgTypingComponent() {
  const classes = useStyles();
  const hiddenFileInput = React.useRef(null);

  const drawerOpenStatus = useSelector((state) => state.get("navDrawerOpen"));
  const dispatch = useDispatch();
  const typingMsg = useSelector((state) => state.get("userTypingMsg"));

  const socket = useSelector((state) => state.get("socket"));

  const handleSendingMsg = () => {
    const currentDatetime = moment().format("YYYY-MM-DD HH:mm:ss");
    dispatch(
      getSendingMsg({
        from: 1111,
        to: 2222,
        messageType: 0,
        datetime: currentDatetime,
      })
    );
    sendingMsg(typingMsg);
  };
  const sendingMsg = (msg) => {
    if (socket !== null) {
      socket.emit("messaging", msg);
    }
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <Fragment>
      <Box className={classes.container}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(getOpenNavDrawer())}
          edge="start"
          className={clsx({ [classes.hide]: drawerOpenStatus })}
        >
          <ChevronRightIcon fontSize="large" m={0} />
        </IconButton>
        <TextField
          variant="filled"
          placeholder="Type something..."
          className={classes.input}
          value={typingMsg}
          onChange={(e) => {
            dispatch(getTypingMsg(e.target.value));
          }}
          onKeyPress={(ev) => {
            if (typingMsg !== "" && ev.key === "Enter") {
              handleSendingMsg();
            }
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment>
                <IconButton style={{ padding: "5px" }}>
                  <InsertEmotion style={{ color: "#757575" }} />
                </IconButton>
                <input
                  accept="image/*"
                  id="upload-picture"
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleImageUpload}
                  hidden
                />
                <IconButton
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    hiddenFileInput.current.click();
                  }}
                >
                  <CropOriginalIcon style={{ color: "#757575" }} />
                </IconButton>
                <IconButton
                  style={{ backgroundColor: "#757575" }}
                  disabled={typingMsg === ""}
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    handleSendingMsg();
                  }}
                >
                  <SendIcon />
                </IconButton>
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
