import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import AlertComponent from "./common/Error/AlertComponent";

function PrivateRoute() {
  const token = window.localStorage.getItem("token");
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
