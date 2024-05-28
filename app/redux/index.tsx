import darkModeReducer from "./darkMode/darkModeReducers";
import emailReducer from "./email/emailReducers";
import { combineReducers } from "redux";
import formDataReducer from "./formData/formDataReducers";
import userDataReducer from "./userData/userDataReducer";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  email: emailReducer,
  formData: formDataReducer,
  userData: userDataReducer,
});

export default allReducers;