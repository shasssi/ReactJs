import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: "#d3d3d385",
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    marginTop: `${theme.spacing(1)} !important`,
    borderRadius: theme.spacing(0.5),
    color: "#955ae7 !important",
  },
  subHeading: {
    background: "cornsilk",
    marginLeft: `${theme.spacing(3)} !important`,
    marginTop: `${theme.spacing(1)} !important`,
    padding: `${theme.spacing(0)} ${theme.spacing(1)}`,
    color: "#8b8792 !important",
  },
  lineBreak: {
    backgroundColor: "#d3d3d385",
    padding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
    marginTop: `${theme.spacing(1)} !important`,
    borderRadius: theme.spacing(0.5),
  }
}));

export default useStyles;
