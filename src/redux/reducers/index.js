import { combineReducers } from "redux";
import postsReducer from "./posts";
import modalReducers from "./modal";

export default combineReducers({
  posts: postsReducer,
  modal: modalReducers,
});
