import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: 'aquamarine',
    display: "flex",
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    justifyContent: 'space-between',
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-around",
  },
  menuItem: {
    marginRight: `${theme.spacing(2)} !important`,
  }
}));

export default useStyles;
