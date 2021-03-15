import React from "react";
import { useHistory } from "react-router-dom";
import { SignupComponent } from "../components/Components";
import { useDispatch } from "react-redux";
import { openSnackbar, authorizeUser } from "../store/actionCreator";
import cookie from "react-cookies";

export default function Register() {
  const dispatch = useDispatch();

  const useRegister = (username, email, password) => {
    const history = useHistory();
    const register = async (username, email, password) => {
      fetch(`/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data.signedup) {
            cookie.save("token", res.data.token, { path: "/" });
            cookie.save("email", email, { path: "/" });
            dispatch(authorizeUser());
            history.push("/messenger");
          } else {
            dispatch(openSnackbar(res.data.msg));
          }
        });
    };
    return register;
  };
  const register = useRegister();
  return <SignupComponent signup={register} />;
}
