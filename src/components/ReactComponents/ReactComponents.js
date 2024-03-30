import React from "react";
import Typography from "@mui/material/Typography";
import {
  functionalComponentCode,
  functionalComponentData,
} from "../LifeCycleMethods/functionalConfig";
import {
  classComponentCode,
  classComponentData,
} from "../LifeCycleMethods/classConfig";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";

function ReactComponents(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Functional Component
      </Typography>
      {renderContentListData(functionalComponentData)}
      <PreFormatComponent data={functionalComponentCode} />
      <Typography variant="button" className={classes.topHeading}>
        Class Component
      </Typography>
      {renderContentListData(classComponentData)}
      <PreFormatComponent data={classComponentCode} />
    </div>
  );
}

export default ReactComponents;
