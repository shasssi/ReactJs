import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";
import {
  functionalComponent,
  functionalComponentData,
} from "./functionalConfig";
import { classComponent, classComponentData } from "./classConfig";
import ContentComponent from "../common/Content/ContentComponent";
import useStyles from "./LifeCycleMethods.style";
import LifeCycleImage from "../../assets/images/lifecycle-diagram.png";

function LifeCycleMethodsComponent(props) {
  const classes = useStyles();

  const renderContentComponent = (configData, isChild = false) => {
    let type = configData?.mainContent ? "heading" : "lineBreak";
    let data = isChild ? configData?.content : configData?.mainContent;
    if (isChild) {
      type = "subHeading";
    }
    return (
      <Fragment key={configData?.id}>
        <ContentComponent variant="body2" type={type} data={data} />
        {configData?.subContent &&
          renderContentListData(configData?.subContent, true)}
      </Fragment>
    );
  };

  const renderContentListData = (data, isChild = false) => {
    return (
      Array.isArray(data) &&
      data.map((mainContent) => renderContentComponent(mainContent, isChild))
    );
  };

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Functional Component Lifecycle Methods
      </Typography>
      {renderContentListData(functionalComponentData)}
      <PreFormatComponent data={functionalComponent} />
      <Typography variant="button" className={classes.topHeading}>
        Class Component Lifecycle Methods
      </Typography>
      {renderContentListData(classComponentData)}
      <PreFormatComponent data={classComponent} />
      <Typography variant="button" className={classes.topHeading}>
        React Lifecycle Flow
      </Typography>
      <ContentComponent variant="body2" type={"lineBreak"} />
      <div className={classes.image}>
        <img src={LifeCycleImage} alt="lifecyle" />
      </div>
    </div>
  );
}

export default LifeCycleMethodsComponent;
