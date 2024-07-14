import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Logout from "@mui/icons-material/Logout";
import Bookmark from "@mui/icons-material/Bookmark";
import useStyles from "./HeaderComponent.styles";
import dialogModalHOC from "../../common/HOC/openDialogModal";
import { LOGOUT_CONTENT_TEXT, LOGOUT_HEADER_TEXT } from "../constant";
import BookmarkComponent from "../Bookmark/BookmarkComponent";
import { resetScollPosition } from "../../redux/slice/scrollSlice";
import { logout } from "../../redux/slice/user";

function HeaderComponent(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector((store) => store?.auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { openDialogModal, closeDialogModal } = props;
  const profileImg = auth?.user?.profileImg;

  const handleLogout = () => {
    openDialogModal({
      open: true,
      header: LOGOUT_HEADER_TEXT,
      content: LOGOUT_CONTENT_TEXT,
      handleConfirm: () => {
        dispatch(logout());
        closeDialogModal();
        navigate("/login");
      },
    });
  };

  const openBookMarkDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };

  const handleHomeBtnFn = () => {
    navigate("/");
    window.scroll(0, 0);
    dispatch(resetScollPosition());
  };

  const handleBackArrowFn = () => {
    navigate("/");
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContent}>
        <Typography className={classes.menuItem} onClick={handleHomeBtnFn}>
          <Home className={classes.menuIcon} />
        </Typography>
        <Typography className={classes.menuItem} onClick={handleBackArrowFn}>
          <ArrowBack className={classes.menuIcon} />
        </Typography>
      </div>
      <div className={classes.headerContent}>
        <Avatar
          alt="User Profile"
          className={classes.menuItem}
          src={process.env.API_BASE_URL + profileImg}
        />
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
