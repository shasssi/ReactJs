import axios from "axios";
import { TOKEN_KEY } from "../common/constants";

export const setupAPIInterceptors = () => {
  //   axios.defaults.timeout = "";
  axios.defaults.baseURL = process.env.API_BASE_URL;
  axios.defaults.headers = {
    "Content-Type": "application/json;charset=UTF-8",
    // 'Content-Security-Policy': "",
    "X-Content-Type-Options": "nosniff",
  };
  axios.interceptors.request.use(
    (req) => {
      // Add Token to request header
      req.headers.set("Authorization", window.localStorage.getItem(TOKEN_KEY));
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    (res) => {
      // TODO
      return res;
    },
    (err) => {
      // TODO - handle jwt auth err etc.
      return Promise.reject(err);
    }
  );
};
