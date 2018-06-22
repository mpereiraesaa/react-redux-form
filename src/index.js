import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";

const title = "Surprise! x2";

ReactDOM.render(<div>{title}</div>, document.getElementById("root"));

module.hot.accept();
