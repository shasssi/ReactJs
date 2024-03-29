import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  topHeading: {
    fontWeight: `900 !important`,
    fontSize: `${theme.spacing(2)} !important`,
    [theme.breakpoints.down("md")]: {
      fontSize: `12px !important`,
    },
  },
}));

export default useStyles;
