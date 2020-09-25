import { List } from "@material-ui/icons";
import React from "react";
import Comment from "../Comment/Comment";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <List>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id}></Comment>
      ))}
    </List>
  );
};

export default CommentList;
