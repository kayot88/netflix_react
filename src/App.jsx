import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import IsLoggedIn, { ProtectedRoute } from "./helpers/protectedRroutes";
import AuthUserListener from "./hooks/authUserHook";
import { BrowsePage } from "./pages/Browse";
import { Home } from "./pages/Home";
import { SigninPage } from "./pages/Signin";
import { SignupPage } from "./pages/Signup";

const App = () => {
  // const user = {}
  const { user } = AuthUserListener();
  console.log("user", user);
  return (
    <BrowserRouter>
      <Switch>
        <IsLoggedIn
          user={user}
          redirectPath={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
        >
          <SigninPage />
        </IsLoggedIn>

        <IsLoggedIn
          user={user}
          redirectPath={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
        >
          <SignupPage />
        </IsLoggedIn>

        <IsLoggedIn
          user={user}
          redirectPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsLoggedIn>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <BrowsePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
