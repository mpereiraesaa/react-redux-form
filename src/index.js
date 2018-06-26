import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import AppContainer from "./containers/AppContainer/AppContainer";

ReactDOM.render(<AppContainer />, document.getElementById("root"));

module.hot.accept();
