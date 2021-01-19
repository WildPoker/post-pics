import React, { useState } from "react";
import useStyles from "./styles";
import {
  Button,
  Input,
  InputLabel,
  InputAdornment,
  Modal,
} from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CircleLoader from "react-spinners/CircleLoader";
import { useAuth } from "../../contexts/Authcontext";

function Login() {
  const classes = useStyles();
  const { login, open, openModal, closeModal } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      <div
        style={{
          height: "60vh",
          width: "20vw",
          backgroundColor: "white",
          border: "solid 2px black",
        }}
      >
        <h1>NOT WORKING!!!</h1>
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
