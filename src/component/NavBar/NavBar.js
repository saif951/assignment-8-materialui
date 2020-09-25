import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles({
  alignCenter: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },

  linkStyle: {
    textDecoration: "none",
    color: "#fff",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item className="{classes.alignCenter}">
              <IconButton>
                <MenuIcon></MenuIcon>
              </IconButton>
              <Typography variant="h6" textAlign="center">
                Assignment 8 (Material UI)
                <Link to="/" className="{classes.linkStyle}">
                  Home
                </Link>
              </Typography>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge color="secondary" badgeContent={3}>
                  <NotificationsActiveIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <ChatIcon />
              </IconButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
