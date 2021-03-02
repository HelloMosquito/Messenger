import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import InsertEmotion from '@material-ui/icons/InsertEmoticonOutlined';
import FileCopy from '@material-ui/icons/FileCopyOutlined';
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	searchInput: {
		width: "90%",
		padding: "5px",
		placeholder: "Search",
		type: "text",
		bgcolor: 'grey',
	},
}));

export default function MsgTypingComponent(props) {
	const classes = useStyles(props);
	return (
		<Fragment>
			<TextField
				variant="filled"
				placeholder="Type something..."
				InputProps={{
					disableUnderline: true,
					endAdornment: (
						<InputAdornment>
							<InsertEmotion style={{ color: 'grey', marginRight: "10px" }}/>
							<FileCopy style={{ color: 'grey', marginRight: "10px" }}/>
						</InputAdornment>
					),
					style: {
						height: "60px",
						borderRadius: 10,
						margin: "16px",
					}
				}}
				inputProps={{
					style: {
						padding: "10px 12px 10px",
					}
				}}
			></TextField>

			{/* <Box className={classes.searchInput} m={2}>
				<TextField
					className={classes.searchInput}
					id="filled-basic"
					placeholder="Type something..."
					multiline
					variant="filled"
					InputProps={{
						disableUnderline: true,
						alignItems: "center",
						endAdornment: (
							<InputAdornment>
								<InsertEmotion />
								<FileCopy />
							</InputAdornment>
						)
					}}
				/>
			</Box> */}
		</Fragment>
	);
}