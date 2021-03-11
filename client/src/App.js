import React, { useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Messenger from "./pages/Messenger";
import Badrequest400 from "./pages/Badrequest400";
import Loading from "./pages/Loading";
import Chat from "./pages/Chat";
import ProtectedRoute from "./ProtectedRoute";
import cookie from "react-cookies";

import "./App.css";

function App() {
  const [isAuth, setIsAuth] = React.useState(true);

  const [loginStatus, setLoginStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const login = async () => {
    try {
      const response = await fetch("/auth", {
        method: "POST",
        headers: {
          Authentication: cookie.load("token"),
        },
      });
      const res = await response.json();
      if (res !== undefined && res.logged_in) {
        // console.log(res.logged_in);
        // console.log("Logging In, please wait");
        setLoginStatus(true);
      } else {
        // console.log(res.logged_in);
        setLoginStatus(false);
      }
      setLoading(false);
      // console.log("Loading? : ", loading);
    } catch (error) {}
  };

  login();
  // console.log("current login status: ", loginStatus);
  // useEffect(() => {
  //   login();
  // });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/messenger" component={Messenger} />
        <Route path="/400" component={Badrequest400} />
        <Route path="/loading" component={Loading} />
        <ProtectedRoute
          path="/chat"
          component={Chat}
          isAuth={loginStatus}
          isLoading={loading}
        />
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
