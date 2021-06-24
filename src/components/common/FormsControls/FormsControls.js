import React from 'react'
import style from './FormsControls.module.css'

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
	);
};
