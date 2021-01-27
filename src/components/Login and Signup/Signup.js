import React, { useState } from "react";
import useStyles from "./LoginStyles";
import { Button, Modal, TextField } from "@material-ui/core";
import { useAuth } from "../../contexts/Authcontext";

function Signup() {
  const classes = useStyles();
  const { open, openModal, closeModal } = useAuth();
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
    closeModal();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await login(user.email, user.password);
      closeModal();
      setLoading(false);
    } catch {
      setError("Failed to Login!");
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
      <div className={classes.Container}>
        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.box}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              className={classes.textField}
            />
          </div>
          <div className={classes.box}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={classes.textField}
            />
          </div>
          <a href="#" className={classes.SignupBtn}>
            Signup?
          </a>
          <Button color="secondary" className={classes.button}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
  return (
    <>
      <Modal
        open={open}
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

export default Login;
