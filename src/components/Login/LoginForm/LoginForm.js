import React from 'react'
import style from '../Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../redux/validators/validators';
import { Element } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)
const Input = Element("input");

let LoginForm = (props) => {


	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div className={style.form__item}>
				<Field type="text" name="login" placeholder="Login" component={Input} validate={[required]} className={style.form__input} />
			</div>
			<div className={style.form__item}>
				<Field type="password" name="password" placeholder="Password" component={Input} validate={[required, maxLength10]} className={style.form__input} />
			</div>
			<div className={style.form__item}>
				<Field id="rememverMe" type="checkbox" name="rememverMe" component='input' />
				<label for="rememverMe" className={style.form__label}>rememver me</label>
			</div>
			<div className={style.form__item}>
				<button className={style.form__btn}>Login</button>
			</div>
		</form>
	)
}
LoginForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginForm