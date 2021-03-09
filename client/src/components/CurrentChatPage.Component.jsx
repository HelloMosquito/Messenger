import React, { Fragment, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MsgBubbleFromUserComponent from "./MsgBubbleFromUser.Component";
import MsgBubbleFromOthersComponent from "./MsgBubbleFromOthers.Component";
import MsgPicutreFromUserComponent from "./MsgPictureFromUser.Component";
import MsgPictureFromOthersComponent from "./MsgPictureFromOthers.Component";

const useStyles = makeStyles((theme) => ({
  currentChannel: {
    flexGrow: 1,
    margin: 2,
    overflow: "auto",
  },
}));

const scrollToBottom = (messagesEndRef) => {
  messagesEndRef.current?.scrollIntoView({
    block: "start",
  });
};

export default function CurrentChatPageComponent(props) {
  const classes = useStyles(props);
  const messagesEndRef = useRef();

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, []);

  return (
    <Fragment>
      <Box className={classes.currentChannel}>
        <Box display="flex" flexDirection="column">
          <MsgBubbleFromOthersComponent
            name={"santiago"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgPicutreFromUserComponent
            name={"cheng"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgPictureFromOthersComponent
            name={"cheng"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgBubbleFromUserComponent
            name={"cheng"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgBubbleFromOthersComponent
            name={"santiago"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgBubbleFromOthersComponent
            name={"santiago"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgBubbleFromOthersComponent
            name={"santiago"}
            datetime={"2021-03-01 01:00:00"}
          />
          <MsgBubbleFromOthersComponent
            name={"santiago"}
            datetime={"2021-03-01 01:00:00"}
          />
          <Box ref={messagesEndRef}> </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
