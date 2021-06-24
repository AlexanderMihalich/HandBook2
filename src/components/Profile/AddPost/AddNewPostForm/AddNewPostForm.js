import React from 'react'
import style from '../AddPost.module.css'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../redux/validators/validators';
import { Element } from '../../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30)
const Textarea = Element("textarea");

let AddNewPostForm = (props) => {
	return (
		<form form onSubmit={props.handleSubmit} >
			<Field name="newPostText" component={Textarea} validate={[required, maxLength30]} placeholder="Post message" />
			<button className={style.content__btn}>Add Post</button>
		</form>
	)
}

AddNewPostForm = reduxForm({ form: 'addPostProfile' })(AddNewPostForm)

export default AddNewPostForm