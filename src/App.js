import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import HeaderComponent from "./components/Header/HeaderComponent";
import { Outlet } from "react-router-dom";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
