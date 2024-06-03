import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slice/navigationSlice";
import scrollReducer from "./slice/scrollSlice";
import userReducer from "./slice/user";

const appStore = configureStore({
  reducer: {
    auth: userReducer,
    navigation: navigationReducer,
    scroll: scrollReducer,
  },
});

export default appStore;
