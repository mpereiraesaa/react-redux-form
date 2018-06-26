import React, { Component } from "react";
import PropTypes from "prop-types";

const ListItem = (props) => (
  <div className="card">
    <div className="overlay" />
    <div className="card__header">
      <h3>EVENT</h3>
    </div>
    <div className="card__body">
      <p>first_name last_name</p>
      <p>event_date</p>
    </div>
  </div>
);

ListItem.propTypes = {
  data: PropTypes.object
}

export default ListItem;
