import React from 'react'
import style from '../Login.module.css'
import styleError from '../../common/FormsControls/FormsControls.module.css'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Element } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)
const Input = Element("input");

let LoginForm = (props) => {


	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div className={`${style.form__item} ${props.error ? styleError.error__span : ""}`}>
				<Field type="text" name="email" placeholder="Email" component={Input} validate={[required]} className={style.form__input} />
			</div>
			{props.error && <div className={styleError.form__error}>
				{props.error}
			</div>}
			<div className={`${style.form__item} ${props.error ? styleError.error__span : ""}`}>
				<Field type="password" name="password" placeholder="Password" component={Input} validate={[required, maxLength10]} className={style.form__input} />
			</div>
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