type Account = {
  name: string;
  familyName: string;
  givenName: string;
  email: string;
  username: string;
  roles: string[];
};

const initialState: Account = {
  name: "",
  familyName: "",
  givenName: "",
  email: "",
  username: "",
  roles: [],
};
