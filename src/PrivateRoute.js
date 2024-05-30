import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";

function PrivateRoute() {
  const token = window.localStorage.getItem("token");
  return token ? (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
