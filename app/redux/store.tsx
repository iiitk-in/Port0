import { createStore } from "redux";
import darkModeReducer from "./darkMode/darkModeReducers";
const store = createStore(darkModeReducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;