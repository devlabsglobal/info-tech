import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/js/bootstrap.min";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
