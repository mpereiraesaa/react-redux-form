import React, { Component } from "react";
import PropTypes from "prop-types";

const ListItem = (props) => (
  <div className="card">
    <div className="overlay" />
    <div className="card__header">
      <h3>EVENT</h3>
    </div>
    <div className="card__body">
      <p>{props.event.first_name + " " + props.event.last_name}</p>
      <p>{props.event.event_date}</p>
    </div>
  </div>
);

ListItem.propTypes = {
  event: PropTypes.object
}

export default ListItem;
