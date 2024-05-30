import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupAPIInterceptors } from "./api/interceptor";

const root = ReactDOM.createRoot(document.getElementById("root"));

setupAPIInterceptors();

root.render(<App />);
