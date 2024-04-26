import React from "react";

export const jsxCode = `const jsx = (
  <div className="parent">
    <p>Hello JSX</p>
    <img src={"./image.png"} />
  </div>
);

console.log(jsx);

/* console log result */

{
  $$typeof: Symbol(react.element),
  key: null,
  props: {
    children: [
      {
        $$typeof: Symbol(react.element),
        key: null,
        props: {
          children: "Hello JSX",
        },
        type: "p",
      },
      {
        $$typeof: Symbol(react.element),
        key: null,
        props: {
          src: "./image.png",
        },
        type: "img",
      },
    ],
    className: "parent",
  },
  ref: null,
  type: "div",
};`;

export const oldReconciler = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>React</b> &#x2192; It is a free and open-source front-end Javascript
        library for building Single Page Applications based on components.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            <b>Single Page Application SPA</b> &#x2192; It is a web application
            that loads a <b>single HTML page</b> and dynamically updates the content
            when user interacts with the application.
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    mainContent: (
      <span>
        <b>Reconciliation</b> &#x2192; It a process to keep the UI sync with
        Real DOM.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Two steps involved in this process &#x2192; Virtual DOM &#x2192;
            Diffing Algorithm
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    mainContent: (
      <span>
        <b>Virtual DOM</b> &#x2192; Representation of Actual DOM &#x2192;
        whenever the React componet gets called, it reurns a piece of JSX which
        is nothing but Babel coverted React Element.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x2192; It is a Javascript Object which is like a tree structure
            having all node element information. On first render the Virtual DOM
            gets updated to Real DOM.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            &#x2192; React creates a new Virtual DOM after every update and with
            Diffing alogorithm it compares with old VDOM and finds the exact
            node which needs to be upadted.
          </span>
        ),
      },
    ],
  },
];

export const stackReconciler = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Diffing Algorithm</b> It uses Breadth-First Search (BFS) approach.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            It uses different optimization technique so that a minimal diffence
            can be calculated in <b>O(N)</b> efficiently.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            When we have a list of child elements which often changes,{" "}
            <b>we always provide an unique "key" as props</b>.
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    mainContent: (
      <span>
        <b>Before React 16</b>
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            React used to work on old reconciler which was called &#x2192;{" "}
            <b>Stack Reconciler</b>.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>Problem with Stack Reconciler approach</b>.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            &#x2192; It was synchronous, Hence some features like{" "}
            <b>Suspense</b> and Concurrent Mode are not supported.
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            &#x2192; If a lot of state update happens all at once, it can cause
            a frame drop and poor UI experience.
          </span>
        ),
      },
    ],
  },
];

export const fiberReconciler = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>React 16 : Fiber Reconciler</b> &#x2192; In React 16 a new reconciler
        has been created from scratch which uses a new datastructure called
        Fiber.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Reconciliation is a process of keeping UI in sync with the latest
            data. Two steps &#x2192; Reconciler &#x2192; Renderer.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>Reconciler</b> &#x2192; It uses diff algorithm to find the
            difference between Current Tree and Work in Progress (WIP) Tree and
            then it the sends it to the Renderer.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            <b>Renderer</b> &#x2192; It is responsible for updating the UI.
            Different devices can have different Renderers while sharing the
            same Reconciler.{" "}
            <b>In React we use ReactDOM library for rendering.</b>
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    mainContent: (
      <span>
        <b>React State Update - How it works ?</b>
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x2192; When we call setSate, React adds the data in a Queue which
            needs to be updated.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            &#x2192; The updates are later handled one by one, but the changes
            are applied all at the same time in a <b>batch process</b>.
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    mainContent: (
      <span>
        Updates are processed in two phase <b>Renderer</b> and <b>Commit</b>.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x2192; <b>First (Renderer) phase</b> &#x2192; React calculates the
            new state and creates a list of effects.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Effect &#x2192; activity like DOM mutation or lifecycle method call.
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            <b>First phase is asynchronous</b> Here WIP Tree can be paused in
            between to do some priority work. Once it is done React main thread
            will continue on WIP tree again.
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            &#x2192; <b>Second (Commit) phase</b> &#x2192; All effects are
            applied in this phase. UI is synced.
          </span>
        ),
      },
      {
        id: 15,
        content: (
          <span>
            <b>Second phase is synchronous</b>.
          </span>
        ),
      },
    ],
  },
];
