import React, {Component} from "react";
import PropTypes from "prop-types";
import Form from "../../components/Form/Form";
import {connect} from "react-redux";
import {
  receiveUserInput,
  validateInput,
  validateFields,
  setupFields
} from "../../redux/modules/actionsCreators/form";
import {
  getForm,
  isValidated,
  getErrors
} from "../../redux/modules/selectors/form";
import {createEvent} from "../../api/form";

class FormContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isValidated: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  state = {
    isProcessing: false,
    message: ""
  };

  constructor(props) {
    super(props);

    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.props.dispatch(setupFields(this.formRef.current));
  }

  getInput = e => {
    let data = {
      name: e.target.name,
      value: e.target.value,
      type: e.target.type
    };

    this.props.dispatch(receiveUserInput(data, this.props.errors));
  };

  onFocusOut = e => {
    let data = {
      name: e.target.name,
      value: e.target.value,
      type: e.target.type
    };

    this.props.dispatch(validateInput(data, this.props.errors));
  };

  onSubmit = async e => {
    e.preventDefault();

    let message = "";

    const {isValidated} = this.props;

    if (!isValidated) {
      this.props.dispatch(validateFields(this.props.formData));

      return false;
    }

    await this.setState({
      isProcessing: true,
      message: ""
    });

    const [err, data] = await to(createEvent(this.props.formData));

    debugger

    if (err) {
      console.error(err);
      message = err;
    }

    if (data) {
      message = "Event succesfully created.";
    }

    this.setState({
      isProcessing: false,
      message
    });

    console.log(this.props.formData);
  };

  render() {
    return (
      <Form
        formRef={this.formRef}
        errors={this.props.errors}
        getInput={this.getInput}
        message={this.state.message}
        isProcessing={this.state.isProcessing}
        onFocusOut={this.onFocusOut}
        onSubmit={this.onSubmit}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    formData: getForm(state),
    isValidated: isValidated(state),
    errors: getErrors(state)
  };
}

export default connect(mapStateToProps)(FormContainer);
