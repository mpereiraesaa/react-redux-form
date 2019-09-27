import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col } from 'react-flexbox-grid';
import MDSpinner from "react-md-spinner";
import Error from "../Miscellaneous/Error";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Field = ({ name, type, value, onChange, onBlur, errors }) => (
    <div className="form-group">
      <label>{name}</label>
      <input
          className="form-control"
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
      />
      {errors[name] && <Error>{errors[name]}</Error>}
    </div>
);

Field.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
}

const Form = ({ errors, formList, message, isProcessing, onSubmit, onChange, onBlur }) => (
      <Col xs={12} md={6}>
        <h2>Register your event data</h2>
        <h5>Just grab the required data.</h5>
        <form className="form">
            {formList.map((field, index) => (
                <Field key={field.name} {...field} onChange={onChange} onBlur={onBlur} errors={errors} />
            ))}
        <button disabled={isProcessing} className="btn btn-success" onClick={onSubmit}>
            {isProcessing && <MDSpinner className="btn__loading" size={18} singleColor="#fff" />}
            SUBMIT
        </button>
        {message &&
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={100}
              transitionLeaveTimeout={500}
              transitionEnter={true}
              transitionLeave={true}>
              <div className="alert alert-info">
                <strong>Info!</strong> {this.props.message}
              </div>
            </ReactCSSTransitionGroup>}
        </form>
      </Col>
);

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
  isProcessing: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  formList: PropTypes.arrayOf(PropTypes.shape(
      { name: PropTypes.string.isRequired, type: PropTypes.string.isRequired, type: PropTypes.string.isRequired }))
};

export default Form;
