import React from "react";
import Typography from "@mui/material/Typography";
import PreFormatComponent from "../../common/PreFormat/PreFormatComponent";
import {
  functionalComponentCode,
  functionalComponentLifeCycleData,
} from "./functionalConfig";
import { classComponentCode, classComponentLifeCycleData } from "./classConfig";
import ContentComponent from "../../common/Content/ContentComponent";
import useStyles from "./LifeCycleMethods.style";
import LifeCycleImage from "../../assets/images/lifecycle-diagram.png";
import { renderContentListData } from "../utilityComponent";

function LifeCycleMethodsComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Functional Component Lifecycle Methods
      </Typography>
      {renderContentListData(functionalComponentLifeCycleData)}
      <PreFormatComponent data={functionalComponentCode} />
      <Typography variant="button" className={classes.topHeading}>
        Class Component Lifecycle Methods
      </Typography>
      {renderContentListData(classComponentLifeCycleData)}
      <PreFormatComponent data={classComponentCode} />
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
