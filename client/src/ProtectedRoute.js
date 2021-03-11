import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkAuth = () => {};

function ProtectedRoute({
  isAuth: isAuth,
  isLoading: isLoading,
  component: Component,
  ...rest
}) {
  // console.log("I'm in Protected Route");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          // console.log(isAuth, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
          return <Component {...props} />;
        } else {
          if (isLoading) {
            return (
              <Redirect
                to={{ pathname: "/loading", state: { from: props.location } }}
              />
            );
          }
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
