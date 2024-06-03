import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  reduxDefData,
  toolkitData,
  storeCode,
  sliceCode,
  storeHeading,
  sliceHeading,
  useSelectorCode,
  useSelectorHeading,
  benefits,
} from "./reduxConfig";
import ReduxArchitecture from "../../assets/images/redux_architecture.jpeg";

function ReduxComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Redux
      </Typography>
      {renderContentListData(reduxDefData)}
      <div>
        <img
          className={classes.reduxImage}
          src={ReduxArchitecture}
          alt="redux-architecture"
        />
      </div>
      {renderContentListData(toolkitData)}
      {renderContentListData(storeHeading)}
      <PreFormatComponent data={storeCode} />
      {renderContentListData(sliceHeading)}
      <PreFormatComponent data={sliceCode} />
      {renderContentListData(useSelectorHeading)}
      <PreFormatComponent data={useSelectorCode} />
      {renderContentListData(benefits)}
    </div>
  );
}

export default ReduxComponent;
