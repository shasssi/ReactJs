import React from "react";
import Typography from "@mui/material/Typography";
import Logout from "@mui/icons-material/Logout";
import useStyles from "./HeaderComponent.styles";

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContent}>
        <Typography className={classes.menuItem}>Contact</Typography>
        <Typography>Profile</Typography>
      </div>
      <Logout fontSize="small" />
    </div>
  );
}
