import React, { Fragment, useEffect, useRef } from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function IndexSnackbarComponent(props) {
  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
        message={props.msg}
        action={
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={props.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  );
}
