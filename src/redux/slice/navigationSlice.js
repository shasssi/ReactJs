import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: [],
  reducers: {
    addNavigation: (state, action) => {
      const index = state?.findIndex(
        (obj) => obj?.page === action?.payload?.page
      );
      if (index === -1) {
        state.push({
          ...action.payload,
        });
      }
    },
    deleteLastItem: (state, action) => {
      state?.length !== 0 && state.pop();
    },
  },
});

export const { addNavigation, deleteLastItem } = navigationSlice.actions;

export default navigationSlice.reducer;
