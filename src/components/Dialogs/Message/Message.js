import React from 'react'
import style from './Message.module.css'
import Sms from './Sms/Sms';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Message = (props) => {

	let smsElement = props.newMessage.map(s => <Sms sms={s.sms} key={s.id} />)

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageText)
	}

	return (
		<div className={style.dialogs__message}>
			{props.message}
			{smsElement}
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	)
}

export default Message