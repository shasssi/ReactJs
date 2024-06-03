import axios from "axios";
import { handleError } from "./utility";

export const handleSignUp = async (payload) => {
  try {
    const response = await axios.post("/api/signup", payload);
    if (response?.status === 200) {
      window.localStorage.setItem("token", response?.data?.token);
    }
    return response?.data;
  } catch (error) {
    return handleError(error);
  }
};

export const handleSignIn = async (payload) => {
  try {
    const response = await axios.post("/api/signin", payload);
    if (response?.status === 200) {
      window.localStorage.setItem("token", response?.data?.token);
    }
    return response?.data;
  } catch (error) {
    return handleError(error);
  }
};
