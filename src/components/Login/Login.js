import React from 'react'
import { login } from '../../redux/auth-reducer'
import style from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuth }) => {

	const sendData = (formData) => {
		login(formData.email, formData.password, formData.rememberMe)
	}
	if (isAuth) {
		return <Redirect to={"/profile"} />
	}
	return (
		<div className={style.login}>
			<h1 className={style.login__title}>Login</h1>
			<LoginForm onSubmit={sendData} />
		</div>
	)
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)