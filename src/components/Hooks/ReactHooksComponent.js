import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  uncontrolledComponentCode,
  uncontrolledComponentData,
  hooksData,
  useRefData,
  useRefCode,
  useCallbackData,
  parentComponentCode,
  childComponentCode,
  useMemoData,
  useMemoCode,
  useContextData,
  createContextCode,
  nestedComponentCode,
  useContextCode,
} from "./reactHooksConfig";

function ReactHooksComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        React Hooks
      </Typography>
      {renderContentListData(hooksData)}
      {renderContentListData(uncontrolledComponentData)}
      <PreFormatComponent data={uncontrolledComponentCode} />
      {renderContentListData(useRefData)}
      <PreFormatComponent data={useRefCode} />
      <Typography variant="button" className={classes.topHeading}>
        Performance optimization
      </Typography>
      {renderContentListData(useCallbackData)}
      <PreFormatComponent data={parentComponentCode} />
      <PreFormatComponent data={childComponentCode} />
      <Typography variant="button" className={classes.topHeading}>
        Performance optimization
      </Typography>
      {renderContentListData(useMemoData)}
      <PreFormatComponent data={useMemoCode} />
      {renderContentListData(useContextData)}
      <PreFormatComponent data={createContextCode} />
      <PreFormatComponent data={nestedComponentCode} />
      <PreFormatComponent data={useContextCode} />
    </div>
  );
}

export default ReactHooksComponent;
