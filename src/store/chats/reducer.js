import faker from "@faker-js/faker";
import {ADD_CHAT, DELETE_CHAT} from "./actions";

const initialState = Array.from({
  length: 5,
}).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.firstName()
}));

export const chatsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_CHAT:
      debugger
      let buddy = {
        id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        name: payload
      };
      return [...state, buddy];
    case DELETE_CHAT:
      return state.filter(({ name }) => name !== payload);
    default:
      return state;
  }
};