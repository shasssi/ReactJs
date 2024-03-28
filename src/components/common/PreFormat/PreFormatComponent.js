import React from "react";
import useStyles from "./PreformatComponent.style";

function PreFormatComponent(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.preFormatContainer}>
      <pre>
        <code>{data}</code>
      </pre>
    </div>
  );
}

export default PreFormatComponent;
