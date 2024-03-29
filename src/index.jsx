import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ItemsProvider } from "./context/items.context";

import App from "./App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  // document.getElementById("root") as HTMLElement
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
