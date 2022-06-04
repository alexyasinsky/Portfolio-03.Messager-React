import {onValue} from "@firebase/database";
import {getProfileChatsRefById} from "../../services/firebase";


export const SET_BUDDIES = 'CHATS::SET_BUDDIES';
export const SET_CHATS = 'CHATS::SET_CHATS';
export const CLEAR_CHATS_STORE = "CHATS::CLEAR_CHATS_STORE";


const setBuddies = (buddies) => ({
  type: SET_BUDDIES,
  payload: buddies
});

const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats
});

export const clearChatsStore = () => ({
  type: CLEAR_CHATS_STORE
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




