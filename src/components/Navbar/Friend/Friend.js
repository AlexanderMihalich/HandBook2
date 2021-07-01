import React from 'react'
import style from './../Navbar.module.css'

const Friend = ({ avatar, user }) => {

	return (
		<div className={style.nav__friend}>
			<img alt="" className={style.nav__avatar} src={avatar} />
			<span className={style.nav__name}>{user}</span>
		</div>
	)
}
export default Friend