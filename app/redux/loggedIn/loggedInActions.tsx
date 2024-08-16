import { CHANGE_LOG_STATUS } from "./loggedInTypes";

const initialState = {
  isLoggedIn: false,
};

const logInReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case CHANGE_LOG_STATUS:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

export default logInReducer;
