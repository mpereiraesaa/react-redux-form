import React from "react";
import PropTypes from "prop-types";

const Error = (props) => (
  <span className="error">
    <i className="fa fa-warning" />
    {props.children}
  </span>
);

export default Error;
