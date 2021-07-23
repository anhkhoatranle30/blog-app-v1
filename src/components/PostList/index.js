import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  const isPostLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {isPostLoading && <PostSkeleton />}
      {posts.map((post) => (
        <Grid item xs={12} sm={6}>
          <Post key={post._id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
