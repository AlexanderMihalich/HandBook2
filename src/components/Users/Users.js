import React from 'react'
import './Users.css'
import userPhoto from '../../img/user.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

	let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

	let pages = []
	// for (let i = 1; i <= pageCount; i++) {
	for (let i = 1; i <= 11; i++) {
		pages.push(i)
	}

	return (
		<div className='users'>
			<div className='users__body'>
				{props.usersPage.map(u =>
					<div key={u.id} className='user'>
						<div className='user__ava'>
							{/* <img src={u.avatar} /> */}
							<NavLink to={'/profile/' + u.id}>
								<img alt="" src={u.photos.small !== null ? u.photos.small : userPhoto} />
							</NavLink>
						</div>
						<div className='user__items'>
							<div className='user__item'>
								<h3 className='user__name'>{u.name}</h3>
								<div className='user__text'>{"u.country"}</div>
								<div className='user__text'>{"u.city"}</div>
							</div>
							<div className='user__btns'>
								{u.followed
									? <button className='user__btn user__btn_red'
										disabled={props.followingInPropgress.some(id => id === u.id)}
										onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
									: <button className='user__btn'
										disabled={props.followingInPropgress.some(id => id === u.id)}
										onClick={() => { props.follow(u.id) }}>Follow</button>
								}
							</div>
						</div>
					</div>)}
				<ul className="users__pagination pagination">
					{pages.map((p, index) => {
						return <li key={index} className={props.currentPage === p && "pagination__item pagination__item_active" || "pagination__item"}
							onClick={() => { props.onPageChanched(p) }}> {p}</li>
					})}
				</ul>
			</div>
		</div >
	)
}
export default Users