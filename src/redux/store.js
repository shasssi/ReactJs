import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slice/navigationSlice";
import scrollReducer from "./slice/scrollSlice";

const appStore = configureStore({
  reducer: {
    navigation: navigationReducer,
    scroll: scrollReducer,
  },
});

export default appStore;
