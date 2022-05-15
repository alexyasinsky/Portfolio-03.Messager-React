import {onValue, get} from "@firebase/database";
import {getUserChatsRefById, getUsersRefById} from "../../services/firebase";


export const SET_CHATS = 'CHATS::SET_CHATS';
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";


const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats
})
export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const deleteChat = (name) => ({
  type: DELETE_CHAT,
  payload: name,
});


export const initChatsFB = (id) => (dispatch) => {
  onValue(getUserChatsRefById(id), snapshot => {
    const chats = snapshot.val();
    debugger
    for (let chat in chats) {
      get(getUsersRefById(chat.nickname)).then(snapshot => {
        debugger
        const value = snapshot.val();
        chat = {...chat, ...value};
      })
    }
    debugger
    const chatsArray = Object.values(chats);
    dispatch(setChats(chatsArray));
  });
}




