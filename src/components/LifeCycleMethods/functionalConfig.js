import React from "react";

export const functionalComponentCode = `import React, { Fragment, useEffect, useState } from "react";

function FunctionalComponet() {
  const [countValue, setCountValue] = useState(0);
  
  useEffect(() => {
    console.log("Mount Phase - componentDidMount");
    return () => {
      console.log("Unmount Phase - componentWillUnMount");
    };
  }, []);

  useEffect(() => {
    console.log("Update Phase - componentDidUpdate");
  }, [countValue]);

  return (
    <Fragment>
      <div>Functional Component - LifeCycle</div>
      <div>Count Value - {countValue}</div>
    </Fragment>
  );
}

export default FunctionalComponet;`;

export const functionalComponentLifeCycleData = [
  {
    id: 1,
    mainContent: (
      <span>
        Functional component doesn't have built-in lifecycle methods. We use
        React Hooks for that. Every component have 3 lifecycle methods (Mount,
        Update, Unmount).
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Mount &#x2192; Whenever any components gets loaded &#x2192; first it
            gets rendered &#x2192; it calls componentDidMount &#x2192; after
            this components gets renderd again.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Update &#x2192; Whenever state or props get updated &#x2192; it
            calls componentDidUpdate &#x2192; after this components gets renderd
            again.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            Unmount &#x2192; Whenever components get unMounted &#x2192; it calls
            componentWillUnMount.
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    mainContent: "",
    subContent: [
      {
        id: 21,
        content: (
          <span>
            <b>ComponentDidMount</b> &#x2192; This gets called after inital
            render of the components once it loads. &#x25CF; Here we write
            subscription APIs like starting some timer. &#x25CF; Subscribing
            some browser events lets say addEventListner for window width
            calculation. &#x25CF; API &#x2192; to fetch the data from
            network/server.
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    mainContent: "There are two approach to load data in webpage.",
    subContent: [
      {
        id: 31,
        content: (
          <span>
            &#x25CF; <b>Page Loads &#x2192; API call (500ms) &#x2192; Render</b>{" "}
            (In this approach for 500ms the UI will be kind of blank & then
            suddenly the data get loaded. This is poor UX (user experience)
            where page seems to be frozen for sometimes.)
          </span>
        ),
      },
      {
        id: 32,
        content: (
          <span>
            &#x25CF;{" "}
            <b>
              {" "}
              Page Loads &#x2192; Render &#x2192; API call (500ms) &#x2192;
              Render{" "}
            </b>
            (Here two times rendering will happen since we call API in{" "}
            <b>componentDidMount</b>. But here comes the react whose render
            cycle are very fast. Hence this approach gives better UX.)
          </span>
        ),
      },
    ],
  },
];

export const functionalComponentData = [
  {
    id: 1,
    mainContent: (
      <span>
        Functional component &#x2192; It is a normal javascript function that
        accepts props as an argument and returns a JSX.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x25CF; It is also known as <b>Stateless components</b> &#x2192;
            doesn't have its internal state management.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>&#x25CF; It doesn't have built-in react lifeCycleMethods.</span>
        ),
        route: "/react/lifeCycle",
        linkText: 'Check React Lifecycle'
      },
      {
        id: 13,
        content: (
          <span>
            &#x25CF; <b>React Hooks</b> are used in functional component to make
            them <b>Stateful (useState)</b> &#x2192; to use lifeCycleMethods
            inside functional component we use different <b>useEffect</b> hooks.
          </span>
        ),
      },
    ],
  },
];
