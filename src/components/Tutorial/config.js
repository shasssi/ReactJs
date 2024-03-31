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
const ReactRouterComponent = lazy(() =>
  import(
    "../ReactRouter/ReactRouterComponenet" /* webpackChunkName: "ReactRouterComponent" */
  )
);

export const componentsConfig = {
  lifeCycle: LifeCycleMethodsComponent,
  components: ReactComponents,
  router: ReactRouterComponent,
};
