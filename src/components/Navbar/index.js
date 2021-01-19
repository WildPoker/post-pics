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
import Login from "../Login";

import { useAuth } from "../../contexts/Authcontext";

function Navbar(props) {
  const classes = useStyles();
  const { currentUser, Logout, openModal, closeModal } = useAuth();
  const handleOpen = () => {
    openModal();
  };

  const handleClose = () => {
    closeModal();
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
              <Button
                onClick={handleOpen}
                color="inherit"
                className={classes.Button}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Login />
    </div>
  );
}

export default Navbar;
