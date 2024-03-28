import React from "react";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";

function LifeCycleMethodsComponent(props) {
  const test = `
  body {
    color: yellow;
    font-size: 16px;
    line-height: 1.5;
  }`;

  return (
    <div>
      <PreFormatComponent data={test}/>
    </div>
  );
}

export default LifeCycleMethodsComponent;
