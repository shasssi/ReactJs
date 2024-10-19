import React from "react";
import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
import { Provider } from "react-redux";
import { mockStore } from "../../../__mocks__/mockStore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const mockTheme = createTheme({});

const mockState = {
  auth: {},
  navigation: {},
  scroll: {},
};

describe("LoginComponent", () => {
  it("render component", () => {
    const {} = render(
      <Provider store={mockStore(mockState)}>
        <ThemeProvider theme={mockTheme}>
          <BrowserRouter>
            <LoginComponent />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  });
});
