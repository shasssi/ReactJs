import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  craData,
  craCode,
  bundlerseData,
  webpackeData,
  webpackCode,
  installationData,
  installCode,
  benefits,
} from "./bundlersConfig";

function ReactComponents(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Create React App
      </Typography>
      {renderContentListData(craData)}
      <PreFormatComponent data={craCode} />
      <Typography variant="button" className={classes.topHeading}>
        Bundlers
      </Typography>
      {renderContentListData(bundlerseData)}
      {renderContentListData(installationData)}
      <PreFormatComponent data={installCode} />
      {renderContentListData(webpackeData)}
      <PreFormatComponent data={webpackCode} />
      {renderContentListData(benefits)}
    </div>
  );
}

export default ReactComponents;
