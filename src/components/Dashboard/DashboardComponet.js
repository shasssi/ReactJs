import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import CardComponent from "../common/Card/CardComponent";
import useStyles from "./DashboardComponent.style";
import { updateScollPosition } from "../../redux/slice/scrollSlice";

const DashboardComponet = () => {
  const classes = useStyles();
  const [topicsData, setTopicsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadTopicsData();
    window.addEventListener("scroll", scrollFn);
    return () => {
      window.removeEventListener("scroll", scrollFn);
    };
  }, []);

  const scrollFn = () => {
    dispatch(
      updateScollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    );
  };

  const loadTopicsData = async () => {
    const data = await import("../../assets/data/topics.json");
    setTopicsData(data?.default);
  };

  return (
    <Grid container className={classes.dashboardContainer}>
      {Array.isArray(topicsData) &&
        topicsData.map((topicObj) => (
          <Grid key={topicObj?.id} item className={classes.cardSize}>
            <CardComponent data={topicObj} />
          </Grid>
        ))}
    </Grid>
  );
};

export default DashboardComponet;
