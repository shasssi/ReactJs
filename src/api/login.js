import axios from "axios";

export const userSignUp = async (payload) => {
  try {
    const response = await axios.post("/api/signup", payload);
    if (response?.status === 200) {
      window.localStorage.setItem("token", response?.data?.token);
      return response?.data;
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const userSignIn = async (payload) => {
  try {
    const response = await axios.post("/api/signin", payload);
    if (response?.status === 200) {
      window.localStorage.setItem("token", response?.data?.token);
      return response?.data;
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
