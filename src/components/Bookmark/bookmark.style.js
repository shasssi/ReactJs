import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow:
      "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: "200px",
    maxHeight: "200px",
    position: "absolute",
    top: theme.spacing(6),
    right: theme.spacing(1),
    zIndex: 1,
    background: "white",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    overflow: "scroll",
    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
  },
  image: {
    height: "100px",
    borderRadius: theme.spacing(0.5),
    cursor: "pointer",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      height: "50px",
    },
  },
  noContent: {
    marginTop: theme.spacing(1),
    fontSize: theme.spacing(2),
    color: "grey",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.spacing(1.5),
    },
  },
}));

export default useStyles;
