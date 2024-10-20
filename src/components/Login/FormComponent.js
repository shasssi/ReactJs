import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import {
  Cancel,
  FileUploadSharp,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import LoginImg from "./../../assets/images/login.jpeg";
import useStyles from "./Login.style";
import { validateForm } from "./validate";
import { signIn, signUp } from "../../redux/slice/user";

function LoginForm({ formikState }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fileData, setFileData] = useState({});
  const [fileError, setFileError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    values,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    setErrors,
    setTouched,
    setValues,
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

  const clearSignInFieldValues = () => {
    setFieldValue("email", "");
    setFieldValue("password", "");
  };

  const clearSignUpFieldValues = () => {
    setFieldValue("name", "");
    setFieldValue("confirmPassword", "");
    setFileData({});
    setFileError("");
    clearSignInFieldValues();
  };

  const onSubmitFieldValidation = (values) => {
    setErrors(validateForm(values));
    isSignUp && setFieldTouched("name", false);
    setFieldTouched("email", false);
    setFieldTouched("password", false);
    isSignUp && setFieldTouched("confirmPassword", false);
  };

  const handleSignIn = async () => {
    const { email, password } = errors;
    const isError = !!email || !!password;
    const isValue = values?.email && values?.password;
    if (!isError && isValue) {
      const response = await dispatch(
        signIn({ email: values?.email, password: values?.password })
      );
      if (response?.payload?.id) {
        navigate("/");
      } else {
        clearSignInFieldValues();
      }
    }
    onSubmitFieldValidation(values);
  };

  const handleSignUp = async () => {
    const { name, email, password, confirmPassword } = errors;
    const isError =
      !!name || !!email || !!password || !!confirmPassword || !!fileError;
    const isValue =
      values?.name &&
      values?.email &&
      values?.password &&
      values?.confirmPassword;
    if (!isError && isValue) {
      const formData = new FormData();
      formData.append("profileImg", fileData);
      formData.append("name", values?.name);
      formData.append("email", values?.email);
      formData.append("password", values?.password);
      dispatch(signUp(formData));
      clearSignInFieldValues();
      setTouched({});
      setIsSignUp(false);
    }
    onSubmitFieldValidation(values);
  };

  const onFileChange = (e) => {
    const file = e?.target?.files[0];
    const regex = new RegExp(
      /[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/
    );
    if (regex.test(file?.name)) {
      setFileData(file);
      setFileError("");
    } else {
      setFileData({});
      setFileError("Supported format: jpg | jpeg | png | gif");
    }
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
                data-testid="input-name"
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
              data-testid="input-email"
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
                data-testid="input-password"
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => handleInputChange(e, "password")}
                onBlur={() => handleOnBlur("password")}
                value={values?.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      data-testid="btn-togglePassword"
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
                    data-testid="input-confirmPassword"
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => handleInputChange(e, "confirmPassword")}
                    onBlur={() => handleOnBlur("confirmPassword")}
                    value={values?.confirmPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          data-testid="btn-toggleConfirmPassword"
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
                <Grid container marginBottom={2}>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      className={classes.uploadButton}
                      component="label"
                      // data-testid="input-file"
                    >
                      <FileUploadSharp /> Profile Image
                      <input
                        type="file"
                        data-testid="input-file"
                        onChange={onFileChange}
                        hidden
                      />
                    </Button>
                  </Grid>
                  {fileData?.name && (
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <p className={classes.uploadFileText}>
                          {fileData?.name}
                        </p>
                      </Grid>
                      <Grid item xs={2}>
                        <Cancel
                          data-testid="btn-cancelUpload"
                          className={classes.uploadCancel}
                          onClick={() => setFileData({})}
                        />
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                {!!fileError && (
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <p className={classes.errorText}>
                        {!!fileError && fileError}
                      </p>
                    </Grid>
                    <Grid item xs={2} padding={0}>
                      <Cancel
                        data-testid="btn-uploadError"
                        className={classes.uploadErroCancel}
                        onClick={() => setFileError("")}
                      />
                    </Grid>
                  </Grid>
                )}
              </>
            )}
            {!isSignUp && (
              <Button
                data-testid="btn-signIn"
                variant="contained"
                onClick={handleSignIn}
                className={classes.signInButton}
              >
                Sign In
              </Button>
            )}
            {isSignUp && (
              <Button
                data-testid="btn-signUp"
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
                data-testid="btn-existingUserSignIn"
                variant="contained"
                onClick={() => {
                  clearSignInFieldValues();
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
                data-testid="btn-newUserSignUp"
                variant="contained"
                onClick={() => {
                  clearSignUpFieldValues();
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
