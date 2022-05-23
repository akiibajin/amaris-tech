import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IUser, UserData } from "../../interfaces/User";

interface UserState extends UserData {
  errors?: string;
}

const initialState: UserState = {
  name: "",
  age: 0,
  email: "",
  password: "",
  surName: "",
  errors: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, { payload }: PayloadAction<UserData>) => {
      state.name = payload.name;
      state.surName = payload.surName;
      state.password = "null";
      state.age = payload.age;
      state.email = payload.email;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },
  },
});

export const { setError, userLogin } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
