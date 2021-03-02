import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import MsgBubbleFromUserComponent from './MsgBubbleFromUser.Component';
import MsgBubbleFromOthersComponent from './MsgBubbleFromOthers.Component';
import MsgPicutreFromUserComponent from './MsgPictureFromUser.Component';
import MsgPictureFromOthersComponent from './MsgPictureFromOthers.Component';


export default function CurrentChatPageComponent(props) {
	return (
		<Fragment>
			<Box flexGrow={1} m={2} overflow="auto">
				<Box display="flex" flexDirection="column">
					<MsgBubbleFromOthersComponent  name={"santiago"} datetime={"2021-03-01 01:00:00"}/>
					<MsgPicutreFromUserComponent  name={"cheng"} datetime={"2021-03-01 01:00:00"}/>
					<MsgPictureFromOthersComponent  name={"cheng"} datetime={"2021-03-01 01:00:00"}/>
					<MsgBubbleFromUserComponent name={"cheng"} datetime={"2021-03-01 01:00:00"}/>
					<MsgBubbleFromOthersComponent  name={"santiago"} datetime={"2021-03-01 01:00:00"}/>
					<MsgBubbleFromOthersComponent  name={"santiago"} datetime={"2021-03-01 01:00:00"}/>
					<MsgBubbleFromOthersComponent  name={"santiago"} datetime={"2021-03-01 01:00:00"}/>
					<MsgBubbleFromOthersComponent  name={"santiago"} datetime={"2021-03-01 01:00:00"}/>
				</Box>
			</Box>
		</Fragment>
	);
};