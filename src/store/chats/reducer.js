import {CLEAR_CHATS_STORE, SET_BUDDIES, SET_CHATS} from "./actions";

const initialState = {
  buddies: [],
  chats: {}
};

export const chatsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_BUDDIES:
      return {
        chats: state.chats,
        buddies: [...payload]
      }
    case SET_CHATS:
      return {
        chats: {...payload},
        buddies: state.buddies
      }
    case CLEAR_CHATS_STORE:
      return initialState;
    default:
      return state;
  }
};