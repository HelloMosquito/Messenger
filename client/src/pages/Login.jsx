import React from "react";
import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import cookie from "react-cookies";
import {
  IndexPosterComponent,
  IndexNavHeaderComponent,
  IndexSnackbarComponent,
  IndexTitleComponent,
  IndexSubmitBtnComponent,
} from "../components/Components";
import webSocket from "socket.io-client";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
    },
  },
  heroText: {
    fontSize: 26,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    maxWidth: 300,
  },
  overlay: {
    backgroundImage:
      "linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexDirection: "column",
    minHeight: "100vh",
    paddingBottom: 145,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    bgcolor: "background.paper",
    minHeight: "100vh",
    paddingTop: 23,
  },
  image: {
    backgroundImage: "url(./images/bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  box: {
    padding: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    maxWidth: 900,
    margin: "auto",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: { fontSize: 19, color: "rgb(0,0,0,0.4)", paddingLeft: "5px" },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: 3,
    marginTop: 49,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#3a8dff",
  },
  inputs: {
    marginTop: ".8rem",
    height: "2rem",
    padding: "5px",
  },
  forgot: {
    paddingRight: 10,
    color: "#3a8dff",
  },
}));

// Login middleware placeholder
const useLogin = (setOpen, setLoginMsg) => {
  const history = useHistory();

  const login = async (email, password) => {
    const res = await fetch(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => res.json());
    if (res.data.logged_in) {
      cookie.save("token", res.data.token, { path: "/" });
      cookie.save("email", email, { path: "/" });
      history.push("/messenger");
    } else {
      setLoginMsg(res.data.msg);
      setOpen(true);
    }
  };
  return login;
};

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); // switch of the snackerbar for error warning
  const [loginMsg, setLoginMsg] = React.useState("");

  const history = useHistory();

  const login = useLogin(setOpen, setLoginMsg);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  // // Establish the socket between current user and server
  // const [ws, setWs] = useState(null);
  // const connectWebSocket = () => {
  //   setWs(webSocket("http://localhost:3001"));
  //   // console.log();
  // };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={false} sm={4} md={5} className={classes.image}>
        <IndexPosterComponent />
      </Grid>

      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.buttonHeader}>
          <IndexNavHeaderComponent
            accBtnText="Create account"
            noAccBtnText="Don't have an account?"
            linkedPath="/signup"
          />
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <IndexTitleComponent title="Welcome back!" />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .trim()
                  .required("Email is required")
                  .email("Email is not valid"),
                password: Yup.string()
                  .trim()
                  .required("Password is required")
                  .max(100, "Password is too long")
                  .min(6, "Password too short"),
              })}
              onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
                setStatus();
                login(email, password).then(
                  () => {
                    // useHistory push to chat
                    return;
                  },
                  (error) => {
                    setSubmitting(false);
                    setStatus(error);
                  }
                );
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <form
                  onSubmit={handleSubmit}
                  className={classes.form}
                  noValidate
                >
                  <TextField
                    id="email"
                    label={<p className={classes.label}>E-mail address</p>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ classes: { input: classes.inputs } }}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextField
                    id="password"
                    label={
                      <Typography className={classes.label}>
                        Password
                      </Typography>
                    }
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      classes: { input: classes.inputs },
                      endAdornment: (
                        <Typography className={classes.forgot}>
                          Forgot?
                        </Typography>
                      ),
                    }}
                    type="password"
                    autoComplete="current-password"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                  />

                  <IndexSubmitBtnComponent submitBtnText="Login" />
                  <div style={{ height: 95 }} />
                </form>
              )}
            </Formik>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
        <IndexSnackbarComponent
          open={open}
          handleClose={handleClose}
          msg={loginMsg}
        />
      </Grid>
    </Grid>
  );
}
