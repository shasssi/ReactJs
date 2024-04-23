import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStyles from "./bookmark.style";
import CardMedia from "@mui/material/CardMedia";

export default function BookmarkComponent({ setOpenDrawer }) {
  const bookMarkList = useSelector((store) => store?.navigation);
  const navigate = useNavigate();
  const bookMarkRef = useRef();
  const classes = useStyles();
  const isBookmarkData = bookMarkList?.length !== 0;

  useEffect(() => {
    // Fn called if clicked on outside of element
    function handleClickOutside(event) {
      if (bookMarkRef.current && !bookMarkRef.current.contains(event.target)) {
        setOpenDrawer(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [bookMarkRef]);

  const handleImgClick = (data) => {
    navigate(`/react/${data?.page}`);
    setOpenDrawer(false);
  };

  return (
    <div className={classes.container} ref={bookMarkRef}>
      {isBookmarkData &&
        bookMarkList?.map((obj) => (
          <CardMedia
            key={obj?.id}
            className={classes.image}
            image={`../../assets/images/${obj?.image}`}
            onClick={() => handleImgClick(obj)}
          />
        ))}
      {!isBookmarkData && (
        <p className={classes.noContent}>No content visited</p>
      )}
    </div>
  );
}
