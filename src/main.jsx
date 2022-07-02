import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  //* store ke provide krte hobe
  //* provider prop hisebe store accept kore
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
