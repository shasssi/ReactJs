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
  import("../Lazy/LazyComponent" /* webpackChunkName: "lazyComponent" */)
);
const BundlersComponent = lazy(() =>
  import(
    "../Bundlers/BundleComponent" /* webpackChunkName: "bundleComponent" */
  )
);
const ReactHooksComponent = lazy(() =>
  import(
    "../Hooks/ReactHooksComponent" /* webpackChunkName: "hooksComponent" */
  )
);
const MiscellaneousComponent = lazy(() =>
  import(
    "../Miscellaneous/MiscellaneousComponent" /* webpackChunkName: "miscellaneousComponent" */
  )
);
const ReduxComponent = lazy(() =>
  import("../Redux/ReduxComponent" /* webpackChunkName: "reduxComponent" */)
);

export const componentsConfig = {
  lifeCycle: LifeCycleMethodsComponent,
  components: ReactComponents,
  router: ReactRouterComponent,
  jsx: ReactElementComponent,
  lazy: LazyComponent,
  bundlers: BundlersComponent,
  hooks: ReactHooksComponent,
  miscellaneous: MiscellaneousComponent,
  redux: ReduxComponent,
};
