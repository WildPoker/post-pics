import { makeStyles } from "@material-ui/core/styles";

const color1 = "#557174";
const color2 = "#9dad7f";
const color3 = "#c7cfb7";
const color4 = "#f7f7e8";

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    height: "450px",
  },
  cardRoot: {
    maxWidth: "90%",
    minHeight: "400px",
    margin: "auto",
    backgroundColor: color3,
    border: "1px solid " + color2,
    position: "relative",
    color: color1,
    " & .MuiCardActions-root": {
      position: "absolute",
      right: "0",
      bottom: "0px",
      "& button": {
        color: color1,
        fontWeight: "bold",
        borderRadius: "0px",
        borderBottom: "2px solid transparent",
      },
      "& button:hover": {
        borderBottom: "2px solid " + color1,
      },
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default useStyles;
