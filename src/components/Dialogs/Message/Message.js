import React from 'react'
import style from './Message.module.css'
import Sms from '../Sms/Sms';

const Message = ({ message }) => {

	return (
		<div className={style.dialogs__message}>
			<div className={style.dialogs__dialog}>
				{message}
			</div>
		</div>
	)
}

export default Message