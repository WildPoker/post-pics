import React, { useState } from "react";
import useStyles from "./SignupStyles";
import {
  Button,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slide,
} from "@material-ui/core";
import { useAuth } from "../../contexts/Authcontext";

function Signup() {
  const classes = useStyles();
  const { open, closeSignupModal, openLoginModal, signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    gender: "",
    password: "",
    conpassword: "",
  });

  const handleClose = (e) => {
    closeSignupModal();
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (user.password === user.conpassword) {
      signup(
        user.email.toLowerCase(),
        user.password,
        user.firstname,
        user.lastname,
        user.gender
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const body = (
    <>
      <Slide direction="up" in={open.signup}>
        <div className={classes.Container}>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={handleSignup}
          >
            <div className={classes.box}>
              <TextField
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                className={classes.textField}
                onChange={handleChange}
                required
              />
              <TextField
                label="First Name"
                name="firstname"
                variant="outlined"
                className={classes.textField}
                onChange={handleChange}
                required
              />
              <TextField
                label="Last Name"
                name="lastname"
                variant="outlined"
                className={classes.textField}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.box2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={user.gender}
                  name="gender"
                  onChange={handleChange}
                  label="Gender"
                  autoWidth="true"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                className={classes.textField}
                onChange={handleChange}
                required
              />
              <TextField
                label="Confirm Password"
                name="conpassword"
                type="password"
                variant="outlined"
                className={classes.textField}
                onChange={handleChange}
                required
              />
            </div>
            <a
              className={classes.SignupBtn}
              style={{ cursor: "pointer" }}
              onClick={openLoginModal}
            >
              Login?
            </a>
            <Button color="secondary" className={classes.button} type="submit">
              Signup
            </Button>
          </form>
        </div>
      </Slide>
    </>
  );
  return (
    <>
      <Modal
        open={open.signup}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {body}
      </Modal>
    </>
  );
}

export default Signup;
