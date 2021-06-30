import React from 'react'
import style from './FormsControls.module.css'
import styleLogin from '../../Login/Login.module.css'
import styleError from '../../common/FormsControls/FormsControls.module.css'
import { Field } from 'redux-form';

export const Element = Element => ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={`${style.form__control} ${hasError ? style.error : ""}`}>
			{Element == "textarea"
				? <Element {...input} {...props} className={`${style.form__textarea} textarea`} />
				: <Element {...input} {...props} className={style.form__element} />
			}
			{hasError && <span> {meta.error} </span>}
		</div>
	)
}
export const createField = (type, name, placeholder, component, validate, error) => (
	<div className={`${styleLogin.form__item} ${error ? styleError.error__span : ""}`}>
		<Field type={type} name={name} placeholder={placeholder} component={component} validate={validate} className={styleLogin.form__input} />
	</div>
)