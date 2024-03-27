import React from "react";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Logout from "@mui/icons-material/Logout";
import useStyles from "./HeaderComponent.styles";

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContent}>
        <Typography className={classes.menuItem}>
          <Home className={classes.menuIcon} />
        </Typography>
        <Typography>
          <ArrowBack className={classes.menuIcon} />
        </Typography>
      </div>
      <Logout className={classes.menuIcon} />
    </div>
  );
}
