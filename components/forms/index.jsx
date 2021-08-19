import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../input";
import Button from "../button";
import TextArea from "../textArea";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const joiOptions = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, joiOptions);
    if (!error) return null;

    const errors = {};
    for (let errorDetail of error.details)
      errors[errorDetail.path[0]] = errorDetail.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const objectToValidate = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(objectToValidate, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (event) => {
    // event.preventDefault();

    const errors = this.validate() || {};
    this.setState({ errors });

    if (Object.keys(errors).length !== 0) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <Button disabled={this.validate()} className="btn-block black-btn">
        {label}
      </Button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextArea(name, label, options) {
    const { data, errors } = this.state;

    return (
      <TextArea
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
