import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
	}
}

export default compose(
	connect(mapStateToProps),
	withAuthRedirect
)(Dialogs)

// let DialogsContainer = connect(mapStateToProps)(Dialogs)

// export default DialogsContainer