import React from "react";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import HeaderComponent from './components/Header/HeaderComponent';
import { Outlet } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
