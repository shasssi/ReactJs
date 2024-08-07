import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: "#5046e5",
    display: "flex",
    padding: `${theme.spacing(1)} ${theme.spacing(9)}`,
    paddingTop: theme.spacing(0.5),
    justifyContent: "space-between",
    paddingBottom: theme.spacing(0.5),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItem: {
    marginRight: `${theme.spacing(2)} !important`,
    cursor: "pointer",
    lineHeight: "0 !important",
  },
  menuIcon: {
    color: "white",
    fontSize: `${theme.spacing(3)} !important`,
    cursor: "pointer",
  },
}));

export default useStyles;
