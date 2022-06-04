// export const ADD_CHAT = "CHATS::ADD_CHAT";
// export const DELETE_CHAT = "CHATS::DELETE_CHAT";
//
// export const addChat = (name) => ({
//   type: ADD_CHAT,
//   payload: name,
// });
//
// export const deleteChat = (name) => ({
//   type: DELETE_CHAT,
//   payload: name,
// });

import moment from "moment";
import {onValue} from "@firebase/database";
import {getProfileChatsRefById, getMessagesRefById} from "../../services/firebase";

export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';
export const CLEAR_MESSAGES = 'MESSAGES::CLEAR_MESSAGES';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages
})

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
})


let unsubscribe;

export const initMessagesTrack = (id) => (dispatch) => {
  const unsubscribeMessages = onValue(getMessagesRefById(id), snapshot => {
    const messages = snapshot.val();
    delete messages.exists;
    const messagesArray = Object.values(messages);
    dispatch(setMessages(messagesArray));
  });
  unsubscribe = () => {
    unsubscribeMessages();
  }
};

export const stopMessagesTrack = () => () => {
  unsubscribe();
}