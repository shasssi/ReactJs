import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '280px',
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
  cardImage: {
    height: '140px',
    borderRadius: theme.spacing(1),
  }
}));

export default useStyles;
