import React from "react";
import { Redirect, Route } from "react-router-dom";

const IsLoggedIn = ({ user, redirectPath, children, ...rest }) => {
    console.log("IsLoggedIn is work");

  // const user = {}
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          console.log(children);
          return children;
        }
        if (user) {
          console.log(redirectPath);
          return <Redirect to={{ pathname: redirectPath }} />;
        }

        return console.log('dont wont to render component ');;
        
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  console.log("ProtectedRoute is work");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          );
        }
        return null;
      }}
    />
  );
};

export default IsLoggedIn;
