import React from 'react';
import { Fragment } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		margin: "5px 10px 5px 0",
	},
	avatar: {
		width: "30px",
		height: "30px",
		marginTop: "5px",
		marginRight: "10px",
	},
	msgContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	nameAndDatetime: {
		color: "#bfbfbf",
	},
	img: {
		width: "200px",
		borderRadius: "15px",
		borderTopLeftRadius: 0,
	},
}));

export default function MsgPictureFromOthersComponent(props) {
	const classes = useStyles(props);
	const { name, datetime } = props;
	return (
		<Fragment>
			<Box className={classes.container}>
				{/* Contact photo */}
				<Avatar className={classes.avatar} alt={"user"} src="/images/thomas.png" />
				{/* Message container */}
				<Box className={classes.msgContainer}>
					{/* Messager name and datetime */}
					<Box className={classes.nameAndDatetime}>{name} {datetime}</Box>
					{/* Message picture */}
					<Box>
					<img className={classes.img} src="/images/pic.png" />
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
}