import {CLEAR_MESSAGES, SET_MESSAGES} from "./actions";


const initialState = [];

export const messagesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MESSAGES:
      return [...payload];
    case CLEAR_MESSAGES:
      return initialState;
    default:
      return state;
  }
};