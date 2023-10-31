import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Account = {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
};

const initialState: Account = {
  firstName: "",
  lastName: "",
  email: "",
  roles: [],
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<Account>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
    },
    deleteAccount: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.roles = [];
    },
  },
});

export const { setAccount, deleteAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
