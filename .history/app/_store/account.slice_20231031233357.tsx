import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Account = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

const initialState: Account = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<Account>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    deleteAccount: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { setAccount, deleteAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
