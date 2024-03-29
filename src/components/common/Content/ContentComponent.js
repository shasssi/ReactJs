import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "./ContentComponent.style";

function ContentComponent(props) {
  const classes = useStyles();
  const { variant, type, data } = props;
  const customClass = type ? classes[type] : "";
  const componentProps = {
    ...(variant ? { variant } : {}),
    ...(customClass ? { className: customClass } : {}),
  };
  return (
    <Typography {...componentProps}>
      {data}
    </Typography>
  );
}

export default ContentComponent;
