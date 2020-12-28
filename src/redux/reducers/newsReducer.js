import { CHECKLOAD_CHANGE } from "../actions/actionTypes";

const InitialState = {
  token: null,
  checkLoad: false,
};

const newsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CHECKLOAD_CHANGE:
      return {
        ...state,
        checkLoad: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default newsReducer;
