import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { mockStore } from "../../../__mocks__/mockStore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./FormComponent";
import { Formik } from "formik";
import appStore from "../../redux/store";
import axios from "axios";

const mockTheme = createTheme({});

const mockState = {
  auth: {},
  navigation: {},
  scroll: {},
};

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={mockTheme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const formikState = {
  values: {},
  setFieldValue: jest.fn(),
  errors: {},
  touched: {},
  setFieldTouched: jest.fn(),
  setErrors: jest.fn(),
  setTouched: jest.fn(),
  setValues: jest.fn(),
};

describe("LoginComponent with SignIn", () => {
  it("render component", () => {
    const { getByTestId } = customRender(
      <LoginForm formikState={formikState} />
    );
    expect(getByTestId("btn-signIn")).toBeInTheDocument();
  });
});

describe("LoginComponent with SignUp", () => {
  it("render component", () => {
    const { getByTestId } = customRender(
      <LoginForm formikState={formikState} />
    );
    const newUserSignUpBtn = getByTestId("btn-newUserSignUp");
    fireEvent.click(newUserSignUpBtn);
    expect(getByTestId("btn-signUp")).toBeInTheDocument();
    const existingUserSignInBtn = getByTestId("btn-existingUserSignIn");
    fireEvent.click(existingUserSignInBtn);
    expect(getByTestId("btn-signIn")).toBeInTheDocument();
  });
  it("toggle confirmPassword visibilty", () => {
    const { getByTestId } = customRender(
      <LoginForm formikState={formikState} />
    );
    const newUserSignUpBtn = getByTestId("btn-newUserSignUp");
    fireEvent.click(newUserSignUpBtn);
    const passwordInp = getByTestId("input-password").querySelector("input");
    fireEvent.change(passwordInp, { target: { value: "123456" } });
    fireEvent.blur(passwordInp);
    expect(passwordInp.value).toBe("123456");
    const togglePasswordbtn = getByTestId("btn-togglePassword");
    fireEvent.click(togglePasswordbtn);
  });
  it("toggle consfirm password visibilty", () => {
    const { getByTestId } = customRender(
      <LoginForm formikState={formikState} />
    );
    const newUserSignUpBtn = getByTestId("btn-newUserSignUp");
    fireEvent.click(newUserSignUpBtn);
    const confirmPasswordInp = getByTestId(
      "input-confirmPassword"
    ).querySelector("input");
    fireEvent.change(confirmPasswordInp, { target: { value: "123456" } });
    fireEvent.blur(confirmPasswordInp);
    expect(confirmPasswordInp.value).toBe("123456");
    const toggleConfirmPasswordbtn = getByTestId("btn-toggleConfirmPassword");
    fireEvent.click(toggleConfirmPasswordbtn);
  });
});

describe("SignUp Form handling", () => {
  it("fill form data", async () => {
    const { getByTestId } = customRender(
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {(value) => <LoginForm formikState={value} />}
      </Formik>
    );
    const newUserSignUpBtn = getByTestId("btn-newUserSignUp");
    fireEvent.click(newUserSignUpBtn);
    // name field
    const nameInp = getByTestId("input-name").querySelector("input");
    fireEvent.change(nameInp, { target: { value: "" } });
    fireEvent.blur(nameInp);
    fireEvent.change(nameInp, { target: { value: "qwerty" } });
    fireEvent.blur(nameInp);
    expect(nameInp.value).toBe("qwerty");
    // email field
    const emailInp = getByTestId("input-email").querySelector("input");
    fireEvent.change(emailInp, { target: { value: "" } });
    fireEvent.blur(emailInp);
    fireEvent.change(emailInp, { target: { value: "asd@g" } });
    fireEvent.blur(emailInp);
    fireEvent.change(emailInp, { target: { value: "asd@gmail.com" } });
    fireEvent.blur(emailInp);
    expect(emailInp.value).toBe("asd@gmail.com");
    // password field
    const passwordInp = getByTestId("input-password").querySelector("input");
    fireEvent.change(passwordInp, { target: { value: "" } });
    fireEvent.blur(passwordInp);
    fireEvent.change(passwordInp, { target: { value: "123456" } });
    fireEvent.blur(passwordInp);
    expect(passwordInp.value).toBe("123456");
    // confirm password field
    const confirmPasswordInp = getByTestId(
      "input-confirmPassword"
    ).querySelector("input");
    fireEvent.change(confirmPasswordInp, { target: { value: "" } });
    fireEvent.blur(confirmPasswordInp);
    fireEvent.change(confirmPasswordInp, { target: { value: "76543" } });
    fireEvent.blur(confirmPasswordInp);
    fireEvent.change(confirmPasswordInp, { target: { value: "123456" } });
    fireEvent.blur(confirmPasswordInp);
    expect(confirmPasswordInp.value).toBe("123456");
    // file upload
    const fileInp = getByTestId("input-file");
    const newfile = new File(["dummy content"], "example.txt", {
      type: "image/text",
    });
    fireEvent.change(fileInp, { target: { files: [newfile] } });
    // cancel file upload
    const errorBtn = getByTestId("btn-uploadError");
    fireEvent.click(errorBtn);
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInp, { target: { files: [file] } });
    const cancelBtn = getByTestId("btn-cancelUpload");
    fireEvent.click(cancelBtn);
    // handle signup submit
    await waitFor(() => {
      const signupBtn = getByTestId("btn-signUp");
      fireEvent.click(signupBtn);
    });
  });
});

describe("SignIn Form handling", () => {
  it("login - success", async () => {
    const { getByTestId } = customRender(
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {(value) => <LoginForm formikState={value} />}
      </Formik>
    );
    act(() => {
      // email field
      const emailInp = getByTestId("input-email").querySelector("input");
      fireEvent.change(emailInp, { target: { value: "asd@gmail.com" } });
      fireEvent.blur(emailInp);
      expect(emailInp.value).toBe("asd@gmail.com");
      // password field
      const passwordInp = getByTestId("input-password").querySelector("input");
      fireEvent.change(passwordInp, { target: { value: "123456" } });
      fireEvent.blur(passwordInp);
      expect(passwordInp.value).toBe("123456");
    });
    // handle signin submit - success
    await waitFor(() => {
      jest.spyOn(axios, "post").mockResolvedValueOnce({
        status: 200,
        data: {
          token: "qwerty",
          id: "1",
        },
      });
      const signInBtn = getByTestId("btn-signIn");
      fireEvent.click(signInBtn);
    });
  });
  it("login - failure", async () => {
    const { getByTestId } = customRender(
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {(value) => <LoginForm formikState={value} />}
      </Formik>
    );
    act(() => {
      // email field
      const emailInp = getByTestId("input-email").querySelector("input");
      fireEvent.change(emailInp, { target: { value: "asd@gmail.com" } });
      fireEvent.blur(emailInp);
      expect(emailInp.value).toBe("asd@gmail.com");
      // password field
      const passwordInp = getByTestId("input-password").querySelector("input");
      fireEvent.change(passwordInp, { target: { value: "123456" } });
      fireEvent.blur(passwordInp);
      expect(passwordInp.value).toBe("123456");
    });
    // handle signin submit - success
    await waitFor(() => {
      jest.spyOn(axios, "post").mockResolvedValueOnce({
        status: 400,
        data: {},
      });
      const signInBtn = getByTestId("btn-signIn");
      fireEvent.click(signInBtn);
    });
  });
});
