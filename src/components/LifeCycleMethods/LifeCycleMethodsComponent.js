import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import PreFormatComponent from "../common/PreFormat/PreFormatComponent";
import {
  functionalComponent,
  functionalComponentData,
} from "./functionalConfig";
import { classComponent, classComponentData } from "./classConfig";
import ContentComponent from "../common/Content/ContentComponent";
import useStyles from "./LifeCycleMethods.style";

function LifeCycleMethodsComponent(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="button" className={classes.topHeading}>
        Functional Component Lifecycle Methods
      </Typography>
      {Array.isArray(functionalComponentData) &&
        functionalComponentData.map((content) => {
          return (
            <Fragment>
              <ContentComponent
                key={content?.id}
                variant="body2"
                type={content?.mainContent ? "heading" : "lineBreak"}
                data={content?.mainContent}
              />
              {Array.isArray(content?.subContent) &&
                content?.subContent.map((value) => (
                  <ContentComponent
                    key={value?.id}
                    variant="body2"
                    type="subHeading"
                    data={value?.content}
                  />
                ))}
            </Fragment>
          );
        })}
      <PreFormatComponent data={functionalComponent} />
      <Typography variant="button" className={classes.topHeading}>
        Class Component Lifecycle Methods
      </Typography>
      {Array.isArray(classComponentData) &&
        classComponentData.map((content) => {
          return (
            <Fragment>
              <ContentComponent
                key={content?.id}
                variant="body2"
                type={content?.mainContent ? "heading" : "lineBreak"}
                data={content?.mainContent}
              />
              {Array.isArray(content?.subContent) &&
                content?.subContent.map((value) => (
                  <ContentComponent
                    key={value?.id}
                    variant="body2"
                    type="subHeading"
                    data={value?.content}
                  />
                ))}
            </Fragment>
          );
        })}
      <PreFormatComponent data={classComponent} />
    </div>
  );
}

export default LifeCycleMethodsComponent;
