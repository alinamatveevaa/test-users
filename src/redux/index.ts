import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice";

const store = configureStore({
  reducer: usersSlice,
});

export default store;