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

export const getOpenNavDrawer = () => ({ type: OPEN_NAV_DRAWER });
export const getCloseNavDrawer = () => ({ type: CLOSE_NAV_DRAWER });
export const getTypingMsg = (value) => ({ type: TYPING_MSG, value });
export const getSendingMsg = ({ from, to, messageType, datetime }) => ({
  type: SENDING_MSG,
  from,
  to,
  messageType,
  createdAt: datetime,
  updatedAt: datetime,
});
export const getClickContact = ({ name, onlineStatus, clickedIdx }) => ({
  type: CLICK_CONTACT,
  name,
  onlineStatus,
  clickedIdx,
});
export const getAllContactsListFromDB = (value) => ({
  type: GET_ALL_CONTACTS_LIST_FROM_DB,
  value,
});
export const forceRerender = () => ({ type: FORCE_RE_RENDER });
export const getChatMessagesHistory = (chatMessagesHistory) => ({
  type: GET_CHAT_MESSAGES_HISTORY,
  chatMessagesHistory,
});
