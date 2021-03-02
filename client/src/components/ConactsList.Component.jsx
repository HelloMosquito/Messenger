import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Badge, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		padding: "16px",
		justifyContent: "flex-start",
	},
	avatar: {
		width: "40px",
		height: "40px",
	},
	contactDetailsContainer: {
		height: "100%",
		paddingLeft: "24px",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
	},
	contactName: {
		fontWeight: 700,
		fontSize: 17,
		fontFamily: "'Open Sans'",
	},
	unreadMsg: {

		color: "primary",
	}
}));

export default function ContactsListComponent(props) {
	const classes = useStyles(props);
	return (
		<Fragment>
			<Box className={classes.container}>

				{/* Contact photo */}
				<Badge
					color="primary"
					variant="dot"
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}>
					<Avatar 
						className={classes.avatar} 
						alt={"thomas"} 
						src="/images/santiago.png" 
					/>
				</Badge>

				{/* Contact name and message */}
				<Box className={classes.contactDetailsContainer}>
					<Box className={classes.contactName}>santiago</Box>
					<Badge
						badgeContent={999}
						color="primary"
					>
						messaging..........
					</Badge>
				</Box>

			</Box>
		</Fragment>
	);
}