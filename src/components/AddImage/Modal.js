import React, { useState } from "react";
import AddButton from "./Button";
import useStyles from "./styles";
import { useAuth } from "../../contexts/Authcontext";
import { Button, Modal, TextField, Slide } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const AddModal = () => {
  const classes = useStyles();
  const {
    currentUser,
    saveImage,
    setFile,
    collection,
    setCollection,
    file,
  } = useAuth();
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCollection((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
        setFile(selected);
      };
      reader.readAsDataURL(selected);
    } else {
      setFile(null);
      setError(true);
    }
  };

  const handlePost = () => {
    saveImage();
  };

  const body = (
    <>
      <Slide direction="up" in={open}>
        <div className={classes.Container}>
          <Button className={classes.CloseButton} onClick={handleClose}>
            <CloseIcon />
          </Button>
          <div
            className={classes.ImageContainer}
            style={{
              backgroundImage: img ? `url("${img}")` : "#131313",
            }}
          ></div>
          <div>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleImageChange}
              className={classes.InputFile}
              value={file}
            />
            <TextField
              label="Title"
              name="title"
              variant="outlined"
              className={classes.Title}
              onChange={handleChange}
              value={collection.Title}
            />
            <TextField
              label="Content"
              name="content"
              multiline
              rows={7}
              placeholder="Content of the Image."
              variant="outlined"
              className={classes.Content}
              onChange={handleChange}
              value={collection.content}
            />
          </div>
          <Button
            onClick={handlePost}
            style={{ textDecoration: "underline" }}
            className={classes.Button}
          >
            Post
          </Button>
        </div>
      </Slide>
    </>
  );
  return (
    <>
      {currentUser ? (
        <>
          <AddButton onOpen={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {body}
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default AddModal;
