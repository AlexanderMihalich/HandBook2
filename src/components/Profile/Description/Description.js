import React from 'react'
import style from './Description.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Description = (props) => {
	if (!props.profile) {
		return (<Preloader />)
	}
	return (
		<div className={style.description} >
			<div className={style.description__avatar}>
				{<img alt="" src={props.profile.photos.large} />}
			</div>
			<div className={style.description__info}>
				<h2 className={`${style.description__name} title`} >{props.profile.fullName}</h2>
				<ul>
					<li>
						<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
					</li>
					<li className={style.description__item}>{props.profile.lookingForAJobDescription}</li>
					<li className={style.description__item}><a href={props.profile.contacts.instagram}>My Instagram</a></li>
				</ul>
			</div>
		</div>

	)
}
export default Description

