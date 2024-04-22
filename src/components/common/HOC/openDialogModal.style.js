import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "40%",
    left: "50%",
    background: "white",
    width: "500px",
    "&:focus-visible": {
      outline: "none !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
  },
  header: {
    borderBottom: "0.5px solid #9e9e9e78",
    padding: theme.spacing(2),
    fontSize: `${theme.spacing(3)} !important`,
    color: '#837f7f',
  },
  content: {
    borderBottom: "0.5px solid #9e9e9e78",
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
    color: '#8b8792',
  },
  footer: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "end",
  },
  button: {
    marginRight: `${theme.spacing(1)} !important`,
    backgroundColor: "#330081 !important",
  },
  cancelButton: {
    marginRight: `${theme.spacing(1)} !important`,
    color: "#330081 !important",
    backgroundColor: "#3300811c !important",
  },
}));

export default useStyles;
