import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, updateMessageBodyCreator } from '../../../redux/dialogs-reducer';
import Message from './Message';

let mapStateToProps = (state) => {
	return {
		newMessage: state.messagesPage.newMessage,
		newMessageText: state.messagesPage.newMessageText,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
		updateNewMessageBody: (body) => {
			dispatch(updateMessageBodyCreator(body))
		},
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Message)

// let MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

// export default MessageContainer