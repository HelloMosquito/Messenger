import React, { Fragment, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

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

  const currentChatMessagesHistory = useSelector((state) =>
    state.get("currentChatMessagesHistory")
  );

  console.log(">>>", currentChatMessagesHistory);

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [props.messages]);

  return (
    <Fragment>
      <Box className={classes.currentChannel}>
        <Box display="flex" flexDirection="column">
          {props.messages.map((message) => {
            return message;
          })}
          <Box ref={messagesEndRef}> </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
