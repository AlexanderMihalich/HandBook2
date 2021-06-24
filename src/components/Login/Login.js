import React from 'react'
import style from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'

const Login = (props) => {

	const sendData = (formData) => {
		console.log(formData)
	}

	return (
		<div className={style.login}>
			<h1 className={style.login__title}>Login</h1>
			<LoginForm onSubmit={sendData} />
		</div>
	)
}

export default Login