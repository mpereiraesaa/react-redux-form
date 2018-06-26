import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";

class ListContainer extends Component {

  renderItems() {
    return [0,1].map((el, index) => (
      <ListItem key={`item_${index}`} />
    ));
  }

  render() {
    return (
      <List
        renderItems={this.renderItems}/>
    );
  }
}

export default ListContainer;
