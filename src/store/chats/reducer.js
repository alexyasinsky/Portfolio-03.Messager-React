import faker from "@faker-js/faker";
import {ADD_CHAT, DELETE_CHAT, SET_CHATS} from "./actions";

const initialState = [];

export const chatsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CHATS:
      debugger
      return [...payload];
    case ADD_CHAT:
      debugger
      return [...state, payload];
      // let buddy = {
      //   id: faker.datatype.uuid(),
      //   avatar: faker.image.avatar(),
      //   name: payload
      // };
      // return [...state, buddy];
    case DELETE_CHAT:
      // return state.filter(({ name }) => name !== payload);
    default:
      return state;
  }
};