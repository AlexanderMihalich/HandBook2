import React, { useEffect, useState } from 'react'
import style from '../Description.module.css'

const ProfileStatus = ({ status, updateStatus, ...props }) => {

	let [editMode, setEditMode] = useState(false);
	let [statusHook, setStatus] = useState(status);

	useEffect(() => {
		setStatus(status)
	}, [status])

	const activateEditMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		updateStatus(statusHook)
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		(!editMode)
			//*  ? <span className={style.description__status}>{props.profile.aboutMe}</span> */
			? <span onDoubleClick={activateEditMode} className={style.description__status}>{status || "No status"}</span>
			: <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} type="text" className={style.description__input} value={statusHook} />
	)
}

export default ProfileStatus