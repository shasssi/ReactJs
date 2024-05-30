import React, { useState } from "react";
import LoginImg from "./../../assets/images/login.jpeg";
import useStyles from "./Login.style";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { validateForm } from "./validate";
import { userSignIn, userSignUp } from "../../api/login";

function LoginForm({ formikState }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const {
    values,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    setErrors,
    setTouched,
  } = formikState;
  const classes = useStyles();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (e, fieldName) => {
    setFieldValue(fieldName, e?.target?.value);
    setFieldTouched(fieldName, true);
  };

  const handleOnBlur = (fieldName) => {
    setFieldTouched(fieldName, false);
  };

  const handleSignIn = async () => {
    const { email, password } = errors;
    const isError = !!email || !!password;
    const isValue = values?.email && values?.password;
    if (!isError && isValue) {
      const response = await userSignIn({
        email: values?.email,
        password: values?.password,
      });
      if (response?.id) {
        navigate("/");
      }
      return;
    }
    setErrors(validateForm(values));
    setFieldTouched("email", false);
    setFieldTouched("password", false);
  };

  const handleSignUp = async () => {
    const { name, email, password, confirmPassword } = errors;
    const isError = !!name || !!email || !!password || !!confirmPassword;
    const isValue =
      values?.name &&
      values?.email &&
      values?.password &&
      values?.confirmPassword;
    if (!isError && isValue) {
      await userSignUp({
        name: values?.name,
        email: values?.email,
        password: values?.password,
      });
      navigate("/");
      return;
    }
    setErrors(validateForm(values));
    setFieldTouched("name", false);
    setFieldTouched("email", false);
    setFieldTouched("password", false);
    setFieldTouched("confirmPassword", false);
  };

  return (
    <div className={classes.parent}>
      <img className={classes.loginImg} src={LoginImg} alt="lifecyle" />
      <div className={classes.mainContainer}>
        <div className={classes.form}>
          <div className={classes.form1}>
            <header>
              <h1 className={classes.header}>
                {isSignUp ? "Sign Up" : "Sign In"}
              </h1>
            </header>
            {isSignUp && (
              <TextField
                className={classes.input}
                id="standard-password-input"
                label="Name"
                type="text"
                variant="standard"
                value={values?.name}
                onChange={(e) => handleInputChange(e, "name")}
                onBlur={() => handleOnBlur("name")}
              />
            )}
            <p className={classes.errorText}>
              {errors.name && touched.name === false && errors.name}
            </p>
            <TextField
              className={classes.input}
              id="standard-password-input"
              label="Email"
              type="text"
              variant="standard"
              value={values?.email}
              onChange={(e) => handleInputChange(e, "email")}
              onBlur={() => handleOnBlur("email")}
            />
            <p className={classes.errorText}>
              {errors.email && touched.email === false && errors.email}
            </p>
            <FormControl variant="standard" className={classes.input}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => handleInputChange(e, "password")}
                onBlur={() => handleOnBlur("password")}
                value={values?.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff className={classes.passwordIcon} />
                      ) : (
                        <Visibility className={classes.passwordIcon} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <p className={classes.errorText}>
              {errors.password && touched.password === false && errors.password}
            </p>
            {isSignUp && (
              <>
                <FormControl variant="standard" className={classes.input}>
                  <InputLabel htmlFor="standard-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => handleInputChange(e, "confirmPassword")}
                    onBlur={() => handleOnBlur("confirmPassword")}
                    value={values?.confirmPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <VisibilityOff className={classes.passwordIcon} />
                          ) : (
                            <Visibility className={classes.passwordIcon} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <p className={classes.errorText}>
                  {errors.confirmPassword &&
                    touched.confirmPassword === false &&
                    errors.confirmPassword}
                </p>
              </>
            )}
            {!isSignUp && (
              <Button
                variant="contained"
                onClick={handleSignIn}
                className={classes.signInButton}
              >
                Sign In
              </Button>
            )}
            {isSignUp && (
              <Button
                variant="contained"
                onClick={handleSignUp}
                className={classes.signUpButton}
              >
                Sign Up
              </Button>
            )}
            <p className={classes.or}>OR</p>
            {isSignUp && (
              <Button
                variant="contained"
                onClick={() => {
                  setTouched({});
                  setIsSignUp(false);
                }}
                className={classes.signInButton}
              >
                Existing User? Sign In
              </Button>
            )}
            {!isSignUp && (
              <Button
                variant="contained"
                onClick={() => {
                  setTouched({});
                  setIsSignUp(true);
                }}
                className={classes.signUpButton}
              >
                New User? Create an account
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
