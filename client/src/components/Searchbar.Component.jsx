import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { InputAdornment, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	searchInput: {
		width: "90%",
		padding: "5px",
		placeholder: "Search",
		type: "text",
		backgroundColor: 'grey',
	},
}));

export default function SearchbarComponent(props) {
	const classes = useStyles(props);
	return (
		<Fragment>
			<TextField 
			variant="filled"
			InputProps={{
				disableUnderline: true,
				borderRadius: 50,
				startAdornment: (
					<InputAdornment>
						<SearchIcon style={{ color: 'grey' }}/>
					</InputAdornment>
				),
				style: {
					borderRadius: 10
				}
			}}
			inputProps={
				{ style: {padding: "10px 12px 10px",}
			}}
			></TextField>
		</Fragment>
	);
}