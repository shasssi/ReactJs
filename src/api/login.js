import axios from "axios";
import { handleError } from "./utility";
import { STATUS_CODE_SUCCESS, TOKEN_KEY } from "../common/constants";

const ENDPOINTS = {
  SIGNUP: "/api/signup",
  SIGNIN: "/api/signin",
}

export const handleSignUp = async (payload) => {
  try {
    const response = await axios.post(ENDPOINTS.SIGNUP, payload);
    if (response?.status === STATUS_CODE_SUCCESS) {
      window.localStorage.setItem(TOKEN_KEY, response?.data?.token);
    }
    return response?.data;
  } catch (error) {
    return handleError(error);
  }
};

export const handleSignIn = async (payload) => {
  try {
    const response = await axios.post(ENDPOINTS.SIGNIN, payload);
    if (response?.status === STATUS_CODE_SUCCESS) {
      window.localStorage.setItem(TOKEN_KEY, response?.data?.token);
    }
    return response?.data;
  } catch (error) {
    return handleError(error);
  }
};
