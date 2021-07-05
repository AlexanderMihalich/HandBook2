import React from 'react'
import style from '../Description.module.css'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import cn from 'classnames';

const ProfileInfo = ({ profile, isOwner, status, updateStatus, goToEditMode }) => {


	return (
		<div className={style.description__info}>
			<h2 className={`${style.description__name} title`} >{profile.fullName}</h2>
			<ul className={style.description__list}>
				<li>
					<ProfileStatus status={status} updateStatus={updateStatus} />
				</li>
				<li className={style.description__item}><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</li>
				{profile.lookingForAJob &&
					<li className={style.description__item}><b>My professional skils</b>: {profile.lookingForAJobDescription}</li>
				}
				<li className={style.description__item}><b>About me</b>: {profile.aboutMe} </li>
				{/* <li className={style.description__item}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
				</li> */}
			</ul>
			{isOwner &&
				<div className={style.description__btnInfo}>
					<button onClick={goToEditMode} className={style.description__btn} >Edit</button>
				</div>
			}
		</div>
	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return <li className={cn(style.description__item, style.description__item_c)}><b>{contactTitle}</b>: {contactValue} </li>
}

export default ProfileInfo