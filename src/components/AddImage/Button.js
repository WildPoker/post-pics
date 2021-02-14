import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  FabButton: {
    position: "fixed",
    backgroundColor: "#557174",
    color: "#c7cfb7",
    bottom: "30px",
    right: "30px",
    "&:hover": {
      backgroundColor: "#184d47",
      color: "#f7f7e8",
    },
  },
}));

const AddButton = (props) => {
  const classes = useStyles();

  const handleOpen = () => {
    props.onOpen(true);
  };
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.FabButton}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddButton;
