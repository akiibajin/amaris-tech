import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homeTopReducer from "../features/homeTop/homeTopSlice";
import userReducer from "../features/user/userSlice"
export const store = configureStore({
  reducer: {
    user : userReducer,
    homeTop: homeTopReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
