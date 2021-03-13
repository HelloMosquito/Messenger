import React from "react";
import { Redirect } from "react-router-dom";
import { LoginComponent } from "../components/Components";
import { useSelector } from "react-redux";

export default function Login() {
  const userIsAuthorized = useSelector((state) =>
    state.get("userIsAuthorized")
  );
  return userIsAuthorized ? <Redirect to="/messenger" /> : <LoginComponent />;
}
