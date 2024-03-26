import React from "react";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import HeaderComponent from './components/Header/HeaderComponent';
import DashboardComponent from './components/Dashboard/DashboardComponet';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <DashboardComponent />
    </ThemeProvider>
  );
}

export default App;
