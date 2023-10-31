import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice } from "./account.slice";

const store = configureStore({
  reducer: {
    account: AccountSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
