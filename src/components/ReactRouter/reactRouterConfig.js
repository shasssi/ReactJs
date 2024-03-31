import React from "react";

export const reactRouterDomCode = `import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouteConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <h1>Hello from about page !!!</h1>,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouteConfig} />);`;

export const routerContentData = [
  {
    id: 1,
    mainContent: (
      <span>
        React Router is a library which enables us to navigate among different
        pages in a React applications.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Install command &#x2192; <b>npm i react-router-dom</b>
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            We import <b>createBrowserRouter</b>, <b>RouterProvider</b> from
            react-router-dom to create routes for our appilcation.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            &#x25CF; createBrowserRouter &#x2192; It is a router config which
            contains an array of Route objects. <b>Route</b> object contain
            information such as path, element, children. &#x2192; This config
            basically decides which React component to render based on route
            path.
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            &#x25CF; RouterProvider &#x2192; It actually binds the router config
            to the component that we create using createBrowserRouter. &#x2192;
            By binding our parent component with RouterProvider, it ensurer that
            all the child components have the access to the routing features.
          </span>
        ),
      },
    ],
  },
];

export const parentComponentCode = `import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default App;`;

export const parentComponentBindingData = [
  {
    id: 1,
    mainContent: (
      <span>
        Parent Component &#x2192; <b>App Component</b> is binded to
        RouterProvider with router config data. Here we have used <b>Outlet</b>{" "}
        component.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x25CF; Outlet Component &#x2192; It is provided by
            react-router-dom. &#x2192; It should be used in parent component to
            render their child route elements.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Here, child component &#x2192; Dashboard Component gets filled to
            outlet component. &#x2192; When the route is '/' it renders parent
            App component and based on route config it will render Dashboard as
            a child component.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            <b>Always Outlet component gets replaced with child component</b>
          </span>
        ),
      },
    ],
  },
];

export const navigationComponentCode = `import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  return (
    <Fragment>
      <Link to="/about">About Page</Link>
      <button
        onClick={() => navigate("/about", { state: { component: "Header" } })}
      >Navigate to about page</button>
    </Fragment>
  );
}

export default Header;`;

export const componentNavigationData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Link Component</b> &#x2192; It is provided by react-router-dom. It is
        used for navigation around pages in React application.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x25CF; HTML anchor tag &#x2192; we should not use normal anchor
            tag because it refreshes or reload the whole page.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            &#x25CF; <b>useNavigate Hook</b> &#x2192; Alternate way of handling
            navigation programatically. &#x2192; this hook returns a function in
            which we can pass the route path string as well as optional state
            value.
          </span>
        ),
      },
    ],
  },
];

export const useLocationHooksCode = `import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const navigatedFrom = location?.state?.component;

  return (
    <Fragment>
      <h3>About Page</h3>
      <p>Navigated from : {navigatedFrom}</p>
    </Fragment>
  );
}

export default About;`

export const useLocationHooksData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useLocation Hooks</b> &#x2192; It is provided by react-router-dom. It
        gives us loaction object. &#x2192; we can read the state data which is
        passed through <b>navigate</b> function from location object.
      </span>
    ),
  },
];
