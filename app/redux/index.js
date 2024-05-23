import darkModeReducer from "./darkMode/darkModeReducers";
import emailReducer from "./email/emailReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  email: emailReducer,
});

export default allReducers;