import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { componentsConfig } from "./config";
import useStyles from "./TutorialCompnent.style";

const TutorialComponent = () => {
  const classes = useStyles();
  const routeParams = useParams();

  const componentName = componentsConfig[routeParams?.topics];
  const TopicsComponent = componentName ? componentName : Fragment;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={classes.topicContainer}>
      <TopicsComponent />
    </div>
  );
};

export default TutorialComponent;
