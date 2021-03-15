import React, { Fragment, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  MsgBubbleFromUserComponent,
  MsgBubbleFromOthersComponent,
  MsgPicutreFromUserComponent,
  MsgPictureFromOthersComponent,
} from "../Components";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  currentChannel: {
    height: `calc(100% - 152px)`,
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

export default function CurrentChatChannelContainerComponent(props) {
  const classes = useStyles(props);
  const messagesEndRef = useRef();
  const userUuid = useSelector((state) => state.get("userUuid"));
  const currentChatContactName = useSelector((state) =>
    state.getIn(["currentChatContact", "name"])
  );

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [props.messages]);

  return (
    <Fragment>
      <Box className={classes.currentChannel}>
        <Box display="flex" flexDirection="column">
          {props.messages.map((msg) => {
            if (msg.get("from") === userUuid) {
              return msg.get("message-type") === 0 ? (
                <MsgBubbleFromUserComponent
                  key={msg}
                  datetime={msg.get("createdAt")}
                  content={msg.get("content")}
                />
              ) : (
                <MsgPicutreFromUserComponent
                  key={msg}
                  datetime={msg.get("createdAt")}
                  content={msg.get("content")}
                />
              );
            }
            return msg.get("message-type") === 0 ? (
              <MsgBubbleFromOthersComponent
                key={msg}
                name={currentChatContactName}
                datetime={msg.get("createdAt")}
                content={msg.get("content")}
              />
            ) : (
              <MsgPictureFromOthersComponent
                key={msg}
                name={currentChatContactName}
                datetime={msg.get("createdAt")}
                content={msg.get("content")}
              />
            );
          })}
          <Box ref={messagesEndRef}> </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
