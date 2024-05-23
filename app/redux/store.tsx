import { createStore } from "redux";
import allReducers from "./index";
/* eslint-disable no-underscore-dangle */
const store = createStore(allReducers);
/* eslint-enable */

export default store;
export type RootState = ReturnType<typeof store.getState>;