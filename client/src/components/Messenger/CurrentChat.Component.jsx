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
      "message-type": 0,
      content:
        "This is a pre-defined pseudo-msg.This is a pre-defined pseudo-msg.This is a pre-defined pseudo-msg.This is a pre-defined pseudo-msg.",
      createdAt: "2021-7-04 12:52:00",
      updatedAt: "2021-7-04 12:52:00",
    },
    {
      from: 1111,
      to: 4444,
      "message-type": 0,
      content:
        "It's a sunny day. Sunny day! It's a sunny day. Sunny day! It's a sunny day. Sunny day! It's a sunny day. Sunny day!",
      createdAt: "2021-9-29 12:52:00",
      updatedAt: "2021-9-29 12:52:00",
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
