import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteForSignin = ({ component: Component, ...props }) => {
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <Route>
      {() =>
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    </Route>
  );
};

export default ProtectedRouteForSignin;
