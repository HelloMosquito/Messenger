import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authorized } from "./utils/authorization";

const ProtectedRoute = ({ isLoading, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authorized()) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
