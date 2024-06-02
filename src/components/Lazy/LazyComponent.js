import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  lazyLoadinData,
  lazyLoadinCode,
  suspenseData,
} from "./lazyLoadingConfig";

function LazyComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Lazy Loading - On Demand Loading
      </Typography>
      {renderContentListData(lazyLoadinData)}
      {renderContentListData(suspenseData)}
      <PreFormatComponent data={lazyLoadinCode} />
    </div>
  );
}

export default LazyComponent;
