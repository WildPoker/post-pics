import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    bottom: "0",
    position: "fixed",
    width: "100%",
    // overflow: "hidden",
  },

  Toolbar: {
    minHeight: "5vh !important",
    backgroundColor: "#222831",
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
