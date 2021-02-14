import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    padding: "0 20px 0 20px",
    height: "500px",
    width: "450px",
    backgroundColor: "#f7f7e8",
    borderRadius: "5%",
    border: "2px solid #c7cfb7",
    alignContent: "center",
  },
  CloseButton: {
    color: "#9b5151",
    marginRight: "-30px",
    backgroundColor: "transparent",
    float: "right",
  },
  ImageContainer: {
    marginTop: "50px",
    marginBottom: "10px",
    border: "1px dotted gray",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "30%",
    "& p": {
      margin: "auto",
      height: "100%",
      width: "100%",
      textAlign: "center",
    },
  },
  Title: {
    width: "60%",
    margin: "auto",
    paddingBottom: "10px",
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
  InputFile: {
    width: "40%",
    margin: "auto",
  },
  Content: {
    width: "100%",
    margin: "auto",
    display: "flex",
    paddingBottom: "10px",
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
  Button: {
    float: "right",
    fontWeight: "bold",
    color: "#9dad7f",
  },
}));

export default useStyles;
