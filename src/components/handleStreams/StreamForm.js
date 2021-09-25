import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = (formProps) => {
    const { label, input, meta } = formProps;
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ touched, error }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

    render() {
    return (
      <form
        className="ui huge error form"
        style={{ marginTop: "10vh" }}
        onSubmit={
          this.props.handleSubmit(
            this.props.onSubmit
          ) /* 'handleSubmit' function provided by redux-form */
        }
      >
        <Field name="title" component={this.renderInput} label="Enter name" />
        {/*name here is necessary*/}
        <Field
          name="description"
          component={this.renderInput}
          label="Enter desciption"
        />
        <button className="ui primary button">Save</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "Please enter title";
  }
  if (!formValues.description) {
    error.description = "Please enter description";
  }
  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);