import faker from "@faker-js/faker";
import {ADD_CHAT, DELETE_CHAT, GET_ALL_USERS_LIST, SET_CHATS} from "./actions";

const initialState = [];

export const chatsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CHATS:
      return payload;
    case ADD_CHAT:
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