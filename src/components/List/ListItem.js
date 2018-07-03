import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ListItem = (props) => (
  <div className="card">
    <div className="overlay" />
    <div className="card__header">
      <h3>EVENT</h3>
    </div>
    <div className="card__body">
      <p>{props.event.first_name + " " + props.event.last_name}</p>
      <p>{moment(props.event.event_date).format("YYYY-MM-DD HH:mm")}</p>
    </div>
  </div>
);

ListItem.propTypes = {
  event: PropTypes.object
}

export default ListItem;
