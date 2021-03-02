import React from 'react';
import { Fragment } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: "10px",
    },
    avatar: {
        width: "30px",
        height: "30px",
        marginTop: "5px",
    },
    msgContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    img: {
        width: "200px",
        borderRadius: "15px",
        borderBottomRightRadius: 0,
    },
}));

export default function MsgPicutreFromUserComponent(props) {
    const classes = useStyles(props);
    const { name, datetime } = props;
    return (
        <Fragment>
            <Box className={classes.container}>
                {/* Message container */}
                <Box className={classes.msgContainer}>
                    {/* User datetime */}
                    <Box className={classes.userNameAndDatetime}>{datetime}</Box>
                </Box>
                {/* Message picture */}
                <img className={classes.img} src="/images/pic.png" />
                {/* User photo */}
                <Avatar className={classes.avatar} alt={"user"} src="/images/thomas.png" />
            </Box>
        </Fragment>
    );
}