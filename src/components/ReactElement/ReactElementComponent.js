import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  reactElementCode,
  routerElementData,
  jsxData,
  jsxCode,
  jsxBabelData,
  jsxBabelCode,
} from "./reactElementConfig";

function ReactElementComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        React Element
      </Typography>
      {renderContentListData(routerElementData)}
      <PreFormatComponent data={reactElementCode} />
      {renderContentListData(jsxData)}
      <PreFormatComponent data={jsxCode} />
      {renderContentListData(jsxBabelData)}
      <PreFormatComponent data={jsxBabelCode} />
    </div>
  );
}

export default ReactElementComponent;
