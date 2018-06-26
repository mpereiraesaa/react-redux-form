import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col } from 'react-flexbox-grid';

class Form extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>Register your event data</h2>
        <h5>Just grab the required data.</h5>
        <form className="form">
          <div className="form-group">
            <label>First name</label>
            <input className="form-control" type="text" name="first_name" />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input className="form-control" type="text" name="last_name" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input className="form-control" type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Event date</label>
            <input className="form-control" type="date" name="event_date" />
          </div>
          <button className="btn btn-success">
            SUBMIT
          </button>
        </form>
      </Col>
    );
  }
}

export default Form;
