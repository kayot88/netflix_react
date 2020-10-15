import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { BrowsePage } from "./pages/Browser";
import { Home } from "./pages/Home";
import { SigninPage } from "./pages/Signin";
import { SignupPage } from "./pages/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/user">
        <p>I`m a user</p>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <BrowsePage />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <SigninPage />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <SignupPage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
