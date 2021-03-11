import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import { InputAdornment, TextField } from "@material-ui/core";

export default function SearchbarComponent() {
  return (
    <Fragment>
      <TextField
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment>
              <SearchIcon style={{ color: "grey" }} />
            </InputAdornment>
          ),
          style: {
            borderRadius: 10,
          },
        }}
        inputProps={{ style: { padding: "10px 12px 10px" } }}
      ></TextField>
    </Fragment>
  );
}
