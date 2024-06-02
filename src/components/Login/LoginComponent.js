import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import FormComponent from "./FormComponent";
import { validateForm } from "./validate";
import { logout } from "../../redux/slice/user";
import AlertComponent from "../../common/Error/AlertComponent";

function LoginComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <>
      <AlertComponent />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={validateForm}
        validateOnChange={false}
        onSubmit={() => {}}
      >
        {(value) => <FormComponent formikState={value} />}
      </Formik>
    </>
  );
}

export default LoginComponent;
