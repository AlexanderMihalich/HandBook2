import React from 'react'
import style from '../Description.module.css'
import styleError from '../../../common/FormsControls/FormsControls.module.css'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../../../utils/validators/validators';
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import cn from 'classnames';

let ProfileInfoForm = ({ profile, status, updateStatus, handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit} className={style.description__info}>
			<h2 className={style.description__name} >{createField("text", "fullName", "Full name", Input, [])}</h2>
			<ul>
				<li className={style.description__formItem_s}>
					<ProfileStatus status={status} updateStatus={updateStatus} />
				</li>
				<li className={cn(style.description__formItem, style.description__formCheckbox)}>
					<label for="LookingForAJob" className={style.description__label}><b>Looking for a job</b>:</label>
					<Field id="LookingForAJob" type="checkbox" name="LookingForAJob" component='input' className={style.description__checkbox} />
				</li>
				<li className={style.description__formItem}><b>My professional skils</b>: {createField(null, "lookingForAJobDescription", "My professional skils", Textarea, [])}</li>
				<li className={style.description__formItem}><b>About me</b>:  {createField(null, "aboutMe", "About me", Textarea, [])} </li>
				{/* <li className={cn(style.description__formItem, style.description__formItem_m)}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <ContactForm key={key} contactTitle={key} contactValue={createField("text", `contacts. ${key}`, key, Input, [])} />
				})}
				</li> */}
			</ul>
			<div className={style.description__btnInfo}>
				<button className={style.description__btn} >Save</button>
			</div>
			{error && <div className={styleError.form__error}>{error}</div>}
		</form>
	)
}

const ContactForm = ({ contactTitle, contactValue }) => {
	return <li className={cn(style.description__itemActive, style.description__item_c)}><b>{contactTitle}:</b> {contactValue} </li>
}

ProfileInfoForm = reduxForm({ form: 'edit-profile' })(ProfileInfoForm)

export default ProfileInfoForm