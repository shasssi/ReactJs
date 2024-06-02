import React, { lazy, Suspense } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashboardComponet from "./components/Dashboard/DashboardComponet";
import SkeletonComponent from "./common/Skeleton/SkeletonComponent";
import PrivateRoute from "./PrivateRoute";
import appStore from "./redux/store";
import LoginComponent from "./components/Login/LoginComponent";

const theme = createTheme({
  typography: {
    fontFamily: "'OpenSans', Arial, sans-serif",
    fontFamilyBold: "'OpenSans-Bold', Arial, sans-serif",
    fontFamilyRegular: "'OpenSans-Bold', Arial, sans-serif",
    body2: {
      letterSpacing: "normal",
      lineHeight: 20 / 14,
    },
    button: {
      lineHeight: 28 / 18,
    },
  },
});

const TutorialComponent = lazy(() =>
  import(
    "../src/components/Tutorial/TutorialComponent" /* webpackChunkName: "tutorialComponent" */
  )
);

function App() {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<DashboardComponet />} />
              <Route
                path="/react/:topics"
                element={
                  <Suspense fallback={<SkeletonComponent />}>
                    <TutorialComponent />
                  </Suspense>
                }
              />
              <Route path="/testroute" element={<SkeletonComponent />} />
            </Route>
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
