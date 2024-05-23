import { CHANGE_EMAIL } from "./emailTypes";

const initialState = {
  email: "",
};

const darkModeReducer = (
  state = initialState,
  action: {
    payload: string;
    type: any;
  }
) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
