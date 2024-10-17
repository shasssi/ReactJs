import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App-Error-Boundary";

describe("LoginComponent", () => {
  it("render component", async () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("button");
    fireEvent.click(button);
  });
});
