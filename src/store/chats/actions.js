import {onValue, get} from "@firebase/database";
import {getProfileChatsRefById, getUsersRefById} from "../../services/firebase";


export const SET_BUDDIES = 'CHATS::SET_BUDDIES';
export const SET_CHATS = 'CHATS::SET_CHATS';
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const CLEAR_CHAT_STORE = "CLEAR_CHAT_STORE";


const setBuddies = (buddies) => ({
  type: SET_BUDDIES,
  payload: buddies
});

const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats
});

export const addChat = (buddy) => ({
  type: ADD_CHAT,
  payload: buddy,
});

export const deleteChat = (name) => ({
  type: DELETE_CHAT,
  payload: name,
});

export const clearChatStore = () => ({
  type: CLEAR_CHAT_STORE
})

let unsubscribe;

export const initChatsTrack = (id) => (dispatch) => {
  const unsubscribeChats = onValue(getProfileChatsRefById(id), snapshot => {
    const chats = snapshot.val();
    const buddiesArray = Object.keys(chats);
    dispatch(setBuddies(buddiesArray));
    dispatch(setChats(chats));
  });
  unsubscribe = () => {
    unsubscribeChats();
  }
};

export const stopChatsTrack = () => () => {
  unsubscribe();
}




