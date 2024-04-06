import { lazy } from "react";

const LifeCycleMethodsComponent = lazy(() =>
  import(
    "../LifeCycleMethods/LifeCycleMethodsComponent" /* webpackChunkName: "lifeCycleMethodsComponent" */
  )
);
const ReactComponents = lazy(() =>
  import(
    "../ReactComponents/ReactComponents" /* webpackChunkName: "reactComponents" */
  )
);
const ReactRouterComponent = lazy(() =>
  import(
    "../ReactRouter/ReactRouterComponenet" /* webpackChunkName: "reactRouterComponent" */
  )
);
const ReactElementComponent = lazy(() =>
  import(
    "../ReactElement/ReactElementComponent" /* webpackChunkName: "reactElementComponent" */
  )
);
const LazyComponent = lazy(() =>
  import(
    "../Lazy/LazyComponent" /* webpackChunkName: "lazyComponent" */
  )
);

export const componentsConfig = {
  lifeCycle: LifeCycleMethodsComponent,
  components: ReactComponents,
  router: ReactRouterComponent,
  jsx: ReactElementComponent,
  lazy: LazyComponent,
};
