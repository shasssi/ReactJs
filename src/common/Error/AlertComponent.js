import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import useStyles from "./error.style";
import { resetError, resetToast } from "../../redux/slice/user";

function AlertComponent() {
  const classes = useStyles();
  const state = useSelector((store) => store?.auth);
  const dispatch = useDispatch();
  const isError = state?.isError;
  const errorMsg = state?.errMsg;
  const toast = state?.toast;
  return (
    <>
      {isError && (
        <Alert
          className={classes.alertContainer}
          variant="filled"
          severity="error"
          onClose={() => dispatch(resetError())}
        >
          {errorMsg}
        </Alert>
      )}
      {toast?.open && (
        <Alert
          className={classes.alertContainer}
          variant="filled"
          severity={toast?.type}
          onClose={() => dispatch(resetToast())}
        >
          {toast?.msg}
        </Alert>
      )}
    </>
  );
}

export default AlertComponent;
