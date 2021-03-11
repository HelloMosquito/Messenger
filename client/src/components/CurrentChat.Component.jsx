import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import moment from "moment";
import {
  CurrentChatHeaderComponent,
  CurrentChatPageComponent,
  MsgTypingComponent,
  MsgBubbleFromUserComponent,
  MsgBubbleFromOthersComponent,
  MsgPicutreFromUserComponent,
  MsgPictureFromOthersComponent,
} from "../components/Components";

export default function CurrentChatComponent(props) {
  const [messages, setMessages] = React.useState([
    <MsgBubbleFromOthersComponent
      name={"santiago"}
      datetime={"2021-03-01 01:00:00"}
    />,
    <MsgPicutreFromUserComponent
      name={"cheng"}
      datetime={"2021-03-02 01:00:00"}
    />,
    // <MsgPictureFromOthersComponent
    //   name={"cheng"}
    //   datetime={"2021-03-03 01:00:00"}
    // />,
    // <MsgBubbleFromUserComponent
    //   name={"cheng"}
    //   datetime={"2021-03-01 01:00:00"}
    // />,
    // <MsgBubbleFromOthersComponent
    //   name={"santiago"}
    //   datetime={"2021-03-01 01:00:00"}
    // />,
    // <MsgBubbleFromOthersComponent
    //   name={"santiago"}
    //   datetime={"2021-03-01 01:00:00"}
    // />,
    // <MsgBubbleFromOthersComponent
    //   name={"santiago"}
    //   datetime={"2021-03-01 01:00:00"}
    // />,
    // <MsgBubbleFromOthersComponent
    //   name={"santiago"}
    //   datetime={"2021-03-01 01:00:00"}
    // />,
  ]);

  const userSendingMessage = React.useRef("");

  const handleUpdateMsg = () => {
    setMessages((messages) => {
      return [
        ...messages,
        <MsgBubbleFromUserComponent
          datetime={moment().format("YYYY-MM-DD hh:mm:ss")}
          content={userSendingMessage.current}
        />,
      ];
    });
  };

  const handleSendingMsg = (message) => {
    userSendingMessage.current = message;
    handleUpdateMsg();
  };

  return (
    <Fragment>
      <CurrentChatHeaderComponent />
      <CurrentChatPageComponent messages={messages} />
      <MsgTypingComponent
        drawerOpen={props.drawerOpen}
        handleDrawerOpen={props.handleDrawerOpen}
        handleUpdateMsg={handleUpdateMsg}
        handleSendingMsg={handleSendingMsg}
      />
    </Fragment>
  );
}
