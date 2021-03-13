import React, { Fragment } from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "../../store/actionCreator";

export default function IndexSnackbarComponent() {
  const snackbarOpened = useSelector((state) => state.get("snackbarOpened"));
  const snackbarMsg = useSelector((state) => state.get("snackbarMsg"));
  const dispatch = useDispatch();
  const handleCloseSnackbar = () => {
    dispatch(closeSnackbar());
  };
  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackbarOpened}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMsg}
        action={
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  );
}
