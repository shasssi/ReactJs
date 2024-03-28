import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DashboardComponet from "./components/Dashboard/DashboardComponet";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouteConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardComponet />,
      },
      {
        path: "/about",
        element: <h1>about</h1>,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouteConfig} />);
