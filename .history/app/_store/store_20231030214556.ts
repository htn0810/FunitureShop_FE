import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account.slice";
// import yourReducer from "./yourReducer"; // Import your custom reducer

const store = configureStore({
  reducer: {
    account: accountSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
