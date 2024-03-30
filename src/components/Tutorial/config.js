import { lazy } from "react";

const LifeCycleMethodsComponent = lazy(() =>
  import(
    "../LifeCycleMethods/LifeCycleMethodsComponent" /* webpackChunkName: "lifeCycleMethodsComponent" */
  )
);
const ReactComponents = lazy(() =>
  import(
    "../ReactComponents/ReactComponents" /* webpackChunkName: "ReactComponents" */
  )
);

export const componentsConfig = {
  lifeCycleMethods: LifeCycleMethodsComponent,
  components: ReactComponents,
};
