import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(1),
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px !important",
    height: "320px",
  },
  cardImage: {
    height: "140px",
    borderRadius: theme.spacing(1),
  },
  cardContent: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(1)} ${theme.spacing(
      1
    )} ${theme.spacing(1)} !important`,
  },
  button: {
    width: "100%",
    color: "#330081 !important",
    backgroundColor: "#3300811c !important",
    border: "none !important",
  },
  listContainer: {
    paddingLeft: theme.spacing(3),
  },
  list: {
    listStyleType: "disc !important",
    color: '#6c6e71 !important',
  },
  listItem: {
    display: "list-item !important",
    paddingLeft: "0px !important",
  },
}));

export default useStyles;
