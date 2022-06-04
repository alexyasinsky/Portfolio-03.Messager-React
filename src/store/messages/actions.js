import {onValue} from "@firebase/database";
import {getMessagesRefById} from "../../services/firebase";

export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';
export const CLEAR_MESSAGES = 'MESSAGES::CLEAR_MESSAGES';

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages
})

const clearMessages = () => ({
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

export const stopMessagesTrack = () => (dispatch) => {
  dispatch(clearMessages());
  unsubscribe();
}