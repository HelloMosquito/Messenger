import React, { Fragment } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import SearchbarComponent from './Searchbar.Component';

const useStyles = makeStyles(theme => ({
    chatAndSearchbarContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        width: "100%",
        alignSelf: "center",
    },
    contactListChatTitle: {
		fontSize: 24,
		fontWeight: 600,
	},
}));

export default function ChatAndSearchbarComponent(props) {
    const classes = useStyles(props);
    return (
        <Fragment>
            <Box className={classes.chatAndSearchbarContainer} >
                <Box className={classes.contactListChatTitle}>Chats</Box>
                <SearchbarComponent />
            </Box>
        </Fragment>
    );
};