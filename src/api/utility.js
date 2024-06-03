export const handleError = (error) => {
    let errMsg = "";
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
}