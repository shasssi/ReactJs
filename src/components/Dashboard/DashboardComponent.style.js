import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    display: "flex",
    padding: theme.spacing(3),
    flexWrap: "wrap",
  },
  cardSize: {
    padding: theme.spacing(1),
    // [lg, ∞) or [1200, ∞)
    [theme.breakpoints.up("lg")]: {
      maxWidth: "20%",
      minWidth: "20%",
    },
    // [md, lg) or [900px, 1200px)
    [theme.breakpoints.only("md")]: {
      maxWidth: "25%",
      minWidth: "25%",
    },
    // [sm, md) or [600, 900px)
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "50%",
      minWidth: "50%",
    },
    // [0, md) or [0, 900px)
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      minWidth: "100%",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

export default useStyles;
