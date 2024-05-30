import React from "react";
import { Formik } from "formik";
import FormComponent from "./FormComponent";
import { validateForm } from "./validate";

function LoginComponent(props) {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validate={validateForm}
      validateOnChange={false}
      onSubmit={() => {}}
    >
      {(value) => <FormComponent formikState={value} />}
    </Formik>
  );
}

export default LoginComponent;
