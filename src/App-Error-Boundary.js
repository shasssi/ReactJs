import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("Component Error", error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}

const CompA = () => {
  return (
    <>
      <p>Component A</p>
      <button
        data-testid="button"
        onClick={() => {
          console.log("Button clicked");
          // throw Error("click error");
        }}
      >
        Error
      </button>
    </>
  );
};

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <CompA />
        <p>Hello</p>
      </ErrorBoundary>
    </>
  );
};

export default App;
