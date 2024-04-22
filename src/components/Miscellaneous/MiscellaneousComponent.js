import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "../LifeCycleMethods/LifeCycleMethods.style";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";
import { renderContentListData } from "../utilityComponent";
import {
  hocData,
  hocCode,
  componentCode,
  memoData,
} from "./miscellaneousConfig";
import { childComponentCode, parentComponentCode } from "../Hooks/reactHooksConfig";

function MiscellaneousComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Higher Order Component
      </Typography>
      {renderContentListData(hocData)}
      <PreFormatComponent data={componentCode} />
      <PreFormatComponent data={hocCode} />
      <Typography variant="button" className={classes.topHeading}>
        React Memo
      </Typography>
      {renderContentListData(memoData)}
      <PreFormatComponent data={parentComponentCode} />
      <PreFormatComponent data={childComponentCode} />
    </div>
  );
}

export default MiscellaneousComponent;
