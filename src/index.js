import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/reset.scss";
import "./stylesheets/mixins.scss";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
