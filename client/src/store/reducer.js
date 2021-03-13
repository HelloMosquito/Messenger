import {
  AUTHORIZED,
  DEAUTHORIZED,
  OPEN_NAV_DRAWER,
  CLOSE_NAV_DRAWER,
  TYPING_MSG,
  SENDING_MSG,
  CLICK_CONTACT,
  FORCE_RE_RENDER,
  GET_ALL_CONTACTS_LIST_FROM_DB,
  GET_CHAT_MESSAGES_HISTORY,
  SEARCH_CONTACT,
  CLEAR_SEARCHED_RESULT,
  UPDATE_SEARCHING_NAME,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  CREATE_SOCKET,
} from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  userUuid: 1111,
  userIsAuthorized: false,
  socket: null,
  snackbarOpened: false,
  snackbarMsg: "",
  forceReRender: 1,
  navDrawerOpen: true,
  hiddenChatChannel: true,
  userTypingMsg: "",
  userSearchingName: "",
  currentChatContact: { name: "", onlineStatus: false },
  currentClickedContactUuid: -1,
  currentChatMessagesHistory: [],
  searchedContactsList: [],
  allContactsList: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case AUTHORIZED:
      return state.set("userIsAuthorized", true);
    case DEAUTHORIZED:
      return state.set("userIsAuthorized", false);
    case CREATE_SOCKET:
      return state.set("socket", action.io);
    case OPEN_SNACKBAR:
      return state.set("snackbarOpened", true).set("snackbarMsg", action.msg);
    case CLOSE_SNACKBAR:
      return state.set("snackbarOpened", false);
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
        .set("currentClickedContactUuid", action.clickedUuid)
        .setIn(["currentChatContact", "name"], action.name)
        .setIn(["currentChatContact", "onlineStatus"], action.onlineStatus);
    case FORCE_RE_RENDER:
      return state.set("forceReRender", -1 * state.get("forceReRender"));
    case GET_ALL_CONTACTS_LIST_FROM_DB:
      return state.set("allContactsList", fromJS(action.value));
    case GET_CHAT_MESSAGES_HISTORY: {
      return state.set(
        "currentChatMessagesHistory",
        fromJS(action.chatMessagesHistory)
      );
    }
    case UPDATE_SEARCHING_NAME:
      return state.set("userSearchingName", action.name);
    case SEARCH_CONTACT:
      // searchedContact is filtered from defaultState, so it's immutable object
      return state.set("searchedContactsList", action.searchedContact);
    case CLEAR_SEARCHED_RESULT:
      return state.set("searchedContactsList", fromJS([]));
    default:
      return state;
  }
}
