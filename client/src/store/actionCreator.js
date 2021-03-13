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
import cookie from "react-cookies";
import socketInit from "../socket/socket";
import { io } from "socket.io-client";

const initDomain = `http://127.0.0.1:3001`;

export const authorizeUser = () => ({
  type: AUTHORIZED,
});
export const deauthorizeUser = () => ({
  type: DEAUTHORIZED,
});
export const openSnackbar = (msg) => ({
  type: OPEN_SNACKBAR,
  msg,
});
export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
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
export const getClickContact = ({ name, onlineStatus, clickedUuid }) => ({
  type: CLICK_CONTACT,
  name,
  onlineStatus,
  clickedUuid,
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
export const updateSearchingName = (name) => ({
  type: UPDATE_SEARCHING_NAME,
  name,
});
export const clearSearchedResult = () => ({
  type: CLEAR_SEARCHED_RESULT,
});
export const getSearchedContact = (searchedContact) => ({
  type: SEARCH_CONTACT,
  searchedContact,
});
export const checkAuthorization = () => {
  return (dispatch) => {
    fetch("/auth", {
      method: "POST",
      headers: {
        Authorization: cookie.load("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.logged_in) {
          dispatch(createSocket(io(initDomain)));
          dispatch({
            type: AUTHORIZED,
          });
        } else {
          dispatch({
            type: DEAUTHORIZED,
          });
        }
      });
  };
};
export const login = (email, password) => {
  return (dispatch, getState) => {
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.logged_in) {
          cookie.save("token", res.data.token, { path: "/" });
          cookie.save("email", email, { path: "/" });
          dispatch(createSocket(io(initDomain)));
          dispatch({
            type: AUTHORIZED,
          });
        } else {
          dispatch({
            type: OPEN_SNACKBAR,
            msg: res.data.msg,
          });
        }
      });
  };
};

const createSocket = (io) => ({
  type: CREATE_SOCKET,
  io,
});
