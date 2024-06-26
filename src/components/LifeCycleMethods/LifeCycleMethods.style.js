import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  topHeading: {
    fontWeight: `900 !important`,
    fontSize: `${theme.spacing(2)} !important`,
    [theme.breakpoints.down("md")]: {
      fontSize: `12px !important`,
    },
  },
  image: {
    overflow: "scroll",
  },
  reduxImage: {
    overflow: "scroll",
    width: "600px",
    [theme.breakpoints.down("md")]: {
      width: "330px",
    },
  },
}));

export default useStyles;
