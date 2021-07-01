import React from 'react'
import './Users.css'
import { connect } from 'react-redux'
import { followSuccess, setCurrentPage, unfollowSuccess, toogleFolowingProgress, requestUsers, follow, unfollow } from '../../redux/users-reducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUserCount, getUsers } from '../../selectors/users-selectors';

class UsersAPIContainer extends React.Component {
	componentDidMount() {
		let { currentPage, pageSize } = this.props
		this.props.getUsers(currentPage, pageSize)
	}
	onPageChanched = (pageNumber) => {
		let { pageSize } = this.props
		this.props.getUsers(pageNumber, pageSize)
	}

	render() {
		return <div className='users__container'>
			<h2 className='users__title'>Users</h2>
			{this.props.isFetching ? <Preloader /> : null}
			< Users
				usersPage={this.props.usersPage}
				totalUserCount={this.props.totalUserCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanched={this.onPageChanched}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInPropgress={this.props.followingInPropgress}
			/>
		</div>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: getUsers(state),
		pageSize: getPageSize(state),
		totalUserCount: getTotalUserCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInPropgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps,
		{
			followSuccess, unfollowSuccess, setCurrentPage, toogleFolowingProgress,
			getUsers: requestUsers, follow, unfollow
		}),
)(UsersAPIContainer)