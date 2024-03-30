import React, { Fragment } from "react";
import ContentComponent from "./common/Content/ContentComponent";

export const renderContentComponent = (configData, isChild = false) => {
  const {
    id,
    mainContent,
    content,
    subContent,
    route = "",
    linkText = "",
  } = configData;
  let type = mainContent ? "heading" : "lineBreak";
  let data = isChild ? content : mainContent;
  if (isChild) {
    type = "subHeading";
  }
  return (
    <Fragment key={id}>
      <ContentComponent
        variant="body2"
        type={type}
        data={data}
        route={route}
        linkText={linkText}
      />
      {subContent && renderContentListData(subContent, true)}
    </Fragment>
  );
};

export const renderContentListData = (data, isChild = false) => {
  return (
    Array.isArray(data) &&
    data.map((mainContent) => renderContentComponent(mainContent, isChild))
  );
};
