import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Logout from "@mui/icons-material/Logout";
import Bookmark from "@mui/icons-material/Bookmark";
import useStyles from "./HeaderComponent.styles";
import dialogModalHOC from "../common/HOC/openDialogModal";
import { LOGOUT_CONTENT_TEXT, LOGOUT_HEADER_TEXT } from "../constant";
import BookmarkComponent from "../Bookmark/BookmarkComponent";

function HeaderComponent(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
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

  const openBookMarkDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
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
      <div className={classes.headerContent}>
        <Bookmark
          className={`${classes.menuItem} ${classes.menuIcon}`}
          onClick={openBookMarkDrawer}
        />
        <Logout className={classes.menuIcon} onClick={handleLogout} />
      </div>
      {openDrawer && <BookmarkComponent setOpenDrawer={setOpenDrawer} />}
    </div>
  );
}

export default memo(dialogModalHOC(HeaderComponent));
