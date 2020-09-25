import React from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import PostDetails from "./component/PostDetails/PostDetails";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <div className="social-buddy">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/path">
            <Main />
          </Route>
          <Route path="/post/:postId">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
