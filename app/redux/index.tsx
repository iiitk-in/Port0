import { combineReducers } from "redux";
import darkModeReducer from "./darkMode/darkModeReducers";
import emailReducer from "./email/emailReducers";
import formDataReducer from "./formData/formDataReducers";
import userDataReducer from "./userData/userDataReducer";
import logInReducer from "./loggedIn/loggedInActions";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  email: emailReducer,
  formData: formDataReducer,
  userData: userDataReducer,
  isLoggedIn: logInReducer,
});

export default allReducers;