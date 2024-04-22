import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Logout from "@mui/icons-material/Logout";
import useStyles from "./HeaderComponent.styles";
import dialogModalHOC from "../common/HOC/openDialogModal";
import { LOGOUT_CONTENT_TEXT, LOGOUT_HEADER_TEXT } from "../constant";

function HeaderComponent(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { openDialogModal } = props;

  const handleLogout = () => {
    openDialogModal({
      open: true,
      header: LOGOUT_HEADER_TEXT,
      content: LOGOUT_CONTENT_TEXT,
    });
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContent}>
        <Typography className={classes.menuItem} onClick={() => navigate("/")}>
          <Home className={classes.menuIcon} />
        </Typography>
        <Typography className={classes.menuItem} onClick={() => navigate("/")}>
          <ArrowBack className={classes.menuIcon} />
        </Typography>
      </div>
      <Logout className={classes.menuIcon} onClick={handleLogout} />
    </div>
  );
}

export default dialogModalHOC(HeaderComponent);
