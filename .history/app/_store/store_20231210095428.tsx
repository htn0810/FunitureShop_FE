import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AccountSlice from "./account.slice";
import loadingSlice from "./loading.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account"],
};

const reducer = combineReducers({
  account: AccountSlice,
  loading: loadingSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
