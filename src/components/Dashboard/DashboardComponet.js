import React, { useEffect, useState } from "react";
import CardComponent from "../common/Card/CardComponent";
import useStyles from "./DashboardComponent.style";

const DashboardComponet = () => {
  const classes = useStyles();
  const [topicsData, setTopicsData] = useState([]);
  console.log("topicsData", topicsData);

  useEffect(() => {
    loadTopicsData();
  }, []);

  const loadTopicsData = async () => {
    const data = await import("../../../public/data/topics.json");
    setTopicsData(data?.default);
  };

  return (
    <div className={classes.dashboardContainer}>
      {topicsData &&
        topicsData.map((topicObj) => (
          <CardComponent key={topicObj?.id} data={topicObj} />
        ))}
    </div>
  );
};

export default DashboardComponet;
