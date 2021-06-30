import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage } from '../../../redux/dialogs-reducer';
import Message from './Message';

let mapStateToProps = (state) => {
	return {
		newMessageText: state.messagesPage.newMessageText,
	}
}
export default compose(
	connect(mapStateToProps, {
	})
)(Message)
