import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DashboardComponet from "./components/Dashboard/DashboardComponet";
import SkeletonComponent from "./components/common/Skeleton/SkeletonComponent";

const TutorialComponent = lazy(() =>
  import("../src/components/Tutorial/TutorialComponent" /* webpackChunkName: "tutorialComponent" */)
);

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
        path: "/react/:topics",
        element: (
          <Suspense fallback={<SkeletonComponent />}>
            <TutorialComponent />
          </Suspense>
        ),
      },
      {
        path: "/testroute",
        element: <SkeletonComponent />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouteConfig} />);
