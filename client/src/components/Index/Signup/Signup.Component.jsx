import React from "react";
import {
  CssBaseline,
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  IndexPosterComponent,
  IndexNavHeaderComponent,
  IndexSnackbarComponent,
  IndexTitleComponent,
  IndexSubmitBtnComponent,
} from "../../Components";
import { encrypt } from "../../../utils/secrets";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiInput-underline:before": {
      borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
    },
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
}));
export default function SignupComponent(props) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={false} sm={4} md={5} className={classes.image}>
        <IndexPosterComponent />
      </Grid>

      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.buttonHeader}>
          <IndexNavHeaderComponent
            accBtnText="Login"
            noAccBtnText="Already have an account?"
            linkedPath="/login"
          />
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <IndexTitleComponent title="Create an account" />
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string()
                  .trim()
                  .required("Username is required")
                  .max(40, "Username is too long"),
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
              onSubmit={({ username, email, password }) => {
                props.signup(username, email, encrypt(password));
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <form
                  onSubmit={handleSubmit}
                  className={classes.form}
                  noValidate
                >
                  <TextField
                    id="username"
                    label={
                      <Typography className={classes.label}>
                        Username
                      </Typography>
                    }
                    fullWidth
                    id="username"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ classes: { input: classes.inputs } }}
                    name="username"
                    autoComplete="username"
                    autoFocus
                    helperText={touched.username ? errors.username : ""}
                    error={touched.username && Boolean(errors.username)}
                    value={values.username}
                    onChange={handleChange}
                  />
                  <TextField
                    id="email"
                    label={
                      <Typography className={classes.label}>
                        E-mail address
                      </Typography>
                    }
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ classes: { input: classes.inputs } }}
                    name="email"
                    autoComplete="email"
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
                    }}
                    type="password"
                    autoComplete="current-password"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                  />
                  <IndexSubmitBtnComponent submitBtnText="Create" />
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
