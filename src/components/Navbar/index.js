import React, { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import Login from "../Login and Signup/Login";

import { useAuth } from "../../contexts/Authcontext";

function Navbar(props) {
  const classes = useStyles();
  const { currentUser, Logout, openLoginModal, closeLoginModal } = useAuth();
  const handleOpen = () => {
    openLoginModal();
  };

  const handleClose = () => {
    closeLoginModal();
  };

  const LogoutButton = () => {
    return (
      <Button onClick={Logout} color="inherit" className={classes.Button}>
        Logout
      </Button>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.Appbar}>
        <Toolbar className={classes.Toolbar}>
          <IconButton
            edge="start"
            className={classes.PhotoButton}
            color="inherit"
            aria-label="Photo"
            style={{ color: "#9dad7f" }}
          >
            <PhotoCameraOutlinedIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Post Images
          </Typography>
          <Box>
            {currentUser ? (
              <LogoutButton />
            ) : (
              <>
                <Button
                  onClick={handleOpen}
                  color="inherit"
                  className="Loginbtn"
                >
                  Login
                </Button>
                <Button
                  onClick={handleOpen}
                  color="inherit"
                  className="Signupbtn"
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Login />
    </div>
  );
}

export default Navbar;
