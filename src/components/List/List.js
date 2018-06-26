import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col } from 'react-flexbox-grid';

const List = (props) => (
  <Col xs={12} md={6} className="list-container">
    {props.renderItems()}
  </Col>
);

List.propTypes = {
  renderItems: PropTypes.func.isRequired
}

export default List;
