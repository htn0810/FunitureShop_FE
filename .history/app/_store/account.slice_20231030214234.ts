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
