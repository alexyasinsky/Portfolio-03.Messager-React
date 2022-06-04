import {SET_PROFILE, CLEAR_PROFILE} from "./actions";

const initialState = {};

export const profileReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        ...payload
      };
    case CLEAR_PROFILE:
      return initialState;
    default:
      return state;
  }
};