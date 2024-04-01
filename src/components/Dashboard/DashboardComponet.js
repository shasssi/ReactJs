import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "../common/Card/CardComponent";
import useStyles from "./DashboardComponent.style";

const DashboardComponet = () => {
  const classes = useStyles();
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    loadTopicsData();
  }, []);

  const loadTopicsData = async () => {
    const data = await import("../../assets/data/topics.json");
    setTopicsData(data?.default);
  };

  return (
    <Grid container className={classes.dashboardContainer}>
      {Array.isArray(topicsData) &&
        topicsData.map((topicObj) => (
          <Grid item className={classes.cardSize}>
            <CardComponent key={topicObj?.id} data={topicObj} />
          </Grid>
        ))}
    </Grid>
  );
};

export default DashboardComponet;
