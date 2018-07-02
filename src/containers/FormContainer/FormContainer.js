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
import to from "await-to-js";

export class FormContainer extends Component {
  static propTypes = {
    receiveUserInput: PropTypes.func.isRequired,
    validateInput: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
    setupFields: PropTypes.func.isRequired,
    addToList: PropTypes.func.isRequired,
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
    this.props.setupFields(this.formRef.current);
  }

  getInput = e => {
    let data = {
      name: e.target.name,
      value: e.target.value,
      type: e.target.type
    };

    this.props.receiveUserInput(data, this.props.errors);
  };

  onFocusOut = e => {
    let data = {
      name: e.target.name,
      value: e.target.value,
      type: e.target.type
    };

    this.props.validateInput(data, this.props.errors);
  };

  onSubmit = async e => {
    e.preventDefault();

    let message = "";

    const {isValidated} = this.props;

    if (!isValidated) {
      this.props.validateFields(this.props.formData);

      return false;
    }

    await this.setState({
      isProcessing: true,
      message: ""
    });

    const [err, data] = await to(createEvent(this.props.formData));

    if (err) {
      console.error(err);
      message = err.message;
    }

    if (data) {
      message = "Event succesfully created.";

      await this.props.addToList(data);
    }

    this.formRef.current.reset();

    setTimeout(() => {
      this.setState((prevState) => {
        return {
          message: ""
        };
      });
    }, 10000);

    this.setState({
      isProcessing: false,
      message
    });
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

function mapDispatchToProps(dispatch) {
  return {
    validateFields: (data) => dispatch(validateFields(data)),
    validateInput: (data, prevErrors) => dispatch(validateInput(data, prevErrors)),
    setupFields: (form) => dispatch(setupFields(form)),
    receiveUserInput: (data, prevErrors) => dispatch(receiveUserInput(data, prevErrors)),
    addToList: (event) => dispatch(addToList(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
