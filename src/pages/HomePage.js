import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import CreatePostModal from "../components/CreatePostModal";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { showModal } from "../redux/actions";
import useStyles from "./styles";

export default function HomePage() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={() => openCreatePostModal()}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
