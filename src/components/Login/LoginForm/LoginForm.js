import React from 'react'
import style from '../Login.module.css'
import styleError from '../../common/FormsControls/FormsControls.module.css'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { createField, Element } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)
const Input = Element("input");

let LoginForm = ({ handleSubmit, error }) => {

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			{createField("text", "email", "Email", Input, [required], error)}
			{error && <div className={styleError.form__error}>
				{error}
			</div>}
			{createField("password", "password", "Password", Input, [required, maxLength10], error)}
			<div className={style.form__item}>
				<Field id="rememberMe" type="checkbox" name="rememberMe" component='input' />
				<label for="rememberMe" className={style.form__label}>remember me</label>
			</div>
			<div className={style.form__item}>
				<button className={style.form__btn}>Login</button>
			</div>
		</form>
	)
}
LoginForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginForm