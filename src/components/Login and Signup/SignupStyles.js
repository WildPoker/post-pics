import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    color: "red",
  },
  Container: {
    height: "320px",
    width: "500px",
    backgroundColor: "#f7f7e8",
    borderRadius: "1%",
    boxShadow: "5px 6px #9dad7f",
    border: "2px solid #c7cfb7",
  },
  form: {
    width: "100%",
    height: "100%",
    position: "static",
  },
  box: {
    display: "inline-block",
    margin: "auto",
    width: "50%",
  },
  box2: {
    display: "inline-block",
    margin: "auto",
    width: "50%",
  },
  textField: {
    margin: "30px 0 0 15px",
    width: "90% !important",
    "& label.Mui-focused": {
      color: "#557174",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c7cfb7",
      },
      "&:hover fieldset": {
        borderColor: "#c7cfb7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#557174",
        borderWidth: "3px",
      },
    },
  },
  formControl: {
    margin: "30px 0 0 15px",

    width: "90% !important",
    "& label.Mui-focused": {
      color: "#557174",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c7cfb7",
      },
      "&:hover fieldset": {
        borderColor: "#c7cfb7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#557174",
        borderWidth: "3px",
      },
    },
  },

  select: {},

  SignupBtn: {
    color: "#9dad7f",
    float: "left",
    margin: "15px",
  },
  button: {
    display: "block",
    color: "#9dad7f",
    fontWeight: "bold",
    float: "right",
    margin: "10px",
  },
}));

export default useStyles;
