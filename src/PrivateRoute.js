import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import AlertComponent from "./common/Error/AlertComponent";
import { TOKEN_KEY } from "./common/constants";

function PrivateRoute() {
  const token = window.localStorage.getItem(TOKEN_KEY);
  return token ? (
    <>
      <AlertComponent />
      <HeaderComponent />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
