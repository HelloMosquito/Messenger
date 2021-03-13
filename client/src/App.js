import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Messenger from "./pages/Messenger";
import Loading from "./pages/Loading";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthorization } from "./store/actionCreator";

import "./App.css";

function App() {
  const userIsAuthorized = useSelector((state) =>
    state.get("userIsAuthorized")
  );
  const dispatch = useDispatch();
  dispatch(checkAuthorization());
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute
          path="/messenger"
          component={Messenger}
          isAuthorized={userIsAuthorized}
        />
        <Route path="/loading" component={Loading} />
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
