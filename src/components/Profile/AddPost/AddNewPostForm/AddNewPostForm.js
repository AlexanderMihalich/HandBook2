import React from 'react'
import style from '../AddPost.module.css'
import { Field, reduxForm } from 'redux-form';

let AddNewPostForm = (props) => {
	return (
		<form form onSubmit={props.handleSubmit} >
			<Field name="newPostText" component="textarea" className={`${style.content__textarea} textarea`} />
			<button className={style.content__btn}>Add Post</button>
		</form>
	)
}

AddNewPostForm = reduxForm({ form: 'addPostProfile' })(AddNewPostForm)

export default AddNewPostForm