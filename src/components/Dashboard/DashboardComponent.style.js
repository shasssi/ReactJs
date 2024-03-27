import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    display: "flex",
    margin: theme.spacing(3),
    flexWrap: "wrap",
    justifyContent: 'center'
  },
}));

export default useStyles;
