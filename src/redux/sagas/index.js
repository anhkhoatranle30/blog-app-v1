import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchPosts, createPost, updatePost } from "../../apis";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(fetchPosts);
    // console.log("[posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getPosts.getPostsFailure(e));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(createPost, action.payload);
    console.log("[create post - posts]", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (e) {
    console.log(e);
    yield put(actions.createPost.createPostFailure(e));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(updatePost, action.payload);
    console.log("[update post - post]", updatedPost);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (e) {
    console.log(e);
    yield put(actions.updatePost.updatePostFailure(e));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
