import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import CardComponent from "../../common/Card/CardComponent";
import useStyles from "./DashboardComponent.style";
import { updateScollPosition } from "../../redux/slice/scrollSlice";
import { fetchAllTopics } from "../../api/dashboard";

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
    const data = await fetchAllTopics();
    Array.isArray(data) && setTopicsData(data);
  };

  return (
    <Grid container className={classes.dashboardContainer}>
      {Array.isArray(topicsData) &&
        topicsData.map((topicObj) => (
          <Grid key={topicObj?._id} item className={classes.cardSize}>
            <CardComponent data={topicObj} />
          </Grid>
        ))}
    </Grid>
  );
};

export default DashboardComponet;
