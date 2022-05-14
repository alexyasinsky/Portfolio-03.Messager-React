import {SET_NAME, TOGGLE_CHECKBOX} from "./actions";
import faker from "@faker-js/faker";

const initialState = {
  showName: false,
  name: 'Alex',
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        showName: !state.showName
      }
    case SET_NAME: {
      return {
        ...state,
        name: action.newName,
      };
    }
    default:
      return state;
  }
};