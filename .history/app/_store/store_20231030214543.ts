import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account.slice";
// import yourReducer from "./yourReducer"; // Import your custom reducer

const store = configureStore({
  reducer: {
    account: accountSlice,
  },
});

export default store;
