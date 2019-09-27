import React, { Component, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import to from "await-to-js";
import Form from "../../components/Form/Form";
import { receiveUserInput, validateInput, validateFields, loadFields } from "../../redux/modules/actionsCreators/form";
import { addToList } from "../../redux/modules/actionsCreators/list";
import { getForm, getValidation, getErrors } from "../../redux/modules/selectors/form";
import { createEvent } from "../../api/form";

const formList = [
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'eventDate', type: 'date' },
];

const submit = async (success, fail, formData) => {
    const [err, data] = await to(createEvent(formData));
    if (err) {
        fail(err);
    } else if (data) {
        success(data);
    }
};

const FormSample = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [isProcessing, setProcessingFlag] = useState(false);
    const formData = useSelector(getForm);
    const isValidated = useSelector(getValidation);
    const errors = useSelector(getErrors);

    useEffect(() => { dispatch(loadFields(formList)) }, []);

    const onChange = useCallback((e) => {
            const data = { name: e.target.name, value: e.target.value, type: e.target.type };
            dispatch(receiveUserInput(data));
        }, [dispatch]);
    const onBlur = useCallback((e) => {
            const data = { name: e.target.name, value: e.target.value, type: e.target.type };
            dispatch(validateInput(data));
        }, [dispatch]);
    const setErrorMessage = (err) => {
        setMessage(err.message);
    };
    const setSuccessMessage = (data) => {
        setMessage("Event succesfully created.");
        dispatch(addToList(data));
    };
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (!isValidated) {
            dispatch(validateFields(formData));
            return false;
        }

        setMessage('');
        setProcessingFlag(true);

        submit(setSuccessMessage, setErrorMessage, formData);

        // Reset old form. --

        setProcessingFlag(false);
        setTimeout(() => setMessage(''), 6000);
        }, [dispatch, formData]);

    return (
        <Form
          errors={errors}
          onChange={onChange}
          formList={formList}
          message={message}
          isProcessing={isProcessing}
          onBlur={onBlur}
          onSubmit={onSubmit}
        />
    );
}

export default FormSample;
