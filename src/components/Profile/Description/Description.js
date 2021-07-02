import React from 'react'
import style from './Description.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { ImageUnderstudy } from '../../../utils/ImageUnderstudy/ImageUnderstudy';

const Description = ({ profile, isOwner, status, updateStatus, savePhoto }) => {
	if (!profile) {
		return (<Preloader />)
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	return (
		<div className={style.description} >
			<div className={style.description__avatar}>
				{ImageUnderstudy(profile.photos.large)}
				{isOwner &&
					<div className={style.description__files}>
						<input type={"file"} accept=".jpg, .png" id="formImage" className={style.description__input} onChange={onMainPhotoSelected} />
						<span className={style.description__btn}>Choose file</span>
					</div>
				}
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

