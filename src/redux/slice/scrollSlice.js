import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {},
  reducers: {
    updateScollPosition: (state, action) => {
      state.x = action?.payload?.x;
      state.y = action?.payload?.y;
    },
    resetScollPosition: (state, action) => {
      console.log("resetScollPosition state", state);
      state.x = 0;
      state.y = 0;
    },
  },
});

export const { updateScollPosition, resetScollPosition } = scrollSlice.actions;

export default scrollSlice.reducer;
