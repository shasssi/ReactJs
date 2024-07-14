import axios from "axios";
import { handleError, isUserAuthorized } from "./utility";
import { STATUS_CODE_SUCCESS } from "../common/constants";

const ENDPOINTS = {
  TOPICS: "/api/topics",
}

export const fetchAllTopics = async () => {
  try {
    const response = await axios.get(ENDPOINTS.TOPICS);
    if (isUserAuthorized(response) && response?.status === STATUS_CODE_SUCCESS) {
      return response?.data?.data;
    }
    throw response;
  } catch (error) {
    return handleError(error);
  }
};
