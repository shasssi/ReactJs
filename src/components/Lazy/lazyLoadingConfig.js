import React from "react";

export const lazyLoadinCode = `import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardComponet from "./components/Dashboard/DashboardComponet";

const TopicsComponent = lazy(() =>
  import("../src/components/Topics" /* webpackChunkName: "topicsComponent" */)
);
const AboutComponent = lazy(() =>
  import("../src/components/About" /* webpackChunkName: "topicsComponent" */)
);

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
          <Suspense fallback={<h1>Loading...</h1>}>
            <TopicsComponent />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutComponent />
          </Suspense>
        ),
      },
    ],
  },
]);`;

export const lazyLoadinData = [
  {
    id: 1,
    mainContent: (
      <span>
        Lazy Loading is on demand loading. <b>It helps to optimize the performance
        of React applications.</b>
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Lazy Loading helps to load only the required components or modules.
            It helps to load the web page quickly and presents the limited
            content to the user that is really needed.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            It will load the other components or modules whenver there is a
            need. Here the data is only loaded when visited or scrolled.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            <b>Code Splitting</b> &#x2192; It breaks the code into separate chunks. when the component is
            requested the chunk is loaded on demand. It is useful in webpack
            bundelers for code splitting/chunks. 
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            <b>Advantages</b> &#x2192; On demand loading reduces the time
            consumption and memory usage. &#x2192; A quicker initial load time
            can be achieved by using lazy loading. &#x2192; Unnecessary code
            execution is avoided.
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            <b>Disdvantages</b> &#x2192; It may effect the website's ranking on
            serach engine sometimes, due to improper indexing of the unloaded
            content.
          </span>
        ),
      },
    ],
  },
];

export const suspenseData = [
  {
    id: 1,
    mainContent: (
      <span>
        Lazy Loading is implemented by using React built-in function{" "}
        <b>React.lazy()</b> and <b>Suspense component</b>
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Suspense component is used with lazy loading in React &#x2192; The
            use of Suspense is to define a fallback content which gets displayed
            till the component which we lazily loaded is ready to be rendered.
            &#x2192; It suspends the rendering of the component till it is ready
            to be displayed.
          </span>
        ),
      },
    ],
  },
];
