import React, { useEffect, useState } from 'react'
import style from '../Description.module.css'

const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		(!editMode)
			//*  ? <span className={style.description__status}>{props.profile.aboutMe}</span> */
			? <span onDoubleClick={activateEditMode} className={style.description__status}>{props.status || "No status"}</span>
			: <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} type="text" className={style.description__input} value={status} />
	)
}

export default ProfileStatus