import React from "react";
import { Redirect, Route } from "react-router-dom";

const IsLoggedIn = ({ user, redirectPath, children, ...rest }) => {
    console.log("IsLoggedIn is work");

  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: redirectPath }} />;
        }

        return console.log('dont wont to render component');
        
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location);
        if (user) {
          console.log("userrrr", user);
          return children;
        }
        if (!user) {
          // console.log("no user");
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
            // <Redirect to='signin' />
          );
        }
        return null;
      }}
    />
  );
};

export default IsLoggedIn;
