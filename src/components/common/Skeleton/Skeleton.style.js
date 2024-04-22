import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  skeletonContainer: {
    display: "flex",
    padding: theme.spacing(3),
    flexWrap: "wrap",
  },
  stack: {
    width: "100%",
  },
  heading: {
    fontSize: theme.spacing(5),
    backgroundColor: 'rgb(0 0 0 / 3%) !important',
  },
  subHeading: {
    fontSize: theme.spacing(3),
    marginLeft: `${theme.spacing(3)} !important`,
    marginTop: `${theme.spacing(0)} !important`,
    // backgroundColor: 'cornsilk !important'
    backgroundColor: 'rgb(0 0 0 / 3%) !important',
  },
  rondedRectangle: {
    width: '100% !important',
    height: '100px !important',
    backgroundColor: '#9e9e9e !important'
  }
}));

export default useStyles;
