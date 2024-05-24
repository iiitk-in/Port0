import darkModeReducer from "./darkMode/darkModeReducers";
import emailReducer from "./email/emailReducers";
import { combineReducers } from "redux";
import formDataReducer from "./formData/formDataReducers";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  email: emailReducer,
  formData: formDataReducer,
});

export default allReducers;