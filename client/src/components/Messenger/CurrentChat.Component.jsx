import React, { Fragment } from "react";
import {
  CurrentChatHeaderComponent,
  CurrentChatPageComponent,
  MsgTypingComponent,
  MsgBubbleFromUserComponent,
  MsgBubbleFromOthersComponent,
  MsgPicutreFromUserComponent,
  MsgPictureFromOthersComponent,
} from "../Components";
import { useSelector, useDispatch } from "react-redux";

export default function CurrentChatComponent() {
  const msgFromRedux = useSelector((state) =>
    state.get("currentChatMessagesHistory")
  );
  const prevMsg = [
    <MsgBubbleFromOthersComponent
      name={"santiago"}
      datetime={"2021-03-01 01:00:00"}
    />,
    <MsgPicutreFromUserComponent
      name={"cheng"}
      datetime={"2021-03-02 01:00:00"}
    />,
  ];

  const messages = prevMsg.concat(
    msgFromRedux.map((msg, idx) => {
      console.log("&&&", msg);
      return (
        <MsgBubbleFromUserComponent
          key={msg.get(idx)}
          datetime={msg.get("createdAt")}
          content={msg.get("content")}
        />
      );
    })
  );
  // ------------------------------------------------------------------------------------------
  // const [ws, setWs] = useState(null);

  // const initWebSocket = () => {
  //   ws.on("getMsg", (msg) => {
  //     console.log("From server: ", msg);
  //   });
  // };
  // const sendMsg = () => {
  //   ws.emit("getMsg", userSendingMessage);
  // };

  // const connectWebSocket = () => {
  //   setWs(webSocket("http://localhost:3001"));
  // };
  // useEffect(() => {
  //   if (ws) {
  //     console.log("success connect!");
  //     initWebSocket();
  //   }
  // }, [ws]);
  // ------------------------------------------------------------------------------------------
  return (
    <Fragment>
      <CurrentChatHeaderComponent />
      <CurrentChatPageComponent messages={messages} />
      <MsgTypingComponent />
    </Fragment>
  );
}
