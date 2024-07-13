import { STATUS_CODE_UNAUTHORIZED } from "../common/constants";

export const handleError = (error) => {
  console.log("ERROR-LOG", error);
  let errMsg = "";
  isUserAuthorized(error?.response);
  if (typeof error?.response?.data?.err === "string") {
    errMsg = error?.response?.data?.err;
  } else if (typeof error?.response?.data?.err === "object") {
    errMsg = error?.response?.data?.err?.errorResponse?.errmsg || "";
  }
  return {
    code: error?.code,
    errMsg: errMsg,
    isError: true,
  };
};

export const isUserAuthorized = (response) => {
  if (response?.status === STATUS_CODE_UNAUTHORIZED) {
    window.location.href = "/login";
    return false;
  }
  return true;
};
