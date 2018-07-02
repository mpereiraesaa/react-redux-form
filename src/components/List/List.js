import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col } from 'react-flexbox-grid';
import MDSpinner from "react-md-spinner";
import ListItem from "./ListItem";

const loading = () => (
  <div className="loading-container">
    <MDSpinner singleColor="#2c77c4" size={70} />
  </div>
);

const renderItems = (data) => {
  return data.map((event, index) => (
    <ListItem key={`item_${index}`} event={event} />
  ));
}

const List = (props) => (
  <Col xs={12} md={6} className="list-container">
    {!props.isLoading ? renderItems(props.data) : null}
    {props.isLoading ? loading() : null}
    {props.message ? <h1>{props.message}</h1> : null}
  </Col>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string
}

export default List;
