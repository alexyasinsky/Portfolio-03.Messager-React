import {SET_NAME, SET_PROFILE} from "./actions";

const initialState = {

}

export const profileReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        ...payload
      };
    case SET_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    default:
      return state;
  }
};