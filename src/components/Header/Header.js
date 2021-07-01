import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = ({ isAuth, login, logout }) => {
	return (
		<header className={style.header}>
			<div className={`${style.content} _container`}>
				<div className={style.header__logo} >
					<img alt="" src='https://image000.flaticon.com/png/512/187/187850.png' />
					<h1 className={style.header__title}>HandBook</h1>
				</div>
				<div className={style.header__login}>
					{isAuth
						? <div> {login} - <button onClick={logout} className={style.header__btn}>Log out</button> </div>
						: <NavLink to={'/login'} >Login</NavLink>}
				</div>
			</div>
		</header>
	)
}
export default Header