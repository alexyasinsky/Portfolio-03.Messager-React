import {TOGGLE_CHECKBOX} from "./actions";

const initialState = {
  showName: false,
  name: 'Alex'
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        showName: !state.showName
      }
    default:
      return state;
  }
};