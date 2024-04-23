import React from "react";

export const reactElementCode = `import React from "react";

const heading = React.createElement("h1", { id: "heading" }, "Hello React !");`;

export const routerElementData = [
  {
    id: 1,
    mainContent: (
      <span>
        React Element is a javascript object. It is not HTML or DOM elements.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            We create React Element with &#x2192; <b>React.createElement()</b>{" "}
            &#x2192; createElement is a method which returns us the React
            Element.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            React Element &#x2192; is an object &#x2192; which gets converted to
            HTML Element <b>(ReactDOM render)</b>.
          </span>
        ),
      },
    ],
  },
];

export const jsxCode = `import React from "react";

const heading = <h1 id="heading">Hello React!</h1>;`;

export const jsxData = [
  {
    id: 1,
    mainContent: (
      <span>
        JSX &#x2192; Javascript XML like syntax. It is basicall a syntax extension of
        Javascript which makes it easier to create React Elements.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            With <b>React.createElement()</b> &#x2192; The code is not readable
            and the code gets complex if we create more nested elements.
          </span>
        ),
      },
    ],
  },
];

export const jsxBabelCode = `import React, { useState } from "react";

function JSXComponent() {
  const [countValue, setCountValue] = useState(0);
  const itemList = ["Laptop", "Mobile", "Charger"];

  return (
    <Fragment>
      {Array.isArray(itemList) &&
        itemList.map((item, index) => <p key={index}>{item}</p>)}

      <p>Current count - {countValue}</p>
      <button onClick={() => setCountValue(countValue++)}>
        Increase Count
      </button>
    </Fragment>
  );
}

export default JSXComponent;`;

export const jsxBabelData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>Babel</b> &#x2192; It is a javascript compiler. It is mainly used to
        convert ECMAScript 2015+ code into backwards-compatible JavaScript code
        that can be run by older JavaScript engines (oldere browsers).
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            <b>JSX</b> &#x2192; It is not a valid javascript. &#x2192; JS Engine
            doesn't understand this JSX since JS engine will only underatnd ECMA
            scripts.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>
              Here, we use transpilers like Babel to convert JSX to JavaScript.
            </b>{" "}
            We use Babel with React to transpile the JSX code into simple React
            functions (React.createElement) &#x2192; .
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            We use Babel with React to transpile the JSX code into simple React
            functions (React.createElement) &#x2192; It gets converted to React
            Element &#x2192; JS Object &#x2192; which gets converted to HTML
            Element (ReactDOM render).
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            In React we can use normal javascript expression with JSX. For this
            we have to wrap that JS expression in curly braces <b>{}</b>.
          </span>
        ),
      },
      {
        id: 15,
        content: (
          <span>
            <b>
              JSX is faster than normal Javascript code as it gets
              transpiled/converted into an optimized code before reaching to JS
              Engine
            </b>
            .
          </span>
        ),
      },
    ],
  },
];
