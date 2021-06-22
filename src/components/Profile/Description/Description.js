import React from 'react'
import style from './Description.module.css'

class Description extends React.Component {
	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}

	render() {
		if (!this.props.profile) {
			return (
				<div className={style.description}>
					<div className={style.description__avatar}>
						<img src='https://images.wallpaperscraft.ru/image/serfing_chelovek_siluet_184882_1920x1080.jpg' />
					</div>
					<div className={style.description__info}>
						<h2 className={`${style.description__name} title`} >Alexander Z.</h2>
						<ul>
							<li>
								{(!this.state.editMode)
									? <label for="status" onDoubleClick={this.activateEditMode} className={style.description__status}>{this.props.status}</label>
									: <input id="status" autoFocus onBlur={this.deactivateEditMode} type="text" className={style.description__input} value={this.props.status} />
								}
							</li>
							<li className={style.description__item}>Date dirth: 28 marth</li>
							<li className={style.description__item}>City: Kyiv</li>
						</ul>
					</div>
				</div>
			)
		}
		return (
			<div className={style.description} >
				<div className={style.description__avatar}>
					<img src={this.props.profile.photos.large} />
				</div>
				<div className={style.description__info}>
					<h2 className={`${style.description__name} title`} >{this.props.profile.fullName}</h2>
					<ul>
						<li>
							{(!this.state.editMode)
								? <label for="status" onDoubleClick={this.activateEditMode} className={style.description__status}>{this.props.profile.aboutMe}</label>
								: <input id="status" autoFocus onBlur={this.deactivateEditMode} type="text" className={style.description__input} value={this.props.profile.aboutMe} />
							}
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