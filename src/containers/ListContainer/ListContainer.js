import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import { isListLoading, getList, getError } from "../../redux/modules/selectors/list";
import { fetchList } from "../../redux/modules/actionsCreators/list";

export class ListContainer extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchList: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <List
        isLoading={this.props.isLoading}
        data={this.props.data}
        message={this.props.message}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: isListLoading(state),
    data: getList(state),
    message: getError(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchList: () => dispatch(fetchList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
