import React from "react";

export const classComponentCode = `import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countValue: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    return { countValue: props.currentCount };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ countValue: 1 });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "Before the update, the count value was " + prevState.countValue
    );
  }

  componentDidUpdate() {
    console.log("The updated count value is " + this.state.countValue);
  }

  componentWillUnmount() {
    alert("The component is unmounted.");
  }

  increaseCount = () => {
    this.setState({ countValue: countValue + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count Value - {this.state.countValue}</h1>
        <button type="button" onClick={this.increaseCount}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default ClassComponent;`;

export const classComponentLifeCycleData = [
  {
    id: 1,
    mainContent: (
      <span>
        Class component in React has built-in lifecycle methods. Every component
        have 3 lifecycle methods (Mount, Update, Unmount).
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            Mount &#x2192; constructor() &#x2192; getDerivedStateFromProps()
            &#x2192; render() &#x2192; componentDidMount()
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>
            Update &#x2192; getDerivedStateFromProps() &#x2192;
            shouldComponentUpdate() &#x2192; render() &#x2192;
            getSnapshotBeforeUpdate() &#x2192; componentDidUpdate()
          </span>
        ),
      },
      {
        id: 13,
        content: <span>Unmount &#x2192; componentWillUnmount()</span>,
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
            <b>getDerivedStateFromProps</b> &#x2192; It is called right before
            rendering of the component. &#x25CF; This is the place to set state
            object based on intitial props. &#x25CF; It returns an object with
            changes to the state.
          </span>
        ),
      },
      {
        id: 22,
        content: (
          <span>
            <b>shouldComponentUpdate</b> &#x2192; This returns a boolean which
            tells React whether to re-render the component or not. &#x25CF; The
            default value is true.
          </span>
        ),
      },
      {
        id: 23,
        content: (
          <span>
            <b>getSnapshotBeforeUpdate</b> &#x2192; Here we have the access to
            the props & state before the update. &#x25CF; we can check what
            values were there brfore the update. &#x25CF; we should include
            componentDidUpdate if we use getSnapshotBeforeUpdate, else it will
            give error.
          </span>
        ),
      },
      {
        id: 24,
        content: (
          <span>
            <b>componentDidUpdate</b> &#x2192; This methods gets called after
            the component gets re-rendered and updated in the DOM. &#x2192; we
            should not do setState inside this or else it will go into infite
            re-render cycle.
          </span>
        ),
      },
    ],
  },
];

export const classComponentData = [
  {
    id: 1,
    mainContent: (
      <span>
        Class component &#x2192; It is a normal class that extends{" "}
        <b>React.Component </b>that has a <b>render()</b> method which returns a
        JSX.
      </span>
    ),
    subContent: [
      {
        id: 11,
        content: (
          <span>
            &#x25CF; It is also known as <b>Stateful components</b> &#x2192;
            Constructor is used as it needs to store state. It can manage and
            store their internal state.
          </span>
        ),
      },
      {
        id: 12,
        content: (
          <span>&#x25CF; It have built-in react lifeCycleMethods. </span>
        ),
        route: "/react/lifeCycleMethods",
        linkText: "Check React Lifecycle",
      },
    ],
  },
];
