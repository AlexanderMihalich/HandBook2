import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialog.module.css'

const Dialog = ({ id, avatar, user }) => {
	return (
		<div className={style.dialogs__dialogItem}>
			<NavLink to={'/dialogs/' + id} className={style.dialog__user}>
				<img alt="" src={avatar} className={style.dialog__avatar} />
				{user}
			</NavLink>
		</div>
	)
}


export default Dialog