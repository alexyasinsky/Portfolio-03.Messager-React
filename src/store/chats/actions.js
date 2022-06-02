import {onValue, get} from "@firebase/database";
import {getChatsRefById, getUsersRefById} from "../../services/firebase";


export const SET_CHATS = 'CHATS::SET_CHATS';
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";


const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats
})
export const addChat = (buddy) => ({
  type: ADD_CHAT,
  payload: buddy,
});

export const deleteChat = (name) => ({
  type: DELETE_CHAT,
  payload: name,
});


export const initChatsFB = (id) => (dispatch) => {
  onValue(getChatsRefById(id), snapshot => {
    const chats = snapshot.val();
    for (let buddyId in chats) {
      get(getUsersRefById(buddyId)).then(snapshot => {
        debugger
        const buddy = snapshot.val();
        dispatch('addChat', buddy);
      })

    }
    // const chatsArray = Object.values(chats);
    // dispatch(setChats(chatsArray));
  });
}




