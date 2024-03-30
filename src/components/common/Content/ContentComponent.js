import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "./ContentComponent.style";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ContentComponent(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { variant, type, data, route, linkText } = props;
  const customClass = type ? classes[type] : "";
  const componentProps = {
    ...(variant ? { variant } : {}),
    ...(customClass ? { className: customClass } : {}),
  };
  return (
    <Typography {...componentProps}>
      {data}
      {route && linkText && (
        <Button className={classes.linkButton} variant="outlined" onClick={() => navigate(route)}>
          {linkText}
        </Button>
      )}
    </Typography>
  );
}

export default ContentComponent;
