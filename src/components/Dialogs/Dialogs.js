import React from 'react'
import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import style from './Dialogs.module.css'
import MessageContainer from './Message/MessageContainer'
import AddMessageForm from './Message/AddMessageForm/AddMessageForm';
import Sms from './Sms/Sms'
const Dialogs = ({ dialogs, messages, newMessage, sendMessage }) => {

	// let dialogsElement = dialogs.map(d => <Dialog id={d.id} key={d.id} user={d.user} avatar={d.avatar} />)
	let messagesElement = messages.map(m => <MessageContainer message={m.message} key={m.id} />)
	let smsElement = newMessage.map(s => <Sms sms={s.sms} key={s.id} />)
	let addNewMessage = (values) => {
		sendMessage(values.newMessageText)
	}
	return (
		<div className={style.dialogs}>
			{/* <div className={style.dialogs__dialogItems}>
				{dialogsElement}
			</div> */}
			<div className={style.dialogs__messages}>
				{messagesElement}
				{smsElement}
				<AddMessageForm onSubmit={addNewMessage} />
			</div>
		</div>
	)
}

export default Dialogs