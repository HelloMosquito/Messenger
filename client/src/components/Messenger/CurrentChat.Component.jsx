import React, { Fragment } from "react";
import {
  CurrentChatHeaderComponent,
  CurrentChatChannelContainerComponent,
  MsgTypingComponent,
} from "../Components";
import { useSelector } from "react-redux";
import { fromJS } from "immutable";

export default function CurrentChatComponent() {
  const msgFromRedux = useSelector((state) =>
    state.get("currentChatMessagesHistory")
  );
  // prevMsg - pseudo data
  const prevMsg = fromJS([
    {
      from: 1111,
      to: 3333,
      messageType: 0,
      content: "I am going to gym.",
      createdAt: "2021-5-13 12:52:00",
      updatedAt: "2021-5-13 12:52:00",
    },
    {
      from: 1111,
      to: 4444,
      messageType: 0,
      content: "It's going to rain heavily tomorrow night!",
      createdAt: "2021-5-13 12:52:00",
      updatedAt: "2021-5-13 12:52:00",
    },
  ]);

  const messages = prevMsg.concat(
    msgFromRedux.size === 0
      ? fromJS([])
      : msgFromRedux.map((msg) => {
          return msg;
        })
  );

  return (
    <Fragment>
      <CurrentChatHeaderComponent />
      <CurrentChatChannelContainerComponent messages={messages} />
      <MsgTypingComponent />
    </Fragment>
  );
}
