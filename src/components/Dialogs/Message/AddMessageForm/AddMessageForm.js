import React from 'react'
import style from '../Message.module.css'
import { Field, reduxForm } from 'redux-form';

let AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.dialogs__add}>
			<Field type="text" name="newMessageText" placeholder="Enter your message" component="textarea" className={`${style.dialogs__textarea} textarea`} />
			<button className={style.diaolgs__btn}></button>
		</form>
	)
}
AddMessageForm = reduxForm({ form: 'dialogsMessage' })(AddMessageForm)

export default AddMessageForm