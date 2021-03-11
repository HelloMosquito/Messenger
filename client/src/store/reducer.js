import {
  OPEN_NAV_DRAWER,
  CLOSE_NAV_DRAWER,
  TYPING_MSG,
  SENDING_MSG,
  CLICK_CONTACT,
  FORCE_RE_RENDER,
  GET_ALL_CONTACTS_LIST_FROM_DB,
  GET_CHAT_MESSAGES_HISTORY,
} from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  forceReRender: 1,
  navDrawerOpen: true,
  hiddenChatChannel: true,
  userTypingMsg: "",
  currentChatContact: { name: "", onlineStatus: false },
  currentClickedContactIdx: -1,
  currentChatMessagesHistory: [
    // {
    //   datetime: "123123",
    //   message: "kdkdkdkdkdkdkd",
    // },
  ],
  searchedContactsList: [
    // {
    //   onlineStatus: false,
    //   uuid: 5,
    //   name: "ashanti",
    //   photo: "/images/ashanti.png",
    //   lastMessage: "Do you know where is Cana",
    //   lastModifiedAt: 1614720142,
    // },
  ],
  allContactsList: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_NAV_DRAWER:
      return state.set("navDrawerOpen", true);
    case CLOSE_NAV_DRAWER:
      return state.set("navDrawerOpen", false);
    case TYPING_MSG:
      return state.set("userTypingMsg", action.value);
    case SENDING_MSG:
      return state
        .set("userTypingMsg", "")
        .update("currentChatMessagesHistory", (array) =>
          array.push(
            fromJS({
              from: action.from,
              to: action.to,
              messageType: action.messageType,
              content: state.get("userTypingMsg"),
              createdAt: action.createdAt,
              updatedAt: action.updatedAt,
            })
          )
        );
    case CLICK_CONTACT:
      return state
        .set("hiddenChatChannel", false)
        .set("currentClickedContactIdx", action.clickedIdx)
        .setIn(["currentChatContact", "name"], action.name)
        .setIn(["currentChatContact", "onlineStatus"], action.onlineStatus);
    case FORCE_RE_RENDER:
      return state.set("forceReRender", -1 * state.get("forceReRender"));
    case GET_ALL_CONTACTS_LIST_FROM_DB:
      return state.set("allContactsList", fromJS(action.value));
    case GET_CHAT_MESSAGES_HISTORY:
      return state.set(
        "currentChatMessagesHistory",
        fromJS(action.chatMessagesHistory)
      );
    default:
      return state;
  }
}
