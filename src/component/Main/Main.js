import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Main = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const useStyles = makeStyles({
    wrapper: {
      display: "grid",
      backgroundColor: "blue",
      gridGap: "15px",
      gridTemplateColumns: "auto-fit",
      gridTemplateRows: "max-content",
      gridAutoFlow: "dense",
    },
    item: {},
  });
  const classes = useStyles();
  return (
    <Box py="2.5rem">
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          {posts.map((post) => (
            <div key={post.id} className={classes.item}>
              <Post post={post}></Post>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Main;
