import { Padding } from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    fontFamily:
      "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif",
  },
  mainContainer: {
    height: "100vh",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  form: {
    flexGrow: 1,
    margin: "0 auto",
    padding: "0 5%",
    marginBottom: "50px",
    maxWidth: "450px",
  },
  form1: {
    minHeight: "707px",
    padding: "48px 68px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "4px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    paddingBottom: "30px",
    width: "100%",
    gap: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "48px 16px",
    },
  },
  header: {
    color: "rgb(255, 255, 255)",
    fontSize: "2rem",
    fontWeight: 700,
    marginTop: 0,
    padding: 0,
  },
  input: {
    background: "rgba(22, 22, 22, 0.7)",
    color: "white",
    "& :-webkit-autofill": {
      "-webkit-text-fill-color": "white !important",
      "-webkit-background-clip": "text !important",
    },
    "& label": {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: 1.5,
      color: "rgba(255, 255, 255, 0.7) !important",
      paddingLeft: "1rem !important",
    },
    "& .MuiInputLabel-shrink": {
      paddingTop: "1rem",
    },
    "& .MuiInputBase-input": {
      textUnderlineOffset: "unset",
      textDecoration: "unset",
      paddingTop: "1rem",
      paddingBottom: "0.5rem",
      paddingLeft: "1rem",
      color: "white",
    },
    "& .MuiInput-root:after": {
      borderBottom: "none !important",
    },
  },
  passwordIcon: {
    color: "rgba(255, 255, 255, 0.7) !important",
  },
  signInButton: {
    padding: `${theme.spacing(1.5)} !important`,
    backgroundColor: "#5046e5 !important",
    textTransform: "none !important",
    fontSize: "1rem !important",
  },
  signUpButton: {
    padding: `${theme.spacing(1.5)} !important`,
    backgroundColor: "#955ae7 !important",
    textTransform: "none !important",
    fontSize: "1rem !important",
  },
  or: {
    margin: theme.spacing(0),
    color: "rgba(255, 255, 255, 0.7) !important",
    textAlign: "center",
  },
  errorText: {
    margin: theme.spacing(0),
    color: "rgb(235, 57, 66)",
    fontSize: "0.8125rem",
  },
  loginImg: {
    height: "100vh",
    width: "100%",
  },
}));

export default useStyles;
