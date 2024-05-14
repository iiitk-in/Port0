import { createStore } from "redux";
import darkModeReducer from "./darkMode/darkModeReducers";
const store = createStore(darkModeReducer);

export default store;
