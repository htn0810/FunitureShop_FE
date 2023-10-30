import { configureStore } from "@reduxjs/toolkit";
// import yourReducer from "./yourReducer"; // Import your custom reducer

const store = configureStore({
  reducer: {
    // yourReducer, // Add your reducer to the store
  },
});

export default store;
