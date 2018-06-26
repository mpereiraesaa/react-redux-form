import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col } from 'react-flexbox-grid';
import MDSpinner from "react-md-spinner";
import Error from "../Miscellaneous/Error";

class Form extends Component {
  static propTypes = {
    getInput: PropTypes.func.isRequired,
    onFocusOut: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    message: PropTypes.string,
    formRef: PropTypes.object,
    errors: PropTypes.object
  }

  render() {
    const { errors } = this.props;

    return (
      <Col xs={12} md={6}>
        <h2>Register your event data</h2>
        <h5>Just grab the required data.</h5>
        <form ref={this.props.formRef} className="form">
          <div className="form-group">
            <label>First name</label>
            <input className="form-control" type="text" name="first_name" onChange={this.props.getInput} onBlur={this.props.onFocusOut}/>
            {errors.first_name
              ?
              <Error>{errors.first_name}</Error>
              :
              null
            }
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input className="form-control" type="text" name="last_name" onChange={this.props.getInput} onBlur={this.props.onFocusOut}/>
            {errors.last_name
              ?
              <Error>{errors.last_name}</Error>
              :
              null
            }
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input className="form-control" type="email" name="email" onChange={this.props.getInput} onBlur={this.props.onFocusOut}/>
            {errors.email
              ?
              <Error>{errors.email}</Error>
              :
              null
            }
          </div>
          <div className="form-group">
            <label>Event date</label>
            <input className="form-control" type="date" name="event_date" onChange={this.props.getInput} onBlur={this.props.onFocusOut}/>
            {errors.event_date
              ?
              <Error>{errors.event_date}</Error>
              :
              null
            }
          </div>
          <button disabled={this.props.isProcessing} className="btn btn-success" onClick={this.props.onSubmit}>
            {this.props.isProcessing
              ?
              <MDSpinner className="btn__loading" size={18} singleColor="#fff" />
              :
              null
            }
            SUBMIT
          </button>
          {this.props.message
            ?
            <div className="alert alert-info">
              <strong>Info!</strong> {this.props.message}
            </div>
            :
            null
          }
        </form>
      </Col>
    );
  }
}

export default Form;
