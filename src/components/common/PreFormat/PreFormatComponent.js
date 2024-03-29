import React from "react";
import useStyles from "./PreformatComponent.style";
import Highlight from "react-highlight";

function PreFormatComponent(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div >
      <Highlight className={classes.preFormatContainer} language="javascript">
        {data}
      </Highlight>
    </div>
  );
}

export default PreFormatComponent;
