import React from 'react'
import './Users.css'
import User from './User/User'
import Pagination from '../common/Pagination/Pagination'

const Users = ({ usersPage, followingInPropgress, unfollow, follow, totalItemsCount, pageSize, currentPage, onPageChanched, ...props }) => {

	return (
		<div className='users'>
			<div className='users__body'>
				{usersPage.map(u => <User key={u.id} user={u} followingInPropgress={followingInPropgress} unfollow={unfollow} follow={follow} />)}
				<Pagination totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanched={onPageChanched} />
			</div>
		</div >
	)
}
export default Users