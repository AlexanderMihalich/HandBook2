import React from 'react'
import style from './Login.module.css'
import { reduxForm, Field } from 'redux-form';


const LoginForm = (props) => {
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div className={style.form__item}>
				<Field placeholder={"Login"} name={"login"} component={"input"} className={style.form__input} />
			</div>
			<div className={style.form__item}>
				<Field placeholder={"Password"} name={"password"} component={'input'} className={style.form__input} />
			</div>
			<div className={style.form__item}>
				<Field id={"rememverMe"} name={"rememverMe"} component={'input'} type={"checkbox"} />
				<label for="rememverMe" className={style.form__label}>rememver me</label>
			</div>
			<div className={style.form__item}>
				<button className={style.form__btn}>Login</button>
			</div>
		</form>
	)
}

const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData)
	}
	return (
		<div className={style.login}>
			<h1 className={style.login__title}>Login</h1>
			<LoginRedaxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login