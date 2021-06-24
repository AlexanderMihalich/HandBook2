import React from 'react'
import { connect } from 'react-redux'
import { followSuccess, setCurrentPage, unfollowSuccess, toogleFolowingProgress, getUsers, follow, unfollow } from '../../redux/users-reducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageChanched = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
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
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInPropgress: state.usersPage.followingInPropgress,

	}
}
export default compose(
	connect(mapStateToProps,
		{
			followSuccess, unfollowSuccess, setCurrentPage, toogleFolowingProgress,
			getUsers, follow, unfollow
		}),
	withAuthRedirect
)(UsersAPIContainer)