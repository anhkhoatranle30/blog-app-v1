import {
  Button,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { modalState$ } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import { hideModal, createPost } from "../../redux/actions";

import FileBase64 from "react-file-base64";

export default function CreatePostModal() {
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });

  const { isShown = false } = useSelector(modalState$);

  const classes = useStyles();

  const dispatch = useDispatch();

  const onModalClose = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const onFormSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    dispatch(hideModal());
    setData({ title: "", content: "", attachment: "" });
  }, [data, dispatch]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <Typography variant="h4">Create new post</Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textare}
          rowsMin={10}
          rowsMax={15}
          placeholder="content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onFormSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Modal open={isShown} onClose={onModalClose}>
        <p>{body}</p>
      </Modal>
    </div>
  );
}
