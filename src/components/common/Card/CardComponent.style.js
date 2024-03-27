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
  },
  button: {
    backgroundColor: '#0fa2e9 !important',
  },
  listContainer: {
    paddingLeft: theme.spacing(3),
  },
  list: {
    listStyleType: 'disc !important',
  },
  listItem: {
    display: 'list-item !important',
    paddingLeft: '0px !important'
  }
}));

export default useStyles;
