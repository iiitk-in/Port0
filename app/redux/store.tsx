import { createStore } from "redux";
import allReducers from "./index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
/* eslint-disable no-underscore-dangle */
const secret = "my-super-difficult-to-guess-secret"; //will hide this later :)
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['userData','darkMode','formData','email'],
  transforms: [
    encryptTransform({
      secretKey: secret,

      onError: function (error) {
        // handle the encryption error
      },
    }),
  ],
};

const persistedReducer = persistReducer<any, any>(persistConfig, allReducers);

const store = createStore(persistedReducer);
/* eslint-enable */

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
