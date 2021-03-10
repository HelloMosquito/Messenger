import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import * as Components from '../components/Components';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: "100vh",
		// "& .MuiInput-underline:before": {
		// 	borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)"
		// }

	},
	contactsListContainer: {
		width: "100%",
		alignSelf: "center",
		display: "flex",
		overflow: "auto",
		flexGrow: 1,
		flexDirection: "column",
		padding: "16px",
		paddingTop: 0,
	},
	dividedPages: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	chats: {
		height: "100vh",
	},
}));


export default function Messenge(props) {
	const classes = useStyles(props);
	return (
		<Grid container component="main" className={classes.root} width="100vw">
			<CssBaseLine />
			<Grid item xs={false} sm={4} md={5} spacing={1}>
				<Hidden xsDown>
					<Box className={classes.dividedPages}>
						<Components.UserHeaderComponent />
						<Components.ChatAndSearchbarComponent />
						{/* Contacts List */}
						<Box className={classes.contactsListContainer}>
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
							<Components.ContactsListComponent />
						</Box>
					</Box>
				</Hidden>
			</Grid>

			<Grid item xs={12} sm={8} md={7} className={classes.chats}>
				<Box className={classes.dividedPages}>
					<Components.CurrentChatHeaderComponent />
					<Components.CurrentChatPageComponent />
					<Components.MsgTypingComponent />
				</Box>
			</Grid>
		</Grid >
	);
}
