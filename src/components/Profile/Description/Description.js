import React from 'react'
import style from './Description.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

class Description extends React.Component {
	render() {
		if (!this.props.profile) {
			return (<Preloader />)
		}
		return (
			<div className={style.description} >
				<div className={style.description__avatar}>
					{<img alt="" src={this.props.profile.photos.large} />}
				</div>
				<div className={style.description__info}>
					<h2 className={`${style.description__name} title`} >{this.props.profile.fullName}</h2>
					<ul>
						<li>
							{/* {(!this.state.editMode)
								// ? <span onDoubleClick={this.activateEditMode} className={style.description__status}>{this.props.profile.aboutMe}</span>
								? <span onDoubleClick={this.activateEditMode} className={style.description__status}>{this.props.status || "No status"}</span>
								: <input autoFocus onBlur={this.deactivateEditMode} onChange={this.onStatusChange} type="text" className={style.description__input} value={this.state.status} />
							} */}
							<ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus} />
						</li>
						<li className={style.description__item}>{this.props.profile.lookingForAJobDescription}</li>
						<li className={style.description__item}><a href={this.props.profile.contacts.instagram}>My Instagram</a></li>
					</ul>
				</div>
			</div>

		)
	}
}
export default Description

