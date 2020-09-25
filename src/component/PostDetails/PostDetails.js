import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Container,
  Box,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import CommentList from "../CommentList/CommentList";

const PostDetails = () => {
  const { postId } = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const useStyle = makeStyles({
    media: {
      height: 350,
    },
  });
  const classes = useStyle();

  return (
    <Box py="2.5rem">
      <Container maxWidth="lg">
        <Card>
          <CardMedia
            className={classes.media}
            image={`https://picsum.photos/id/${10 + details.id}/1280/720`}
            title="alt text"
          />
          <CardContent>
            <Typography variant="h4" component="h3" color="textSecondary">
              {details.title}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {details.body}
            </Typography>
          </CardContent>
        </Card>
        <CommentList comments={comments}></CommentList>
      </Container>
    </Box>
  );
};

export default PostDetails;
