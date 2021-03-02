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
	msgBubbleContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	msgBubble: {
		maxWidth: "60%",
		padding: "10px",
		backgroundColor: "#03a9f4",
		borderRadius: "5px",
		borderTopLeftRadius: 0,
		color: "white",
	},
}));

export default function MsgBubbleFromOthersComponent(props) {
	const classes = useStyles(props);
	const { name, datetime } = props;
	return (
		<Fragment>
			{/* version 1 as project description */}
			<Box className={classes.container}>
				{/* Contact photo */}
				<Avatar className={classes.avatar} alt={"user"} src="/images/thomas.png" />
				{/* Message container */}
				<Box className={classes.msgContainer}>
					{/* Messager name and datetime 
					<Box className={classes.nameAndDatetime}>{name} {datetime}</Box>
					{/* Message bubble */}
					<Box className={classes.msgBubbleContainer}>
						<Box className={classes.msgBubble}>aoijf fsadfasdfoiwaefjoiwai aoijfoidfasdfwaefjoiwai aoijfoiwafasdfefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjsdfdsfoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai</Box>
					</Box>
				</Box>
			</Box>

			{/* version 2 */}
			{/* <Box className={classes.container}>
				<Avatar className={classes.avatar} alt={"user"} src="/images/thomas.png" />
				<Box className={classes.msgContainer}>
					<Box className={classes.nameAndDatetime}>{name} {datetime}</Box>
					<Box className={classes.msgBubbleContainer}>
						<Box className={classes.msgBubble}>aoijf fsadfasdfoiwaefjoiwai aoijfoidfasdfwaefjoiwai aoijfoiwafasdfefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjsdfdsfoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai aoijfoiwaefjoiwai</Box>
					</Box>
				</Box>
			</Box> */}
		</Fragment>
	);
}