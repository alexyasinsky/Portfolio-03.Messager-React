import {SET_NAME, SET_PROFILE, TOGGLE_CHECKBOX} from "./actions";

const initialState = {

}

export const profileReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        ...payload
      };
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        showName: !state.showName
      }
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