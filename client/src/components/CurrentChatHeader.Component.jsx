import React from 'react';
import { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import StatusIcon from '@material-ui/icons/Lens';
import More from '@material-ui/icons/MoreHorizOutlined';

const useStyles = makeStyles(theme => ({
	container: {
		height: "60px",
		margin: "16px",
		padding: "16px",
		display: "flex",
		borderRadius: "5px",
		boxShadow: "3px 3px 5px #e6e6e6",
		justifyContent: "space-between",
		alignItems: "center",
	},
	contactName: {
		fontSize: 24,
		fontWeight: 700,
		fontFamily: "'Open Sans'"
	},
	messengerHeaderStatus: {
		color: "grey",
		flexGrow: 1,
		marginLeft: 40,
		marginTop: 8
	},
	status: {
		fontSize: "small",
		paddingTop: 3,
	},
}));

export default function CurrentChatHeaderComponent(props) {
	const classes = useStyles(props);
	return (
		<Fragment>
			<Box className={classes.container}>
				{/* Current contact name */}
				<Box className={classes.contactName}>Santiago</Box>

				{/* Contact status */}
				<Box className={classes.messengerHeaderStatus}>
					<StatusIcon className={classes.status} />
							Online
				</Box>

				{/* More options buttion */}
				{/* <Box alignSelf="center"> */}
					<More alignSelf="center"/>
				{/* </Box> */}
			</Box>
		</Fragment>
	);
}