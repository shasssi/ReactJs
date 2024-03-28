import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: '#5046e5',
    display: "flex",
    padding: `${theme.spacing(1)} ${theme.spacing(9)}`,
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-around",
  },
  menuItem: {
    marginRight: `${theme.spacing(2)} !important`,
    cursor: 'pointer'
  },
  menuIcon: {
    color: 'white',
    fontSize: `${theme.spacing(3)} !important`
  }
}));

export default useStyles;
