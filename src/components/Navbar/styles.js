import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
    width: "100%",
    color: "#9dad7f",
    // overflow: "hidden",
  },

  Toolbar: {
    minHeight: "5vh !important",
    backgroundColor: "#557174",
  },
  PhotoButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Montserrat, sans-serif",
  },
}));

export default useStyles;
