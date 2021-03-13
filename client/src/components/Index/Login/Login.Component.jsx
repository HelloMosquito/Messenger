import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  IndexPosterComponent,
  IndexNavHeaderComponent,
  IndexSnackbarComponent,
  IndexTitleComponent,
  IndexSubmitBtnComponent,
} from "../../Components";
import { useDispatch } from "react-redux";
import { login } from "../../../store/actionCreator";
import { encrypt } from "../../../utils/secrets";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    backgroundImage: "url(./images/bg-img.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: { fontSize: 19, color: "rgb(0,0,0,0.4)", paddingLeft: "5px" },
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

export default function LoginComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
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
              onSubmit={({ email, password }) => {
                dispatch(login(email, encrypt(password)));
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
                  />

                  <IndexSubmitBtnComponent submitBtnText="Login" />
                  <div style={{ height: 95 }} />
                </form>
              )}
            </Formik>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
        <IndexSnackbarComponent />
      </Grid>
    </Grid>
  );
}
