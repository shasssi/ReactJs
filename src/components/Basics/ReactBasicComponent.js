import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import contentStyles from "../common/Content/ContentComponent.style";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  oldReconciler,
  jsxCode,
  stackReconciler,
  fiberReconciler,
} from "./reactBasicConfig";

function ReactBasicComponent(props) {
  const classes = useStyles();
  const contentClasses = contentStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        React Basics
      </Typography>
      {renderContentListData(oldReconciler)}
      <PreFormatComponent data={jsxCode} />
      {renderContentListData(stackReconciler)}
      {renderContentListData(fiberReconciler)}
      <Typography variant="body2" className={contentClasses.heading}>
        More on React Fiber -{" "}
        <a
          href="https://github.com/acdlite/react-fiber-architecture"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/acdlite/react-fiber-architecture
        </a>
      </Typography>
    </div>
  );
}

export default ReactBasicComponent;
