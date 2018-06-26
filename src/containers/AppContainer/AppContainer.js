import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row } from 'react-flexbox-grid';
import FormContainer from "../FormContainer/FormContainer";
import ListContainer from "../ListContainer/ListContainer";

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Row>
          <div className="header">
            <div className="header__title">
              <h1>Welcome to the Form</h1>
            </div>
          </div>
        </Row>
        <Grid fluid>
          <Row>
            <ListContainer />
            <FormContainer />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppContainer;
