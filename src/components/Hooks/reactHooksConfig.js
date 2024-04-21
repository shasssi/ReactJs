import React from "react";

export const uncontrolledComponentCode = `import React, { useRef } from "react";

function UncontrolledComponent(props) {
  const email = useRef(null);

  const printEmail = () => {
    console.log("Email - ", email?.current?.value);
  };

  return (
    <div>
      <input ref={email} value={email?.current?.value} />
      <button onClick={printEmail}>Print Email</button>
    </div>
  );
}

export default UncontrolledComponent;`;

export const hooksData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>React Hooks</b> &#x2192; are normal javascript function which helps
        React to keep a track of the data and whenver the data is modified
        &#x2192; it triggers diff algorithm for re-rendering.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            <b>useState()</b> &#x2192; keeps a track of data that we create
            inside Funtional Component.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>useEffect()</b> &#x2192; this hooks are needed to achieve
            lifeCycle methods of react &#x2192; (componentDidMount,
            componentDidUpdate, componentWillUnmount).
          </span>
        ),
      },
    ],
  },
];

export const uncontrolledComponentData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useRef</b> &#x2192; It is used to create a reference of the element.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            We use <b>ref</b> to write an uncontrolled component,{" "}
            <b>here we use a ref to get form values from the DOM</b> instead of
            writing an event handler for every state update.
          </span>
        ),
      },
    ],
  },
];

export const useRefCode = `import React, { useRef, useEffect } from "react";

function useRefComponent(props) {
  const email = useRef(null);
  const interval = useRef(null);

  const buttonClick = () => {
    clearTimeout(interval?.current?.value);
  };

  useEffect(() => {
    interval?.current?.value = setInterval(() => {
      console.log("Email - ", email?.current?.value);
    }, 1000);
  }, []);

  return (
    <div>
      <input ref={email} value={email?.current?.value} />
      <button onClick={buttonClick}>click</button>
    </div>
  );
}

export default useRefComponent;`;

export const useRefData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useRef</b> &#x2192; It can also be used when we want to keep the data
        persistent to the component even after component re-renders.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            By updating the ref value &#x2192; it does not trigger re-render
            cycle. &#x2192; <b>it gets reset only after componentWillUnmount</b>
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Can be used for &#x2192; timeout interval, pagination data etc.
          </span>
        ),
      },
    ],
  },
];

export const parentComponentCode = `import React, { useState, useCallback } from "react";

function ParentComponent(props) {
  const [count, setCount] = useState(0);
  const [numberArr, setNumberArr] = useState([]);

  const buttonClick = () => {
    setCount(count + 1);
  };

  const addNumber = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * (100 - 0 + 1)); //between 0 - 100
    setNumberArr.push(randomNumber);
  }, [numberArr]);

  return (
    <div>
      <ChildComponent data={numberArr} addNumber={addNumber} />
      <p>Count: {count}</p>
      <button onClick={buttonClick}>Increase Count</button>
    </div>
  );
}

export default ParentComponent;`;

export const childComponentCode = `import React, { memo } from "react"

function ChildComponent(props) {
  console.log("Child component render");

  return (
    <div>
      <h2>Numbers: </h2>
      {props?.data?.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
      <button onClick={props?.addNumber}>Add Number</button>
    </div>
  );
}

export default memo(ChildComponent);`;

export const useCallbackData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useCallback</b> &#x2192; It returns a memoized callback function.
        This hook only runs when any of its dependencies update.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            We use useCallback to prevent a component from re-rendering unless
            its props have changed.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>Below Code &#x2192;</b> whenever we click on button to inrease
            count,{" "}
            <b>
              the child component gets re-rendered even there are no change in
              numberArr state and addNumber function.
            </b>
          </span>
        ),
      },
      {
        id: 13,
        content: (
          <span>
            This is because of <b>referential equality</b> &#x2192; Every time a
            component re-renders, its function gets recreated.
          </span>
        ),
      },
      {
        id: 14,
        content: (
          <span>
            <b>useCallback Hook</b> prevent the function from getiing recreated
            unless necessary.
          </span>
        ),
      },
    ],
  },
];

export const useMemoCode = `import React, { useState, useCallback, useMemo } from "react";

function ParentComponent(props) {
  const [count, setCount] = useState(0);
  const [numberArr, setNumberArr] = useState([]);

  const buttonClick = () => {
    setCount(count + 1);
  };

  const addNumber = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * (100 - 0 + 1)); //between 0 - 100
    setNumberArr.push(randomNumber);
  }, [numberArr]);

  const calculation = useMemo(() => {
    console.log("calculation function executed");
    let num = count;
    for (let index = 0; index < 100000; index++) {
      num += 1;
    }
    return num;
  }, [count])

  return (
    <div>
      <ChildComponent data={numberArr} addNumber={addNumber} />
      <p>Count: {count}</p>
      <button onClick={buttonClick}>Increase Count</button>
      <h2>Expensive calculation result : {calculation}</h2>
    </div>
  );
}

export default ParentComponent;`;

export const useMemoData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useMemo</b> &#x2192; It returns a memoized value. &#x2192; It helps
        us to cache the result of a calculation between re-renders.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            This hook only runs when any of its dependency updates &#x2192;{" "}
            <b>it can improve performance</b>
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            It can be used for keep expensive, resource intensive function to
            prevent unnecessary execution even there are no change in its
            dependencies.
          </span>
        ),
      },
    ],
  },
];

export const createContextCode = `import React, { createContext } from "react";

const UserContext = createContext();

export default UserContext;`;

export const nestedComponentCode = `import React, { useState } from "react";
import UserContext from "./UserContext";
import Component4 from "./Component4";
 
const Component1 = () => {
  const [userData, setUserData] = useState({ name: "XYZ" });
  return (
    <UserContext.Provider value={userData}>
      <h2>Component1</h2>
      <Component2 userData={userData} />
    </UserContext.Provider>
  );
};

const Component2 = (props) => {
  return (
    <>
      <h2>Component2</h2>
      <Component3 />
    </>
  );
};

const Component3 = (props) => {
  return (
    <>
      <h2>Component3</h2>
      <Component4 />
    </>
  );
};

export default Component1;`;

export const useContextCode = `import React, { useContext } from "react";
import UserContext from "./UserContext";

const Component4 = (props) => {
  const userData = useContext(UserContext);
  return (
    <>
      <h2>Component4</h2>
      <p>Username : {userData?.name}</p>
    </>
  );
};

export default Component4;`;

export const useContextData = [
  {
    id: 1,
    mainContent: (
      <span>
        <b>useContext</b> &#x2192; This hook is used to share the data between
        nested components <b>without using props</b>. &#x2192; It avoids{" "}
        <b>prop drilling</b>.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            It allows to make the data avaialable through the component without
            being manually passed.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            <b>Below Code with prop drilling</b> &#x2192; Here comp2, comp3 doesn't need the data
            but also the data should be passed so that it could reach to comp4 via props.
          </span>
        ),
      },
    ],
  },
];
