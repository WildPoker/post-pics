import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    color: "red",
  },
  input: {
    margin: "50px 0 0 0",
    width: "100%",
  },
  button: {
    marginTop: "30px",
  },
  link: {
    marginTop: "30px",
  },
  click: {
    cursor: "pointer",
    textDecoration: "underline",
    color: "#ff1e56",
  },
}));

export default useStyles;
