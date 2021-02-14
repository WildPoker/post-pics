import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
    width: "100%",

    // overflow: "hidden",
  },

  Toolbar: {
    minHeight: "5vh !important",
    backgroundColor: "#557174",
    borderBottom: "2px solid #9dad7f",
  },
  PhotoButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textShadow: "1px 1px #c7cfb7",
    fontFamily: "'Hachi Maru Pop', cursive !important",
  },
}));

export default useStyles;
