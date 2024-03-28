import { lazy } from "react";

const LifeCycleMethodsComponent = lazy(() =>
  import(
    "../LifeCycleMethods/LifeCycleMethodsComponent" /* webpackChunkName: "lifeCycleMethodsComponent" */
  )
);

export const componentsConfig = {
  lifeCycleMethods: LifeCycleMethodsComponent,
};
