import React, { Fragment } from "react";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import { InputAdornment, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getSearchedContact,
  clearSearchedResult,
  updateSearchingName,
} from "../../store/actionCreator";

export default function SearchbarComponent() {
  const allContactsList = useSelector((state) => state.get("allContactsList"));
  const dispatch = useDispatch();

  const handleUpdateSearchingName = (name) => {
    dispatch(updateSearchingName(name));
  };
  const handleSearchingContact = (name) => {
    if (name === "") {
      dispatch(clearSearchedResult());
      return;
    }
    const searchedResult = allContactsList.filter((item) => {
      return item.get("name").indexOf(String(name)) !== -1;
    });
    dispatch(getSearchedContact(searchedResult));
  };
  return (
    <Fragment>
      <TextField
        variant="filled"
        onChange={(e) => {
          handleUpdateSearchingName(e.target.value);
          handleSearchingContact(e.target.value);
        }}
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
