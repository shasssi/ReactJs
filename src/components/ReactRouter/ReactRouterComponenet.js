import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  routerContentData,
  reactRouterDomCode,
  parentComponentBindingData,
  parentComponentCode,
  componentNavigationData,
  navigationComponentCode,
  useLocationHooksData,
  useLocationHooksCode,
} from "./reactRouterConfig";

function ReactRouterComponenet(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        React Router
      </Typography>
      {renderContentListData(routerContentData)}
      <PreFormatComponent data={reactRouterDomCode} />
      {renderContentListData(parentComponentBindingData)}
      <PreFormatComponent data={parentComponentCode} />
      {renderContentListData(componentNavigationData)}
      <PreFormatComponent data={navigationComponentCode} />
      {renderContentListData(useLocationHooksData)}
      <PreFormatComponent data={useLocationHooksCode} />
    </div>
  );
}

export default ReactRouterComponenet;
