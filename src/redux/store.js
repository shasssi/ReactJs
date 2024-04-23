import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slice/navigationSlice";

const appStore = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default appStore;
