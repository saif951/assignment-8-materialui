import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 250,
      width: 250,
    },
    image: {
      width: 228,
      height: 328,
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/post/${id}`}>
          <CardMedia className={classes.media} title="alt text">
            <img
              className={classes.image}
              src={`https://picsum.photos/id/${10 + id}/200/300`}
              alt="complex"
              py="1.5rem"
            />
          </CardMedia>
        </Link>
        <CardContent>
          <Typography variant="h6" component="h5">
            {title}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/post/${id}`} className={classes.linkStyle}>
          <Button variant="outlined" size="small" color="primary">
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
