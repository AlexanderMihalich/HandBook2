import React from 'react'
import style from './Description.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ImageUnderstudy } from '../../../utils/ImageUnderstudy/ImageUnderstudy';

const Description = ({ profile, status, updateStatus, }) => {
	if (!profile) {
		return (<Preloader />)
	}
	return (
		<div className={style.description} >
			<div className={style.description__avatar}>
				{ImageUnderstudy(profile.photos.large)}
			</div>
			<div className={style.description__info}>
				<h2 className={`${style.description__name} title`} >{profile.fullName}</h2>
				<ul>
					<li>
						<ProfileStatus status={status} updateStatus={updateStatus} />
					</li>
					<li className={style.description__item}>{profile.lookingForAJobDescription}</li>
					<li className={style.description__item}><a href={profile.contacts.instagram}>My Instagram</a></li>
				</ul>
			</div>
		</div>

	)
}
export default Description

