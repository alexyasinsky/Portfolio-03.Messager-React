import {ADD_MESSAGE, INIT_MESSAGES_STORE} from "./actions";


const initialState = {};

export const messagesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case INIT_MESSAGES_STORE:
       if (!state.hasOwnProperty(payload)) {
         return {
           ...state,
           [payload]: []
         };
       } else {
         return state;
       }
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.buddy]: [...state[payload.buddy], payload.message]
      };

    default:
      return state;
  }
};