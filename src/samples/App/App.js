import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row } from 'react-flexbox-grid';
import FormSample from "../FormSample/FormSample";
import ListSample from "../ListSample/ListSample";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <div className="header">
            <div className="header__title">
              <h1>Form</h1>
            </div>
          </div>
        </Row>
        <Grid fluid>
          <Row>
            <ListSample />
            <FormSample />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
