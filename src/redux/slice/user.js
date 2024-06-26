import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleSignIn, handleSignUp } from "../../api/login";

export const signIn = createAsyncThunk("user/signIn", handleSignIn);
export const signUp = createAsyncThunk("user/signUp", handleSignUp);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isError: false,
    errMsg: "",
    user: {},
    toast: {
      open: false,
      msg: "",
      type: "success",
    },
  },
  reducers: {
    logout: (state, action) => {
      window.localStorage.clear();
      state.isError = false;
      state.errMsg = "";
      state.user = {};
    },
    resetError: (state) => {
      state.isError = false;
      state.errMsg = "";
    },
    resetToast: (state) => {
      state.toast = {
        open: false,
        msg: "",
        type: "success",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      const response = action?.payload;
      state.isLoading = false;
      state.isError = response?.isError;
      if (response?.isError) {
        state.errMsg = response?.errMsg || response?.code;
      } else {
        state.user = response;
      }
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isError = true;
      state.errMsg = action?.error?.message.toString();
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      const response = action?.payload;
      state.isLoading = false;
      if (response?.isError) {
        state.isError = response?.isError;
        state.errMsg = response?.errMsg || response?.code;
      } else if (response?.data) {
        state.toast = {
          open: true,
          msg: response?.data,
          type: "success",
        };
      }
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isError = true;
      state.errMsg = action?.error?.message.toString();
    });
  },
});

export const { logout, resetError, resetToast } = userSlice.actions;

export default userSlice.reducer;
