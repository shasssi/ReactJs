import React from "react";

export const classComponent = `import React from "react";

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

export const classComponentData = [
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
        id: 1,
        content: (
          <span>
            Mount &#x2192; constructor() &#x2192; getDerivedStateFromProps()
            &#x2192; render() &#x2192; componentDidMount()
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <span>
            Update &#x2192; getDerivedStateFromProps() &#x2192; shouldComponentUpdate()
            &#x2192; render() &#x2192; getSnapshotBeforeUpdate() &#x2192; componentDidUpdate()
          </span>
        ),
      },
      {
        id: 3,
        content: (
          <span>
            Mount &#x2192; componentWillUnmount()
          </span>
        ),
      },
    ],
  },
];
