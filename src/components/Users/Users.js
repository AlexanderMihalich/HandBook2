import React from 'react'
import './Users.css'
import userPhoto from '../../img/user.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {

	let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

	let pages = []
	// for (let i = 1; i <= pageCount; i++) {
	for (let i = 1; i <= 11; i++) {
		pages.push(i)
	}

	let clickUserUnfollow = (id) => {
		// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
		// 	withCredentials: true,
		// 	headers: {
		// 		"API-KEY": "48f3010c-f192-4caf-b70c-1358b38c2366"
		// 	}
		// })
		usersAPI.buttonUnfollow(id)
			.then(data => {
				if (data.resultCode == 0) {
					props.unfollow(id)
				}
			})
	}
	let clickUserFollow = (id) => {
		// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
		// 	withCredentials: true,
		// 	headers: {
		// 		"API-KEY": "48f3010c-f192-4caf-b70c-1358b38c2366"
		// 	}
		// })
		usersAPI.buttonFollow(id).then(data => {
			if (data.resultCode == 0) {
				props.follow(id)
			}
		})
	}

	return (
		<div className='users'>
			<h2 className='users__title'>Users</h2>
			<div className='users__body'>
				{props.usersPage.map(u =>
					<div key={u.id} className='user'>
						<div className='user__ava'>
							{/* <img src={u.avatar} /> */}
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small !== null ? u.photos.small : userPhoto} />
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
									? <button className='user__btn user__btn_red' onClick={() => {
										clickUserUnfollow(u.id)
									}}>Unfollow</button>
									: <button className='user__btn' onClick={() => {
										clickUserFollow(u.id)
									}}>Follow</button>
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